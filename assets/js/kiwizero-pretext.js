// === KiwiZero × Pretext: Organic Text Displacement ===
// Pretext (chenglou/pretext) — DOM-free text layout at 120fps
// Text flows around growing kiwi infection zones like water parting

import { prepareWithSegments, layoutNextLine } from 'https://cdn.jsdelivr.net/npm/@chenglou/pretext/+esm';

(function init() {
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
    var baseFontSize = 17;
    var baseLineHeight = 28;
    var font = baseFontSize + 'px ' + fontFamily;
    var dpr = window.devicePixelRatio || 1;
    var kiwiWord = lang === 'ko' ? '\ud0a4\uc704' : lang === 'ja' ? '\u30ad\u30a6\u30a4' : 'kiwi';

    var infectedCount = 0;
    var MAX_INFECTIONS = 4;

    // --- Effect 1: Infection Reflow ---
    // Canvas replaces paragraph; text reflows around a growing infection circle
    function infectParagraph() {
      if (infectedCount >= MAX_INFECTIONS) return;

      var ps = document.querySelectorAll('.main-content p');
      if (ps.length < 3) return;

      var p = null;
      for (var attempts = 0; attempts < 15; attempts++) {
        var c = ps[Math.floor(Math.random() * ps.length)];
        if (!c.getAttribute('data-pretext') && c.textContent.trim().length > 50) {
          p = c;
          break;
        }
      }
      if (!p) return;

      p.setAttribute('data-pretext', '1');
      infectedCount++;

      var text = p.textContent.trim();
      var containerWidth = p.offsetWidth;
      if (containerWidth < 120) return;

      // Pretext: prepare text once (~19ms for 500 paragraphs)
      var prepared = prepareWithSegments(text, font);

      // Measure full unobstructed height
      var cursor = { segmentIndex: 0, graphemeIndex: 0 };
      var fullHeight = 0;
      while (true) {
        var ln = layoutNextLine(prepared, cursor, containerWidth);
        if (!ln) break;
        cursor = ln.end;
        fullHeight += baseLineHeight;
      }
      fullHeight = Math.max(fullHeight, baseLineHeight * 2);

      // Create canvas to replace paragraph
      var canvas = document.createElement('canvas');
      canvas.width = containerWidth * dpr;
      canvas.height = (fullHeight + baseLineHeight) * dpr;
      canvas.style.cssText = 'display:block;width:' + containerWidth + 'px;height:' + (fullHeight + baseLineHeight) + 'px;margin:1em 0;';
      var ctx = canvas.getContext('2d');

      p.style.display = 'none';
      p.parentNode.insertBefore(canvas, p.nextSibling);

      // Infection zone state
      var zone = {
        cx: containerWidth * (0.2 + Math.random() * 0.6),
        cy: fullHeight * (0.25 + Math.random() * 0.5),
        r: 0,
        maxR: 45 + Math.random() * 50,
        phase: 0 // 0=grow, 1=pulse, 2=consume
      };

      var frame = 0;
      var startTime = performance.now();

      function render() {
        frame++;
        var elapsed = performance.now() - startTime;

        // Phase transitions
        if (zone.phase === 0) {
          zone.r = Math.min(zone.r + 0.35, zone.maxR);
          if (zone.r >= zone.maxR) { zone.phase = 1; frame = 0; }
        } else if (zone.phase === 1) {
          zone.r = zone.maxR + Math.sin(frame * 0.04) * 6;
          if (elapsed > 20000) zone.phase = 2;
        } else {
          zone.r = Math.min(zone.r + 0.6, containerWidth);
        }

        // --- Layout with Pretext: variable-width lines around zone ---
        cursor = { segmentIndex: 0, graphemeIndex: 0 };
        var lines = [];
        var y = 0;

        while (true) {
          var maxW = containerWidth;
          var xOff = 0;

          // Intersection test: does this line's vertical band hit the zone?
          var lineMid = y + baseLineHeight / 2;
          var dy = lineMid - zone.cy;
          if (Math.abs(dy) < zone.r) {
            var dx = Math.sqrt(zone.r * zone.r - dy * dy);
            var zoneL = zone.cx - dx;
            var zoneR = zone.cx + dx;

            // Push text to whichever side has more room
            if (zone.cx < containerWidth * 0.5) {
              xOff = Math.min(zoneR + 10, containerWidth - 60);
              maxW = containerWidth - xOff;
            } else {
              maxW = Math.max(zoneL - 10, 60);
            }
          }
          maxW = Math.max(maxW, 50);

          var line = layoutNextLine(prepared, cursor, maxW);
          if (!line) break;
          lines.push({ text: line.text, x: xOff, y: y, w: line.width });
          cursor = line.end;
          y += baseLineHeight;
        }

        // Resize canvas height if text reflow changed it
        var totalH = Math.max(y + baseLineHeight, fullHeight);
        if (Math.abs(canvas.height / dpr - totalH) > 4) {
          canvas.height = totalH * dpr;
          canvas.style.height = totalH + 'px';
        }

        // --- Draw ---
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, containerWidth, totalH);

        // Infection zone: concentric rings
        if (zone.r > 2) {
          ctx.save();
          // Outer glow
          var grad = ctx.createRadialGradient(zone.cx, zone.cy, zone.r * 0.3, zone.cx, zone.cy, zone.r);
          grad.addColorStop(0, 'rgba(17,17,17,0.22)');
          grad.addColorStop(0.7, 'rgba(17,17,17,0.10)');
          grad.addColorStop(1, 'rgba(17,17,17,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(zone.cx, zone.cy, zone.r, 0, Math.PI * 2);
          ctx.fill();

          // Inner dark core
          ctx.globalAlpha = 0.18 + Math.sin(frame * 0.06) * 0.06;
          ctx.fillStyle = '#111';
          ctx.beginPath();
          ctx.arc(zone.cx, zone.cy, zone.r * 0.5, 0, Math.PI * 2);
          ctx.fill();

          // Kiwi word — central
          ctx.globalAlpha = 0.7 + Math.sin(frame * 0.05) * 0.15;
          ctx.fillStyle = '#111';
          ctx.font = 'italic bold ' + (baseFontSize * 1.3) + 'px ' + fontFamily;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(kiwiWord, zone.cx, zone.cy);

          // Orbiting kiwi fragments
          if (zone.r > 25) {
            ctx.font = 'italic ' + (baseFontSize * 0.65) + 'px ' + fontFamily;
            ctx.globalAlpha = 0.25;
            for (var i = 0; i < 4; i++) {
              var angle = frame * 0.015 + (i * Math.PI * 2 / 4);
              var orbitR = zone.r * 0.65;
              ctx.fillText(kiwiWord,
                zone.cx + Math.cos(angle) * orbitR,
                zone.cy + Math.sin(angle) * orbitR
              );
            }
          }
          ctx.restore();
        }

        // Text lines
        ctx.fillStyle = '#111';
        ctx.font = font;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        for (var li = 0; li < lines.length; li++) {
          var l = lines[li];
          ctx.fillText(l.text, l.x, l.y + baseFontSize + (baseLineHeight - baseFontSize) / 2);
        }

        // Keep animating unless consumed beyond viewport
        if (zone.r < containerWidth * 1.5) {
          requestAnimationFrame(render);
        }
      }

      requestAnimationFrame(render);
    }

    // --- Effect 2: Text Breath Wave ---
    // Uses Pretext to rapidly re-measure paragraphs at varying widths,
    // creating a visual "breathing" where lines subtly shift
    function breathWave() {
      var ps = document.querySelectorAll('.main-content p');
      if (ps.length < 2) return;

      var p = ps[Math.floor(Math.random() * ps.length)];
      if (p.getAttribute('data-pretext') || p.getAttribute('data-breath')) return;
      if (p.textContent.trim().length < 30) return;
      p.setAttribute('data-breath', '1');

      var text = p.textContent.trim();
      var origWidth = p.offsetWidth;
      var prepared = prepareWithSegments(text, font);

      var breathFrame = 0;
      var breathDuration = 180; // ~3 seconds at 60fps

      function animateBreath() {
        breathFrame++;
        var progress = breathFrame / breathDuration;
        var wave = Math.sin(progress * Math.PI * 2) * 30; // +/-30px width oscillation

        // Re-layout at modified width — Pretext does this in ~0.09ms
        var cursor = { segmentIndex: 0, graphemeIndex: 0 };
        var lineTexts = [];
        while (true) {
          var line = layoutNextLine(prepared, cursor, origWidth + wave);
          if (!line) break;
          lineTexts.push(line.text);
          cursor = line.end;
        }

        // Update paragraph with re-wrapped text (line breaks become visible shifts)
        p.textContent = lineTexts.join(' ');
        p.style.maxWidth = (origWidth + wave) + 'px';

        if (breathFrame < breathDuration) {
          requestAnimationFrame(animateBreath);
        } else {
          // Restore
          p.textContent = text;
          p.style.maxWidth = '';
          p.removeAttribute('data-breath');
        }
      }

      requestAnimationFrame(animateBreath);
    }

    // --- Schedule effects ---
    // Infection reflow: starts after 8s, every 18s
    setTimeout(infectParagraph, 8000);
    setInterval(infectParagraph, 18000);

    // Breath wave: starts after 12s, every 10s
    setTimeout(breathWave, 12000);
    setInterval(breathWave, 10000);
  }
})();
