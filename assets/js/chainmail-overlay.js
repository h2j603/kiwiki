// === 체인메일 오버레이 — 이미지 분리 배치, 새로고침마다 랜덤 ===
(function () {
  'use strict';

  var base = window._kBaseUrl || '';
  var srcs = [
    base + '/assets/images/chainmail-1.png',
    base + '/assets/images/chainmail-2.png'
  ];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function init() {
    var wrap = document.createElement('div');
    wrap.id = 'chainmail-overlay';
    var docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    wrap.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:' + docH + 'px;z-index:9999;overflow:hidden;cursor:pointer;transition:opacity 0.4s ease;';

    // 클릭하면 사라짐
    wrap.addEventListener('click', function () {
      wrap.style.opacity = '0';
      setTimeout(function () { wrap.remove(); }, 400);
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
      var scale = rand(1.1, 1.6);

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
