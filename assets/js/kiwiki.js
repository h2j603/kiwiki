// === Kiwiki: Language + TOC + Infection ===

// --- LANGUAGE (runs immediately) ---
(function(){
  var p = window.location.search.match(/[?&]lang=(en|ko|ja)/);
  var lang = p ? p[1] : null;
  if (lang) { try { localStorage.setItem('kiwiki-lang', lang); } catch(e){} }
  else { try { lang = localStorage.getItem('kiwiki-lang'); } catch(e){} }
  if (!lang) lang = 'en';
  document.documentElement.className += ' lang-' + lang;
  // Set html lang attribute for proper glyph rendering (Han Unification)
  var langMap = {en:'en',ko:'ko',ja:'ja'};
  document.documentElement.setAttribute('lang', langMap[lang] || 'en');
  window._kLang = lang;
  // Flag: did the user explicitly choose a language (URL param or stored)?
  var hadStored = false;
  try { hadStored = !!localStorage.getItem('kiwiki-lang'); } catch(e){}
  window._kExplicit = !!(p || hadStored);
})();

// --- INDEX PAGE: rolling marquee + continuous multilingual shuffle ---
document.addEventListener('DOMContentLoaded', function(){
  try {
    // ---- Continuous rolling marquee for the virus table ----
    // Wraps each vlist's first table-wrapper in a .virus-roll container
    // with a .roll-track div that holds two copies of the tbody.
    // CSS @keyframes rollUp translates the track -50% so it loops.
    var vlists = document.querySelectorAll('.vlist');
    for (var vi = 0; vi < vlists.length; vi++) {
      var wrapper = vlists[vi].querySelector('.table-wrapper');
      if (!wrapper) continue;
      var table = wrapper.querySelector('table');
      if (!table) continue;
      var tbody = table.querySelector('tbody');
      if (!tbody) continue;

      // Clone the tbody rows for seamless loop
      var clone = tbody.cloneNode(true);

      // Build roll container
      var roll = document.createElement('div');
      roll.className = 'virus-roll';
      var track = document.createElement('div');
      track.className = 'roll-track';

      // Create two copies of the table inside the track
      var t1 = table.cloneNode(false); // empty table shell
      t1.appendChild(tbody);
      var t2 = table.cloneNode(false);
      t2.appendChild(clone);
      track.appendChild(t1);
      track.appendChild(t2);

      // Calculate duration based on row count (slower = more rows)
      var rowCount = tbody.querySelectorAll('tr').length;
      track.style.setProperty('--roll-duration', (rowCount * 1.2) + 's');

      roll.appendChild(track);
      wrapper.innerHTML = '';
      wrapper.appendChild(roll);
    }

    // ---- Continuous multilingual name shuffle (before explicit lang) ----
    if (!window._kExplicit) {
      var divs = {
        en: document.querySelector('.en.vlist'),
        ko: document.querySelector('.ko.vlist'),
        ja: document.querySelector('.ja.vlist')
      };
      if (divs.en && divs.ko && divs.ja) {
        var tbodies = {
          en: divs.en.querySelector('table:first-of-type tbody'),
          ko: divs.ko.querySelector('table:first-of-type tbody'),
          ja: divs.ja.querySelector('table:first-of-type tbody')
        };
        if (tbodies.en && tbodies.ko && tbodies.ja) {
          var langs = ['en','ko','ja'];
          var enRows = tbodies.en.querySelectorAll('tr');
          var koRows = tbodies.ko.querySelectorAll('tr');
          var jaRows = tbodies.ja.querySelectorAll('tr');

          // Save original English names so we can restore them when
          // the random picker lands back on 'en'.
          var origNames = [];
          for (var r = 0; r < enRows.length; r++) {
            var c = enRows[r].querySelectorAll('td')[1];
            var a = c ? c.querySelector('a') : null;
            origNames.push(a ? a.textContent : '');
          }

          // Helper: swap one row's name to a random language
          function shuffleRow(idx) {
            if (idx >= enRows.length) return;
            var pick = langs[Math.floor(Math.random() * 3)];
            var tgt = enRows[idx].querySelectorAll('td')[1];
            if (!tgt) return;
            var tgtLink = tgt.querySelector('a');
            if (!tgtLink) return;
            if (pick === 'en') {
              tgtLink.textContent = origNames[idx];
            } else {
              var srcRows = pick === 'ko' ? koRows : jaRows;
              if (idx >= srcRows.length) return;
              var src = srcRows[idx].querySelectorAll('td')[1];
              var srcLink = src ? src.querySelector('a') : null;
              if (srcLink) tgtLink.textContent = srcLink.textContent;
            }
          }

          // Initial scramble: randomize every row at once
          for (var r = 0; r < enRows.length; r++) shuffleRow(r);

          // Continuous: switch one random name every 200ms
          setInterval(function(){
            shuffleRow(Math.floor(Math.random() * enRows.length));
          }, 200);
        }
      }
    }
  } catch(e){}
});

// --- INFECTION: 1~3 simultaneous strains ---
(function(){
  try {
    var vs = ['kiwiecho','kiwimirror','kiwirot','kiwiscroll','kiwimoss','kiwhisper','kiwispot','kiwitab','kiwibloom','kiwisyntax','kiwivein','kiwiforgot','kiwighost','kiwiparadox','kiwibleed','kiwiclip','kiwidrift','kiwitouch','kiwivoice','kiwiafter','kiwidream','kiwieater','kiwitime','kiwicut','kiwirust','kiwiroot','kiwiroom','kiwispace','kiwiloop','kiwishade','kiwihowl','kiwivoid','kiwizero'];
    var stored = sessionStorage.getItem('kiwiki-viruses');
    var infected;
    if (stored) {
      infected = stored.split(',');
    } else {
      // TEST: kiwizero 100%
      infected = ['kiwizero'];
      sessionStorage.setItem('kiwiki-viruses', infected.join(','));
    }
    for (var j = 0; j < infected.length; j++) {
      document.documentElement.className += ' virus-' + infected[j];
    }
    window._kViruses = infected;
    window._kVirus = infected[0]; // primary (for legacy compat)
  } catch(e){}
})();

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', function(){

  // === Active lang button ===
  try {
    var lang = window._kLang || 'en';
    var el = document.getElementById('kiwiki-lang-toggle');
    if (el) {
      var as = el.getElementsByTagName('a');
      for (var i = 0; i < as.length; i++) {
        as[i].className = (as[i].href.indexOf('lang=' + lang) > -1) ? 'lang-btn active' : 'lang-btn';
      }
    }
  } catch(e){}

  // === TOC (숫자 중복 수정: ol의 CSS list-style 제거, JS 번호만) ===
  try {
    var toc = document.getElementById('kiwiki-toc');
    if (toc) {
      toc.innerHTML = '';
      var hs = document.getElementsByTagName('h2');
      var ol = document.createElement('ol');
      ol.style.cssText = 'list-style:none;padding:0;margin:0;';
      var n = 0;
      for (var i = 0; i < hs.length; i++) {
        try { if (window.getComputedStyle(hs[i]).display === 'none') continue; } catch(e){ continue; }
        n++;
        if (!hs[i].id) hs[i].id = 'sec-' + n;
        // heading에 번호 prefix — 기존 sec-num 제거 후 재삽입
        var oldSn = hs[i].querySelector('.sec-num');
        if (oldSn) oldSn.parentNode.removeChild(oldSn);
        var sn = document.createElement('span');
        sn.className = 'sec-num';
        sn.textContent = n + '. ';
        hs[i].insertBefore(sn, hs[i].firstChild);
        // TOC 링크 텍스트 (sec-num, anchor-heading 제외)
        var txt = '';
        for (var c = 0; c < hs[i].childNodes.length; c++) {
          var cn = hs[i].childNodes[c];
          if (cn.nodeType === 1 && (cn.className === 'sec-num' || cn.className === 'anchor-heading')) continue;
          txt += cn.textContent || '';
        }
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + hs[i].id;
        a.textContent = n + '. ' + txt.replace(/#/g,'').trim();
        li.appendChild(a);
        ol.appendChild(li);
      }
      if (n > 0) toc.appendChild(ol);
    }
  } catch(e){}

  // === Infection notice: DISABLED (to be redesigned) ===
  /*
      // Phase 1: Full-screen glitch overlay (0.8s)
      var overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:#111;z-index:99999;opacity:0;transition:opacity 0.15s;pointer-events:none;';
      document.body.appendChild(overlay);

      // Rapid flicker sequence
      var flickerCount = 0;
      var flickerInterval = setInterval(function(){
        flickerCount++;
        overlay.style.opacity = flickerCount % 2 === 0 ? '0' : '0.95';
        if (flickerCount > 6) {
          clearInterval(flickerInterval);
          overlay.style.opacity = '1';

          // Phase 2: Show virus names on black screen (per strain)
          overlay.innerHTML = '';
          for (var si = 0; si < infected.length; si++) {
            var vid = infected[si];
            var line = document.createElement('div');
            line.style.cssText = 'color:lawngreen;font-family:"EB Garamond",monospace;font-style:italic;text-align:center;margin:4px 0;opacity:0;transition:opacity 0.3s;';
            line.style.transitionDelay = (si * 0.3) + 's';
            if (infected.length > 1) {
              line.innerHTML = '<span style="font-size:8px;letter-spacing:4px;display:block;color:rgba(124,252,0,0.4);">STRAIN ' + (si+1) + '/' + infected.length + '</span><span style="font-size:20px;">' + (names[vid]||vid) + '</span><span style="font-size:9px;display:block;color:rgba(124,252,0,0.3);letter-spacing:2px;">' + (codes[vid]||'') + '</span>';
            } else {
              line.innerHTML = '<span style="font-size:20px;">' + (names[vid]||vid) + '</span><span style="font-size:9px;display:block;color:rgba(124,252,0,0.3);letter-spacing:2px;margin-top:4px;">' + (codes[vid]||'') + '</span>';
            }
            overlay.appendChild(line);
          }
          // Center content
          overlay.style.display = 'flex';
          overlay.style.flexDirection = 'column';
          overlay.style.alignItems = 'center';
          overlay.style.justifyContent = 'center';
          overlay.style.gap = '16px';

          // Fade in strain names
          setTimeout(function(){
            var lines = overlay.children;
            for (var li = 0; li < lines.length; li++) lines[li].style.opacity = '1';
          }, 100);

          // Phase 3: Glitch out (after 2s)
          setTimeout(function(){
            // Rapid flicker removal
            var exitFlicker = 0;
            var exitInterval = setInterval(function(){
              exitFlicker++;
              overlay.style.opacity = exitFlicker % 2 === 0 ? '1' : '0';
              if (exitFlicker > 4) {
                clearInterval(exitInterval);
                overlay.style.transition = 'opacity 0.5s';
                overlay.style.opacity = '0';
                setTimeout(function(){ overlay.remove(); }, 600);
              }
            }, 80);
          }, 2000);
        }
      }, 80);
    }
  } catch(e){}
  */

  // === VIRUS INTERACTIONS (uncanny) — run for ALL infected strains ===
  var allInfected = window._kViruses || [window._kVirus];
  if (!allInfected || allInfected.length === 0) return;
  for (var vi = 0; vi < allInfected.length; vi++) {
  var v = allInfected[vi];
  if (!v) continue;

  // Zalgo text generator
  function zalgo(t,intensity){
    var z=['̷','̸','̵','̶','̴','̨','̛','̀','́','̂','̃','̄','̅','̆','̇','̈','̉','̊','̋','̌','̍','̎','̏','̐','̑'];
    var r='';for(var i=0;i<t.length;i++){r+=t[i];for(var j=0;j<(intensity||1);j++)r+=z[Math.floor(Math.random()*z.length)];}return r;
  }

  // KiwiEcho: text echoes itself wrongly — same sentence appears but subtly different
  if (v === 'kiwiecho') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(ps.length<3)return;
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p.getAttribute('data-echoed'))return;
      p.setAttribute('data-echoed','1');
      var echo=document.createElement('p');
      var words=p.textContent.split(' ');
      // Swap 2 random words
      if(words.length>4){var a=Math.floor(Math.random()*words.length),b=Math.floor(Math.random()*words.length);var tmp=words[a];words[a]=words[b];words[b]=tmp;}
      echo.textContent=words.join(' ');
      echo.style.cssText='opacity:0.12;color:#111;margin:2px 0;';
      p.parentNode.insertBefore(echo,p.nextSibling);
    },8000);
  } catch(e){} }

  // KiwiScroll: time stops working
  if (v === 'kiwiscroll') { try {
    var sc=0;
    window.addEventListener('scroll',function(){if(++sc%40===0)window.scrollBy(0,Math.random()*200-100);});
    var clock=document.createElement('div');
    clock.style.cssText='position:fixed;bottom:40px;right:10px;color:#111;font-family:"EB Garamond",monospace;font-style:italic;font-size:10px;opacity:0.3;pointer-events:none;z-index:9999;';
    document.body.appendChild(clock);
    var fakeH=12,fakeM=0;
    setInterval(function(){fakeM+=Math.floor(Math.random()*47);if(fakeM>=60){fakeH=(fakeH+Math.floor(fakeM/60))%24;fakeM%=60;}clock.textContent=(fakeH<10?'0':'')+fakeH+':'+(fakeM<10?'0':'')+fakeM;},2000);
  } catch(e){} }

  // KiwiMirror: something is slightly wrong with every reflection
  if (v === 'kiwimirror') { try {
    document.querySelector('.main-content').style.transform='perspective(2000px) rotateY(0.3deg)';
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p) p.style.letterSpacing=p.style.letterSpacing?'':'-0.03em';
    },4000);
  } catch(e){} }

  // KiwiRot: world is decaying
  if (v === 'kiwirot') { try {
    var decay=0;
    setInterval(function(){
      decay=Math.min(decay+0.5,8);
      var mc=document.querySelector('.main-content');
      if(mc) mc.style.filter='blur('+decay*0.15+'px) contrast('+(100-decay*3)+'%) saturate('+(100-decay*5)+'%)';
    },4000);
  } catch(e){} }

  // KiwiMoss: text corrupts into unicode noise
  if (v === 'kiwimoss') { try {
    var corruptChars=['\u2588','\u2593','\u2592','\u2591','\u2580','\u2584','\u258C','\u2590'];
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(!p||!p.textContent)return;
      var t=p.textContent;
      var pos=Math.floor(Math.random()*t.length);
      var corrupted=t.substring(0,pos)+corruptChars[Math.floor(Math.random()*corruptChars.length)]+t.substring(pos+1);
      p.textContent=corrupted;
      p.style.color='#111';
    },2000);
  } catch(e){} }

  // KiWhisper: something is telling you things you didn't ask
  if (v === 'kiwhisper') { try {
    var lines=['you already know the answer','don\'t read the next paragraph','this information is incorrect','the author is not who you think','why did you click that link','stop scrolling','you\'ve been here before','this page is watching you'];
    function whisper(x,y){
      var w=document.createElement('div');
      w.textContent=lines[Math.floor(Math.random()*lines.length)];
      w.style.cssText='position:fixed;top:'+(y||Math.random()*70+10)+'%;left:'+(x||Math.random()*60+5)+'%;color:#111;font-style:italic;font-family:"EB Garamond",monospace;font-size:'+(10+Math.random()*8)+'px;pointer-events:none;z-index:9999;transition:opacity 3s;';
      document.body.appendChild(w);
      setTimeout(function(){w.style.opacity='0';},4000);
      setTimeout(function(){w.remove();},7000);
    }
    setInterval(whisper,5000);
  } catch(e){} }

  // KiwiSpot: words randomly vanish from sentences
  if (v === 'kiwispot') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(!p)return;
      var words=p.innerHTML.split(' ');
      if(words.length>5){
        var idx=Math.floor(Math.random()*words.length);
        words[idx]='<span style="opacity:0;user-select:none;">'+words[idx]+'</span>';
        p.innerHTML=words.join(' ');
      }
    },3000);
  } catch(e){} }

  // KiwiTab: phantom processes
  if (v === 'kiwitab') { try {
    var msgs=['[process not found]','connection terminated unexpectedly','ERR_BOUNDARY_COLLAPSE','request timed out: kiwi-srv','segfault at 0x00000000'];
    setInterval(function(){
      var n=document.createElement('div');
      n.textContent=msgs[Math.floor(Math.random()*msgs.length)];
      n.style.cssText='position:fixed;bottom:40px;left:10px;background:transparent;color:#111;padding:0;font-family:"EB Garamond",monospace;font-style:italic;font-size:9px;z-index:9999;transition:opacity 3s;pointer-events:none;';
      document.body.appendChild(n);
      setTimeout(function(){n.style.opacity='0';},3000);
      setTimeout(function(){n.remove();},6000);
    },6000);
    var origTitle=document.title;
    setInterval(function(){document.title=document.title===origTitle?'\u25a0 '+origTitle:origTitle;},5000);
  } catch(e){} }

  // KiwiBloom: aggressive organic growth — page is being overtaken
  if (v === 'kiwibloom') { try {
    // Phase 1: dark spots appear and grow (every 1s, multiple)
    setInterval(function(){
      for (var bi = 0; bi < 3; bi++) {
        var bloom = document.createElement('div');
        bloom.style.cssText = 'position:fixed;border-radius:50%;background:radial-gradient(circle,#111,#111,transparent 70%);pointer-events:none;z-index:9997;width:10px;height:10px;left:' + Math.random()*100 + '%;top:' + Math.random()*100 + '%;transition:all 8s;';
        document.body.appendChild(bloom);
        setTimeout(function(b){ return function(){
          var size = 60 + Math.random() * 150;
          b.style.width = size + 'px'; b.style.height = size + 'px';
          b.style.marginLeft = (-size/2) + 'px'; b.style.marginTop = (-size/2) + 'px';
        };}(bloom), 100);
      }
    }, 1200);
    // Phase 2: text develops organic texture
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      var p = ps[Math.floor(Math.random() * ps.length)];
      if (p) {
        p.style.background = 'linear-gradient(90deg, transparent, #111 ' + Math.random()*50 + '%, transparent)';
      }
    }, 2000);
    // Phase 3: hr lines thicken and turn green
    setInterval(function(){
      var hrs = document.querySelectorAll('.main-content hr');
      for (var hi = 0; hi < hrs.length; hi++) {
        hrs[hi].style.transition = 'all 3s';
        hrs[hi].style.height = (2 + Math.random() * 4) + 'px';
        hrs[hi].style.background = '#111';
      }
    }, 5000);
  } catch(e){} }

  // KiwiSyntax: your language is being recompiled
  if (v === 'kiwisyntax') { try {
    var idx=0;
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(idx<ps.length&&ps[idx].textContent.length>10){
        var t=ps[idx].textContent;
        ps[idx].innerHTML='<span style="font-family:EB Garamond,monospace;font-size:0.85em;color:#111;">if ('+t.substring(0,25)+') { return undefined; }</span>';
      }
      idx++;
    },4000);
  } catch(e){} }

  // KiwiVein: lines are appearing where they shouldn't
  if (v === 'kiwivein') { try {
    var veinCount=0;
    setInterval(function(){
      if(veinCount>40)return;veinCount++;
      var vn=document.createElement('div');
      var h=Math.random()>0.5;
      vn.style.cssText='position:fixed;background:#111;opacity:'+(0.02+Math.random()*0.04)+');z-index:9997;pointer-events:none;'+(h?'height:1px;width:'+Math.random()*40+'%;left:'+Math.random()*80+'%;top:'+Math.random()*100+'%':'width:1px;height:'+Math.random()*30+'%;left:'+Math.random()*100+'%;top:'+Math.random()*80+'%')+';';
      document.body.appendChild(vn);
    },2000);
  } catch(e){} }

  // KiwiForgot: content replaces itself with redaction notices
  if (v === 'kiwiforgot') { try {
    var notices=['[content removed]','[data expunged]','[memory corrupted]','[section unavailable]','[REDACTED]'];
    var fi=0;
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(fi<ps.length&&ps[fi].textContent.length>10){
        ps[fi].innerHTML='<span style="color:#111;font-family:EB Garamond,monospace;font-size:0.85em;font-style:italic;">'+notices[fi%notices.length]+'</span>';
        ps[fi].style.opacity='0.5';
      }
      fi++;
    },10000);
  } catch(e){} }

  // === 나머지 16종 (uncanny) ===

  // KiwiGhost: notifications from nowhere
  if (v === 'kiwighost') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){p.style.transition='opacity 0.1s';p.style.opacity='0';setTimeout(function(){p.style.opacity='1';},150);}
    },4000);
  } catch(e){} }

  // KiwiParadox: contradictions appear in text
  if (v === 'kiwiparadox') { try {
    var negations={'is':'is not','can':'cannot','will':'will not','true':'false','yes':'no','safe':'unsafe','known':'unknown'};
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(!p)return;
      var t=p.textContent;
      for(var word in negations){if(t.indexOf(word)>-1){p.textContent=t.replace(word,negations[word]);break;}}
    },6000);
  } catch(e){} }

  // KiwiBleed: text bleeds into adjacent elements
  // KiwiBleed: text hemorrhages — characters spill out, colors spread aggressively
  if (v === 'kiwibleed') { try {
    // Phase 1: spreading text-shadow (every 1.5s, increasingly violent)
    var bleedIntensity = 0;
    setInterval(function(){
      bleedIntensity = Math.min(bleedIntensity + 1, 20);
      var ps = document.querySelectorAll('.main-content p, .main-content li, .main-content h2');
      for (var i = 0; i < Math.min(bleedIntensity, ps.length); i++) {
        var p = ps[Math.floor(Math.random() * ps.length)];
        if (p) {
          var spread = bleedIntensity * 2;
          p.style.textShadow = spread + 'px 0 ' + (spread*2) + 'px #111, ' +
            (-spread) + 'px 0 ' + (spread*2) + 'px #111, ' +
            '0 ' + spread + 'px ' + spread + 'px #111';
          p.style.color = '#111';
        }
      }
    }, 1500);
    // Phase 2: characters start leaking out of their containers
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      var p = ps[Math.floor(Math.random() * ps.length)];
      if (!p || !p.textContent || p.textContent.length < 10) return;
      // Extract random characters and scatter them
      var chars = p.textContent;
      var leak = document.createElement('span');
      var leakText = '';
      for (var j = 0; j < 3; j++) leakText += chars[Math.floor(Math.random() * chars.length)];
      leak.textContent = leakText;
      leak.style.cssText = 'position:absolute;color:#111;font-size:' + (10 + Math.random() * 14) + 'px;transform:rotate(' + (Math.random() * 30 - 15) + 'deg);pointer-events:none;margin-left:' + (Math.random() * 40 - 20) + 'px;margin-top:' + (Math.random() * 20 - 10) + 'px;';
      p.style.position = 'relative';
      p.appendChild(leak);
    }, 2000);
    // Phase 3: page background starts showing stains
    var stainCount = 0;
    setInterval(function(){
      if (stainCount > 15) return;
      stainCount++;
      var stain = document.createElement('div');
      stain.style.cssText = 'position:fixed;width:' + (30 + Math.random() * 80) + 'px;height:' + (30 + Math.random() * 80) + 'px;border-radius:50%;background:radial-gradient(ellipse,#111,transparent 70%);pointer-events:none;z-index:9996;left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;';
      document.body.appendChild(stain);
    }, 3000);
  } catch(e){} }

  // KiwiClip: fragments of other sections appear
  if (v === 'kiwiclip') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(ps.length<3)return;
      var src=ps[Math.floor(Math.random()*ps.length)];
      var dst=ps[Math.floor(Math.random()*ps.length)];
      if(src!==dst&&src.textContent.length>10){
        var frag=document.createElement('span');
        frag.textContent=' ['+src.textContent.substring(0,20)+'...]';
        frag.style.cssText='opacity:0.15;font-family:EB Garamond,monospace;font-size:0.8em;';
        dst.appendChild(frag);
      }
    },8000);
  } catch(e){} }

  // KiwiDrift: colors slowly shift wrong
  if (v === 'kiwidrift') { try {
    var hue=0;
    setInterval(function(){
      hue=(hue+3)%360;
      var mc=document.querySelector('.main-content');
      if(mc) mc.style.filter='hue-rotate('+hue+'deg)';
    },3000);
  } catch(e){} }

  // KiwiTouch: something responds to your touch
  if (v === 'kiwitouch') { try {
    function ripple(x,y){
      var r=document.createElement('div');
      r.style.cssText='position:fixed;width:4px;height:4px;border-radius:50%;border:1px solid #111;pointer-events:none;z-index:9998;left:'+x+'px;top:'+y+'px;transition:all 2s;';
      document.body.appendChild(r);
      setTimeout(function(){r.style.width='80px';r.style.height='80px';r.style.left=(x-40)+'px';r.style.top=(y-40)+'px';r.style.opacity='0';},50);
      setTimeout(function(){r.remove();},2500);
    }
    document.addEventListener('touchstart',function(e){ripple(e.touches[0].clientX,e.touches[0].clientY);});
    document.addEventListener('click',function(e){ripple(e.clientX,e.clientY);});
  } catch(e){} }

  // KiwiVoice: text gets struck through as if silenced
  if (v === 'kiwivoice') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&!p.getAttribute('data-silenced')){
        p.setAttribute('data-silenced','1');
        p.style.textDecoration='line-through';
        p.style.opacity='0.5';
      }
    },5000);
  } catch(e){} }

  // KiwiAfter: residual afterimages
  if (v === 'kiwiafter') { try {
    var ac=0;
    window.addEventListener('scroll',function(){
      if(Date.now()-ac<800)return;ac=Date.now();
      var a=document.createElement('div');
      a.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:#111;pointer-events:none;z-index:9997;transition:opacity 3s;';
      document.body.appendChild(a);
      setTimeout(function(){a.style.opacity='0';},500);
      setTimeout(function(){a.remove();},3500);
    });
  } catch(e){} }

  // KiwiDream: boundary between here and elsewhere
  if (v === 'kiwidream') { try {
    setInterval(function(){
      var mc=document.querySelector('.main-content');
      if(mc){mc.style.transition='filter 2s';mc.style.filter='blur(1.5px) brightness(0.92)';setTimeout(function(){mc.style.filter='';},2500);}
    },8000);
  } catch(e){} }

  // KiwiEater: words get consumed
  if (v === 'kiwieater') { try {
    setInterval(function(){
      var targets=document.querySelectorAll('.main-content a,.main-content strong');
      var t=targets[Math.floor(Math.random()*targets.length)];
      if(t&&t.textContent.length>1&&t.textContent!=='\u2588\u2588\u2588'){
        t.setAttribute('data-was',t.textContent);
        t.textContent='\u2588\u2588\u2588';
        t.style.textDecoration='none';
        t.style.color='#111';
      }
    },4000);
  } catch(e){} }

  // KiwiTime: you were already here
  if (v === 'kiwitime') { try {
    setInterval(function(){
      var o=document.createElement('div');
      o.textContent='you have read this before';
      o.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:"EB Garamond",monospace;font-style:italic;font-size:11px;color:#111;pointer-events:none;z-index:9999;letter-spacing:3px;transition:opacity 4s;';
      document.body.appendChild(o);
      setTimeout(function(){o.style.opacity='0';},5000);
      setTimeout(function(){o.remove();},9000);
    },15000);
  } catch(e){} }

  // KiwiCut: sentences sever mid-thought
  if (v === 'kiwicut') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&p.textContent.length>20&&!p.getAttribute('data-cut')){
        p.setAttribute('data-cut','1');
        var cut=Math.floor(p.textContent.length*0.3+Math.random()*p.textContent.length*0.2);
        p.textContent=p.textContent.substring(0,cut);
        p.style.opacity='0.7';
      }
    },7000);
  } catch(e){} }

  // KiwiRust: oxidation
  // KiwiRust: aggressive oxidation — text decays, borders crumble, surface corrodes
  if (v === 'kiwirust') { try {
    var rustColors = ['#8B6914','#6B4F12','#5C3D0E','#A07818','#4A3510'];
    var rustChars = ['\u2591','\u2592','\u2593','\u00B7','\u2022'];
    // Phase 1: color corrosion spreads fast
    setInterval(function(){
      var els = document.querySelectorAll('.main-content p, .main-content h2, .main-content li, .main-content td, .main-content a, .main-content strong');
      for (var i = 0; i < 3; i++) {
        var el = els[Math.floor(Math.random() * els.length)];
        if (el) {
          el.style.color = rustColors[Math.floor(Math.random() * rustColors.length)];
          el.style.transition = 'color 2s';
        }
      }
    }, 1500);
    // Phase 2: text characters corrode into noise
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      var p = ps[Math.floor(Math.random() * ps.length)];
      if (!p || !p.textContent || p.textContent.length < 5) return;
      var t = p.textContent;
      var pos = Math.floor(Math.random() * t.length);
      p.textContent = t.substring(0, pos) + rustChars[Math.floor(Math.random() * rustChars.length)] + t.substring(pos + 1);
    }, 2000);
    // Phase 3: hr lines crumble
    setInterval(function(){
      var hrs = document.querySelectorAll('.main-content hr');
      var hr = hrs[Math.floor(Math.random() * hrs.length)];
      if (hr) {
        hr.style.background = rustColors[Math.floor(Math.random() * rustColors.length)];
        hr.style.height = (1 + Math.random() * 3) + 'px';
        hr.style.width = (50 + Math.random() * 50) + '%';
        hr.style.marginLeft = Math.random() * 25 + '%';
        hr.style.transition = 'all 2s';
      }
    }, 3000);
    // Phase 4: page border/edges oxidize
    var oxidation = 0;
    setInterval(function(){
      oxidation = Math.min(oxidation + 2, 30);
      var mc = document.querySelector('.main-content');
      if (mc) mc.style.borderRight = oxidation + 'px solid #111';
    }, 4000);
  } catch(e){} }

  // KiwiRoot: tendrils
  if (v === 'kiwiroot') { try {
    var rc=0;
    setInterval(function(){
      if(rc>25)return;rc++;
      var l=document.createElement('div');
      l.style.cssText='position:fixed;background:#111;z-index:9997;pointer-events:none;width:1px;height:'+Math.random()*20+'%;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;transform:rotate('+(Math.random()*60-30)+'deg);transition:height 8s;';
      document.body.appendChild(l);
      setTimeout(function(){l.style.height=Math.random()*40+'%';},100);
    },3000);
  } catch(e){} }

  // KiwiRoom: echoes of what you just read
  if (v === 'kiwiroom') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(!p||!p.textContent)return;
      var fragment=p.textContent.substring(0,Math.min(30,p.textContent.length));
      var echo=document.createElement('div');
      echo.textContent='...'+fragment+'...';
      echo.style.cssText='position:fixed;font-family:"EB Garamond",monospace;font-style:italic;color:#111;font-size:10px;pointer-events:none;z-index:9999;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:opacity 4s;';
      document.body.appendChild(echo);
      setTimeout(function(){echo.style.opacity='0';},3000);
      setTimeout(function(){echo.remove();},7000);
    },5000);
  } catch(e){} }

  // KiwiSpace: things cease to exist
  if (v === 'kiwispace') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p) p.style.opacity=Math.max((parseFloat(p.style.opacity)||1)-0.15,0);
    },3000);
  } catch(e){} }

  // KiwiLoop: causality breaks
  if (v === 'kiwiloop') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(ps.length>4){
        var a=Math.floor(Math.random()*ps.length),b=Math.floor(Math.random()*ps.length);
        if(a!==b){var tmp=ps[a].textContent;ps[a].textContent=ps[b].textContent;ps[b].textContent=tmp;}
      }
    },8000);
  } catch(e){} }

  // KiwiShade: an extra option that shouldn't be there
  if (v === 'kiwishade') { try {
    document.addEventListener('click',function(e){
      var g=document.createElement('div');
      g.textContent='\u25a0';
      g.style.cssText='position:fixed;font-size:12px;color:#111;pointer-events:none;z-index:9999;left:'+e.clientX+'px;top:'+e.clientY+'px;transition:all 2s;';
      document.body.appendChild(g);
      setTimeout(function(){g.style.opacity='0';g.style.transform='translateY(-20px)';},100);
      setTimeout(function(){g.remove();},2500);
    });
  } catch(e){} }

  // KiwiHowl: something is calling
  if (v === 'kiwihowl') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){p.style.animation='shake 0.2s';setTimeout(function(){p.style.animation='';},200);}
    },6000);
  } catch(e){} }

  // KiwiVoid: things are being unmade
  if (v === 'kiwivoid') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&!p.getAttribute('data-void')){
        p.setAttribute('data-void','1');
        p.style.transition='all 3s';
        p.style.opacity='0';
        p.style.transform='scale(0.95)';
        setTimeout(function(){p.style.height='0';p.style.margin='0';p.style.padding='0';p.style.overflow='hidden';},3000);
      }
    },6000);
  } catch(e){} }

  // KiwiZero: the primordial strain — everything becomes kiwi
  if (v === 'kiwizero') { try {
    // Phase 1: ㅋ/k/き words → 키위/kiwi/キウイ
    // Filter to visible elements only so the interaction reliably
    // hits the active language block (including table cells) instead
    // of wasting picks on hidden ko/ja blocks.
    var lang = window._kLang || 'en';
    setInterval(function(){
      var all = document.querySelectorAll('.main-content p, .main-content li, .main-content td, .main-content a, .main-content h2');
      var ps = [];
      for (var fi = 0; fi < all.length; fi++) { if (all[fi].offsetParent !== null) ps.push(all[fi]); }
      if (ps.length === 0) return;
      var p = ps[Math.floor(Math.random() * ps.length)];
      if (!p || !p.childNodes) return;
      for (var ci = 0; ci < p.childNodes.length; ci++) {
        var node = p.childNodes[ci];
        if (node.nodeType !== 3) continue; // text nodes only
        var t = node.textContent;
        if (lang === 'ko') {
          t = t.replace(/[ㅋ키코쿠크케카큐][가-힣]*/g, '키위');
        } else if (lang === 'ja') {
          t = t.replace(/[きキクケコカ][ぁ-ヿ]*/g, 'キウイ');
        } else {
          t = t.replace(/\b[kK]\w*/g, 'kiwi');
        }
        if (t !== node.textContent) node.textContent = t;
      }
    }, 1500);

    // Phase 2: aggressively inject kiwi creature images everywhere
    // Black treatment: grayscale + high contrast + slight dim.
    var imgFolder = '/kiwiki/assets/images/kiwi-creature/';
    var creatureFiles = ['IMG_6034.jpeg','IMG_6035.jpeg','IMG_6039.jpeg','IMG_6041.jpeg','IMG_6042.jpeg','IMG_6046.jpeg'];
    var creatureFilter = 'grayscale(1) contrast(3) brightness(0.8)';
    function randomTint() { return creatureFilter; }

    // Canvas pixelation: draw img at tiny res then scale up in steps
    function pixelateIn(canvas, img, targetW, targetH, onDone) {
      var ctx = canvas.getContext('2d');
      canvas.width = targetW;
      canvas.height = targetH;
      ctx.imageSmoothingEnabled = false;
      var steps = [2, 4, 8, 16, 32, targetW];
      var step = 0;
      var iv = setInterval(function(){
        var sw = Math.min(steps[step], targetW);
        var sh = Math.round(sw * (targetH / targetW));
        ctx.clearRect(0, 0, targetW, targetH);
        ctx.drawImage(img, 0, 0, sw, sh);
        ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, targetW, targetH);
        step++;
        if (step >= steps.length) { clearInterval(iv); if (onDone) onDone(); }
      }, 80);
    }
    function pixelateOut(canvas, targetW, targetH, onDone) {
      var ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      // Capture current content as source
      var snap = ctx.getImageData(0, 0, targetW, targetH);
      var steps = [32, 16, 8, 4, 2];
      var step = 0;
      var iv = setInterval(function(){
        var sw = steps[step];
        var sh = Math.round(sw * (targetH / targetW));
        ctx.clearRect(0, 0, targetW, targetH);
        ctx.putImageData(snap, 0, 0);
        // Shrink then expand to pixelate
        ctx.drawImage(canvas, 0, 0, targetW, targetH, 0, 0, sw, sh);
        ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, targetW, targetH);
        step++;
        if (step >= steps.length) {
          clearInterval(iv);
          ctx.clearRect(0, 0, targetW, targetH);
          if (onDone) onDone();
        }
      }, 80);
    }

    // Inject creature as a canvas with pixelate-in effect
    function injectCreature(parent, position) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imgFolder + creatureFiles[Math.floor(Math.random() * creatureFiles.length)];
      img.onerror = function(){};
      img.onload = function(){
        var size = 40 + Math.floor(Math.random() * 80);
        var w = size;
        var h = Math.round(size * (img.naturalHeight / img.naturalWidth));
        var canvas = document.createElement('canvas');
        canvas.className = 'kiwi-creature-canvas';
        canvas.style.cssText = (position || '') + 'width:'+w+'px;height:'+h+'px;filter:'+randomTint()+';mix-blend-mode:multiply;';
        if (!position) {
          // inline
          canvas.style.display = 'inline-block';
          canvas.style.verticalAlign = 'middle';
          canvas.style.margin = '0 4px';
          if (parent.childNodes.length > 0) {
            parent.insertBefore(canvas, parent.childNodes[Math.floor(Math.random() * parent.childNodes.length)]);
          } else {
            parent.appendChild(canvas);
          }
        } else {
          document.body.appendChild(canvas);
        }
        pixelateIn(canvas, img, w, h, position ? function(){
          // Fixed-position: pixelate out after 4s then remove
          setTimeout(function(){
            pixelateOut(canvas, w, h, function(){ canvas.remove(); });
          }, 4000);
        } : null);
      };
    }

    // Insert multiple inline images per tick
    setInterval(function(){
      var targets = document.querySelectorAll('.main-content p, .main-content li, .main-content h2, .main-content td');
      for (var ii = 0; ii < 3; ii++) {
        var el = targets[Math.floor(Math.random() * targets.length)];
        if (el) injectCreature(el);
      }
    }, 2000);
    // Also scatter fixed-position images across the page
    setInterval(function(){
      var size = 50 + Math.floor(Math.random() * 100);
      injectCreature(null, 'position:fixed;pointer-events:none;z-index:9996;left:'+Math.random()*90+'%;top:'+Math.random()*90+'%;');
    }, 3000);

    // Phase 3: zalgo-kiwi text corruption
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      var p = ps[Math.floor(Math.random() * ps.length)];
      if (!p || p.textContent.length < 5) return;
      var t = p.textContent;
      var pos = Math.floor(Math.random() * (t.length - 4));
      p.textContent = t.substring(0, pos) + zalgo('kiwi', 2) + t.substring(pos + 4);
    }, 5000);

    // Phase 4: page title mutation
    var titleTick = 0;
    setInterval(function(){
      titleTick++;
      var t = document.title;
      if (titleTick % 3 === 0) document.title = t.replace(/\b[kK]\w*/g, 'kiwi');
      if (titleTick > 10) document.title = 'kiwi';
    }, 3000);

  } catch(e){} }

  } // end for each virus

  // === DARK EFFECTS (non-virus, always active) ===

  // 4. Deleted section traces — insert redacted placeholder between random sections
  try {
    var lang = window._kLang || 'en';
    var hrs = document.querySelectorAll('.main-content hr');
    if (hrs.length > 3) {
      var idx = 1 + Math.floor(Math.random() * (hrs.length - 2));
      var hr = hrs[idx];
      var msgs = {
        en: '[This section has been removed upon request — Requester: UNKNOWN]',
        ko: '[이 섹션은 요청에 의해 삭제되었습니다 — 요청자: 불명]',
        ja: '[このセクションは要請により削除されました — 要請者: 不明]'
      };
      var del = document.createElement('div');
      del.className = 'aku-deleted-section';
      del.textContent = msgs[lang] || msgs.en;
      hr.parentNode.insertBefore(del, hr.nextSibling);
    }
  } catch(e){}

  // 10. Linger darkness — after 60s the page edges slowly darken
  try {
    setTimeout(function(){
      var vignette = document.createElement('div');
      vignette.className = 'aku-vignette';
      document.body.appendChild(vignette);
      // Fade in over 10s
      requestAnimationFrame(function(){
        vignette.style.opacity = '1';
      });
    }, 60000);
  } catch(e){}

});
