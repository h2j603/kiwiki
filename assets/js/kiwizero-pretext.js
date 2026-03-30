// === KiwiZero × Pretext: Text Reflow Around Kiwi Creatures ===
// Enhances existing KiwiZero Phase 2 (multiply image injection)
// by making paragraph text organically flow around the creature images
// using Pretext's DOM-free text layout at 60fps.

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

      // Wait until at least one creature image is loaded
      var ready = creatures.filter(function(i) { return i.complete && i.naturalWidth > 0; });
      if (!ready.length) return;

      var ps = document.querySelectorAll('.main-content p');
      if (ps.length < 3) return;

      // Find an uninfected paragraph with enough text
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

      // Pretext: prepare text for layout (~0.04ms)
      var prepared = prepareWithSegments(text, font);

      // Pick a creature and placement side
      var creature = ready[Math.floor(Math.random() * ready.length)];
      var side = Math.random() > 0.5 ? 'right' : 'left';
      var imgMaxW = 55 + Math.floor(Math.random() * 55); // 55–110px
      var imgAspect = creature.naturalHeight / creature.naturalWidth;
      var imgMaxH = imgMaxW * imgAspect;
      var imgPad = 10; // gap between image and text
      var imgY = 0; // start from top of paragraph

      // Compute base unobstructed height
      var cur = { segmentIndex: 0, graphemeIndex: 0 };
      var baseH = 0;
      while (true) {
        var ln = layoutNextLine(prepared, cur, W);
        if (!ln) break;
        cur = ln.end;
        baseH += lh;
      }
      baseH = Math.max(baseH, lh * 2);

      // Create canvas to replace paragraph
      var canvas = document.createElement('canvas');
      canvas.width = W * dpr;
      canvas.height = (baseH + lh) * dpr;
      canvas.style.cssText = 'display:block;width:' + W + 'px;height:' + (baseH + lh) + 'px;margin:1em 0;';
      var ctx = canvas.getContext('2d');

      p.style.display = 'none';
      p.parentNode.insertBefore(canvas, p.nextSibling);

      var imgCurW = 0; // current image width, grows over time
      var frame = 0;
      var growing = true;

      function render() {
        frame++;

        // Grow image size smoothly
        if (growing) {
          imgCurW = Math.min(imgCurW + 0.6, imgMaxW);
          if (imgCurW >= imgMaxW) growing = false;
        }

        var imgCurH = imgCurW * imgAspect;
        var imgX = side === 'left' ? 0 : W - imgCurW;
        var imgBottom = imgY + imgCurH;

        // --- Pretext layout: variable-width lines flowing around image ---
        // layoutNextLine runs in ~0.09ms — safe for every frame
        cur = { segmentIndex: 0, graphemeIndex: 0 };
        var lines = [];
        var y = 0;

        while (true) {
          var maxW = W;
          var xOff = 0;

          // Narrow the line if it overlaps with the creature image
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

        // Resize canvas if text reflow changed total height
        var totalH = Math.max(y + 4, baseH);
        if (Math.abs(canvas.height / dpr - totalH) > 4) {
          canvas.height = totalH * dpr;
          canvas.style.height = totalH + 'px';
        }

        // --- Draw frame ---
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, totalH);

        // Draw creature image — grayscale + high contrast
        // (same filter style as existing Phase 2: grayscale(1) contrast(3) brightness(0.8))
        // Canvas stays transparent so page background shows through
        if (imgCurW > 3 && creature.complete) {
          ctx.save();
          ctx.filter = 'grayscale(1) contrast(3) brightness(0.8)';
          ctx.globalAlpha = 0.85;
          ctx.drawImage(creature, imgX, imgY, imgCurW, imgCurH);
          ctx.restore();
        }

        // Draw text lines
        ctx.fillStyle = '#111';
        ctx.font = font;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        for (var li = 0; li < lines.length; li++) {
          var l = lines[li];
          ctx.fillText(l.text, l.x, l.y + fontSize + (lh - fontSize) / 2);
        }

        // Continue animating while image is growing, then idle
        if (growing) {
          requestAnimationFrame(render);
        }
      }

      requestAnimationFrame(render);
    }

    // Stagger: first infection after 6s, then every 15s
    setTimeout(infectWithReflow, 6000);
    setInterval(infectWithReflow, 15000);
  }
})();
