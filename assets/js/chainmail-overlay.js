// === 체인메일 오버레이 — 이미지 분리 배치, 새로고침마다 랜덤 ===
(function () {
  'use strict';

  // 배경색 랜덤 적용
  var bgColors = ['#54fe12', '#f70000'];
  document.documentElement.style.setProperty('--kw-bg', bgColors[Math.random() > 0.5 ? 1 : 0]);

  var base = window._kBaseUrl || '';
  var srcs = [
    base + '/assets/images/chainmail-1.png',
    base + '/assets/images/chainmail-2.png'
  ];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function ensureStyles() {
    if (document.getElementById('chainmail-overlay-styles')) return;
    var style = document.createElement('style');
    style.id = 'chainmail-overlay-styles';
    style.textContent =
      '@keyframes chainmail-shake {' +
      '  0%, 100% { transform: translate(0, 0) rotate(0); }' +
      '  10% { transform: translate(-10px, -2px) rotate(-1.2deg); }' +
      '  20% { transform: translate(10px, 2px) rotate(1.2deg); }' +
      '  30% { transform: translate(-8px, -1px) rotate(-0.9deg); }' +
      '  40% { transform: translate(8px, 1px) rotate(0.9deg); }' +
      '  50% { transform: translate(-6px, -1px) rotate(-0.6deg); }' +
      '  60% { transform: translate(6px, 1px) rotate(0.6deg); }' +
      '  70% { transform: translate(-4px, 0) rotate(-0.3deg); }' +
      '  80% { transform: translate(4px, 0) rotate(0.3deg); }' +
      '  90% { transform: translate(-2px, 0) rotate(0); }' +
      '}' +
      '@keyframes chainmail-fall {' +
      '  0% { transform: translateY(0) rotate(0); opacity: 1; }' +
      '  100% { transform: translateY(120vh) rotate(6deg); opacity: 0; }' +
      '}' +
      '#chainmail-overlay.is-shaking {' +
      '  animation: chainmail-shake 0.5s ease-in-out;' +
      '}' +
      '#chainmail-overlay.is-dismissing {' +
      '  pointer-events: none;' +
      '  animation: chainmail-shake 0.5s ease-in-out,' +
      '             chainmail-fall 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.5s forwards;' +
      '}';
    document.head.appendChild(style);
  }

  function init() {
    ensureStyles();

    var wrap = document.createElement('div');
    wrap.id = 'chainmail-overlay';
    var docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    wrap.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:' + docH + 'px;z-index:9999;overflow:hidden;cursor:pointer;will-change:transform,opacity;';

    // 첫 클릭: 흔들리기만, 두 번째 클릭: 흔들린 뒤 아래로 떨어지며 사라짐
    var clicked = false;
    wrap.addEventListener('click', function () {
      if (wrap.classList.contains('is-dismissing')) return;
      if (!clicked) {
        clicked = true;
        wrap.classList.add('is-shaking');
        setTimeout(function () { wrap.classList.remove('is-shaking'); }, 500);
        return;
      }
      wrap.classList.remove('is-shaking');
      // 다음 프레임에 dismiss 클래스 추가 — 애니메이션 재시작 보장
      requestAnimationFrame(function () {
        wrap.classList.add('is-dismissing');
      });
      setTimeout(function () { wrap.remove(); }, 1400);
    });

    // 화면을 두 영역으로 분할 — 수평 or 수직 랜덤
    var splitVertical = Math.random() > 0.5;
    // 분할 비율 랜덤 (40~60%)
    var splitRatio = rand(0.35, 0.65);

    srcs.forEach(function (src, i) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.draggable = false;

      // 랜덤 회전 (-15 ~ 15도)
      var rotation = rand(-15, 15);
      // 랜덤 스케일 (화면보다 크게, 110~160%)
      var scale = rand(0.7, 1.0);

      var styles = 'position:absolute;transform-origin:center center;';
      styles += 'transform:rotate(' + rotation + 'deg) scale(' + scale + ');';

      if (splitVertical) {
        // 수직 분할: 왼쪽/오른쪽
        styles += 'top:0;height:100%;';
        if (i === 0) {
          styles += 'left:0;width:' + (splitRatio * 100) + '%;';
        } else {
          styles += 'right:0;width:' + ((1 - splitRatio) * 100) + '%;';
        }
      } else {
        // 수평 분할: 위/아래
        styles += 'left:0;width:100%;';
        if (i === 0) {
          styles += 'top:0;height:' + (splitRatio * 100) + '%;';
        } else {
          styles += 'bottom:0;height:' + ((1 - splitRatio) * 100) + '%;';
        }
      }

      styles += 'object-fit:cover;';
      img.style.cssText = styles;
      wrap.appendChild(img);
    });

    document.body.appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
