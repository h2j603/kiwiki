// === 체인메일 오버레이 — 그물 파편이 페이지를 덮고, 마우스로 뚫는 인터랙션 ===
(function () {
  'use strict';

  // --- 설정 ---
  var TILE_SIZE = 90;           // 타일 기본 크기 (px)
  var TILE_VARIANCE = 30;       // 타일 크기 랜덤 편차
  var MOUSE_RADIUS = 180;       // 마우스 반발 반경
  var REPEL_STRENGTH = 12;      // 반발 강도
  var SPRING = 0.03;            // 복원 스프링 계수
  var FRICTION = 0.85;          // 감쇠
  var OPACITY = 0.6;            // 타일 기본 불투명도
  var IMG_SRCS = [
    (window._kBaseUrl || '') + '/assets/images/chainmail-1.png',
    (window._kBaseUrl || '') + '/assets/images/chainmail-2.png'
  ];

  // --- baseurl 감지 ---
  // Jekyll의 baseurl을 meta 태그나 script 경로에서 추출
  (function detectBase() {
    var scripts = document.querySelectorAll('script[src*="chainmail-overlay"]');
    if (scripts.length) {
      var src = scripts[0].getAttribute('src');
      var idx = src.indexOf('/assets/');
      if (idx > 0) {
        var base = src.substring(0, idx);
        IMG_SRCS[0] = base + '/assets/images/chainmail-1.png';
        IMG_SRCS[1] = base + '/assets/images/chainmail-2.png';
      }
    }
  })();

  var canvas, ctx;
  var tiles = [];
  var images = [];
  var loaded = 0;
  var mouseX = -9999, mouseY = -9999;
  var raf;

  // --- 이미지 로드 ---
  function loadImages(cb) {
    IMG_SRCS.forEach(function (src, i) {
      var img = new Image();
      img.onload = function () {
        images[i] = img;
        loaded++;
        if (loaded === IMG_SRCS.length) cb();
      };
      img.onerror = function () {
        // 로드 실패 시 빈 이미지로 대체
        images[i] = null;
        loaded++;
        if (loaded === IMG_SRCS.length) cb();
      };
      img.src = src;
    });
  }

  // --- 타일 생성: 이미지를 그리드로 분할하고 화면에 배치 ---
  function createTiles() {
    tiles = [];
    var W = canvas.width;
    var H = canvas.height;

    images.forEach(function (img) {
      if (!img) return;

      var iw = img.naturalWidth;
      var ih = img.naturalHeight;

      // 이미지를 그리드로 분할
      var cols = Math.ceil(iw / TILE_SIZE);
      var rows = Math.ceil(ih / TILE_SIZE);

      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          // 소스 영역
          var sx = c * TILE_SIZE;
          var sy = r * TILE_SIZE;
          var sw = Math.min(TILE_SIZE, iw - sx);
          var sh = Math.min(TILE_SIZE, ih - sy);
          if (sw <= 0 || sh <= 0) continue;

          // 투명 타일 건너뛰기 — 중앙 픽셀의 알파값 체크 (나중에 offscreen canvas로)
          // 일단 모든 타일 생성, 렌더링 시 자연스럽게 투명 부분은 안 보임

          // 화면 배치 위치 — 랜덤 분산
          var variance = (Math.random() - 0.5) * TILE_VARIANCE;
          var destX = (Math.random() * (W + 200)) - 100;
          var destY = (Math.random() * (H + 200)) - 100;

          // 렌더링 크기 (원본 비율 유지, 약간 랜덤 스케일)
          var scale = 0.4 + Math.random() * 0.5;
          var dw = sw * scale;
          var dh = sh * scale;

          tiles.push({
            img: img,
            sx: sx, sy: sy, sw: sw, sh: sh,
            x: destX, y: destY,
            originX: destX, originY: destY,
            w: dw, h: dh,
            vx: 0, vy: 0,
            opacity: OPACITY * (0.3 + Math.random() * 0.7),
            rotation: (Math.random() - 0.5) * 0.3,
            scale: scale
          });
        }
      }
    });

    // 타일 수 제한 — 성능 위해 최대 300개
    if (tiles.length > 300) {
      // 랜덤 셔플 후 자르기
      tiles.sort(function () { return Math.random() - 0.5; });
      tiles = tiles.slice(0, 300);
    }
  }

  // --- 캔버스 초기화 ---
  function initCanvas() {
    canvas = document.createElement('canvas');
    canvas.id = 'chainmail-overlay';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
  }

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createTiles();
  }

  // --- 마우스 추적 ---
  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  function onMouseLeave() {
    mouseX = -9999;
    mouseY = -9999;
  }

  // --- 애니메이션 루프 ---
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < tiles.length; i++) {
      var t = tiles[i];

      // 마우스와 거리 계산
      var dx = t.x + t.w / 2 - mouseX;
      var dy = t.y + t.h / 2 - mouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);

      // 반발력
      if (dist < MOUSE_RADIUS && dist > 0) {
        var force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH;
        var angle = Math.atan2(dy, dx);
        t.vx += Math.cos(angle) * force;
        t.vy += Math.sin(angle) * force;
      }

      // 스프링 복원
      t.vx += (t.originX - t.x) * SPRING;
      t.vy += (t.originY - t.y) * SPRING;

      // 감쇠
      t.vx *= FRICTION;
      t.vy *= FRICTION;

      // 위치 업데이트
      t.x += t.vx;
      t.y += t.vy;

      // 마우스 근처 투명도 변화
      var alpha = t.opacity;
      if (dist < MOUSE_RADIUS) {
        alpha *= (dist / MOUSE_RADIUS) * 0.5 + 0.1;
      }

      // 그리기
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(t.x + t.w / 2, t.y + t.h / 2);
      ctx.rotate(t.rotation);
      ctx.drawImage(t.img, t.sx, t.sy, t.sw, t.sh, -t.w / 2, -t.h / 2, t.w, t.h);
      ctx.restore();
    }

    raf = requestAnimationFrame(animate);
  }

  // --- 시작 ---
  function init() {
    initCanvas();
    loadImages(function () {
      createTiles();
      animate();
    });

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', function () {
      cancelAnimationFrame(raf);
      resize();
      animate();
    });
  }

  // DOM 준비 후 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
