// === 체인메일 오버레이 — 원본 이미지를 최상위 레이어에 그물처럼 깔기 ===
(function () {
  'use strict';

  var base = window._kBaseUrl || '';
  var srcs = [
    base + '/assets/images/chainmail-1.png',
    base + '/assets/images/chainmail-2.png'
  ];

  function init() {
    var wrap = document.createElement('div');
    wrap.id = 'chainmail-overlay';
    wrap.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;overflow:hidden;';

    srcs.forEach(function (src, i) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.draggable = false;

      // 이미지 1: 왼쪽 아래, 이미지 2: 오른쪽 위
      if (i === 0) {
        img.style.cssText = 'position:absolute;bottom:0;left:0;height:100vh;width:auto;opacity:0.35;object-fit:contain;';
      } else {
        img.style.cssText = 'position:absolute;top:0;right:0;height:100vh;width:auto;opacity:0.35;object-fit:contain;';
      }

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
