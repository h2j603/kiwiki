// === KiwiZero × Pretext: Text Reflow Around Kiwi Creatures ===
// Enhances existing KiwiZero Phase 2 (multiply image injection)
// by making paragraph text organically flow around the creature images
// using Pretext's DOM-free text layout at 60fps.
//
// Image = DOM <img> with original CSS filter + mix-blend-mode:multiply
// Text  = transparent <canvas> rendered by Pretext

import { prepareWithSegments, layoutNextLine } from 'https://cdn.jsdelivr.net/npm/@chenglou/pretext/+esm';

(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  function run() {
    if (!window._kViruses || !window._kViruses.includes('kiwizero')) return;

    var lang = window._kLang || 'en';
    var fontFamily = lang === 'ko' ? '"Noto Serif KR", serif'
                   : lang === 'ja' ? '"Noto Sans JP", sans-serif'
                   : '"EB Garamond", serif';
    var fontSize = 17;
    var lh = 28;
    var font = fontSize + 'px ' + fontFamily;
    var dpr = window.devicePixelRatio || 1;

    // Same creature images used by existing Phase 2 in kiwiki.js
    var imgFolder = '/kiwiki/assets/images/kiwi-creature/';
    var creatureFiles = ['IMG_6034.jpeg','IMG_6035.jpeg','IMG_6039.jpeg','IMG_6041.jpeg','IMG_6042.jpeg','IMG_6046.jpeg'];
    var creatures = [];
    creatureFiles.forEach(function(f) {
      var img = new Image();
      img.src = imgFolder + f;
      creatures.push(img);
    });

    var count = 0;
    var MAX = 5;

    function infectWithReflow() {
      if (count >= MAX) return;

      var ready = creatures.filter(function(i) { return i.complete && i.naturalWidth > 0; });
      if (!ready.length) return;

      var ps = document.querySelectorAll('.main-content p:not(.wiki-title)');
      if (ps.length < 3) return;

      var p = null;
      for (var i = 0; i < 20; i++) {
        var c = ps[Math.floor(Math.random() * ps.length)];
        if (!c.getAttribute('data-pretext') && c.textContent.trim().length > 60) {
          p = c;
          break;
        }
      }
      if (!p) return;
      p.setAttribute('data-pretext', '1');
      count++;

      var text = p.textContent.trim();
      var W = p.offsetWidth;
      if (W < 150) return;

      var prepared = prepareWithSegments(text, font);

      // Pick creature and placement
      var creature = ready[Math.floor(Math.random() * ready.length)];
      var side = Math.random() > 0.5 ? 'right' : 'left';
      var imgMaxW = 55 + Math.floor(Math.random() * 55);
      var imgAspect = creature.naturalHeight / creature.naturalWidth;
      var imgMaxH = imgMaxW * imgAspect;
      var imgPad = 10;
      var imgY = 0;

      // Compute base height
      var cur = { segmentIndex: 0, graphemeIndex: 0 };
      var baseH = 0;
      while (true) {
        var ln = layoutNextLine(prepared, cur, W);
        if (!ln) break;
        cur = ln.end;
        baseH += lh;
      }
      baseH = Math.max(baseH, lh * 2);

      // --- Build DOM structure ---
      // Wrapper div (position:relative) holds both canvas and image
      var wrapper = document.createElement('div');
      wrapper.style.cssText = 'position:relative;width:' + W + 'px;margin:1em 0;';

      // Canvas for text only (transparent)
      var canvas = document.createElement('canvas');
      canvas.width = W * dpr;
      canvas.height = (baseH + lh) * dpr;
      canvas.style.cssText = 'display:block;width:' + W + 'px;height:' + (baseH + lh) + 'px;';
      var ctx = canvas.getContext('2d');
      wrapper.appendChild(canvas);

      // DOM <img> — exact same style as existing Phase 2 in kiwiki.js
      var domImg = document.createElement('img');
      domImg.src = creature.src;
      domImg.alt = '';
      domImg.style.cssText = 'position:absolute;top:0;'
        + (side === 'left' ? 'left:0;' : 'right:0;')
        + 'width:0;height:auto;'
        + 'filter:grayscale(1) contrast(3) brightness(0.8);'
        + 'mix-blend-mode:multiply;'
        + 'pointer-events:none;'
        + 'transition:none;';
      domImg.onerror = function() { this.style.display = 'none'; };
      wrapper.appendChild(domImg);

      // Replace paragraph
      p.style.display = 'none';
      p.parentNode.insertBefore(wrapper, p.nextSibling);

      var imgCurW = 0;
      var frame = 0;
      var growing = true;

      function render() {
        frame++;

        // Grow image
        if (growing) {
          imgCurW = Math.min(imgCurW + 0.6, imgMaxW);
          if (imgCurW >= imgMaxW) growing = false;
        }

        var imgCurH = imgCurW * imgAspect;
        var imgBottom = imgY + imgCurH;

        // Update DOM image size
        domImg.style.width = imgCurW + 'px';

        // --- Pretext: reflow text around image ---
        cur = { segmentIndex: 0, graphemeIndex: 0 };
        var lines = [];
        var y = 0;

        while (true) {
          var maxW = W;
          var xOff = 0;

          if (imgCurW > 3 && y + lh > imgY && y < imgBottom) {
            if (side === 'left') {
              xOff = imgCurW + imgPad;
              maxW = W - xOff;
            } else {
              maxW = W - imgCurW - imgPad;
            }
          }
          maxW = Math.max(maxW, 50);

          var line = layoutNextLine(prepared, cur, maxW);
          if (!line) break;
          lines.push({ text: line.text, x: xOff, y: y });
          cur = line.end;
          y += lh;
        }

        // Resize canvas
        var totalH = Math.max(y + 4, baseH);
        if (Math.abs(canvas.height / dpr - totalH) > 4) {
          canvas.height = totalH * dpr;
          canvas.style.height = totalH + 'px';
        }

        // Draw text only — no image on canvas
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, totalH);
        ctx.fillStyle = '#111';
        ctx.font = font;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        for (var li = 0; li < lines.length; li++) {
          var l = lines[li];
          ctx.fillText(l.text, l.x, l.y + fontSize + (lh - fontSize) / 2);
        }

        if (growing) {
          requestAnimationFrame(render);
        }
      }

      requestAnimationFrame(render);
    }

    setTimeout(infectWithReflow, 6000);
    setInterval(infectWithReflow, 15000);
  }
})();
