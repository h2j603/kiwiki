// === Kiwiki: Language + TOC + Infection ===

// --- LANGUAGE (runs immediately) ---
(function(){
  var p = window.location.search.match(/[?&]lang=(en|ko|ja)/);
  var lang = p ? p[1] : null;
  if (lang) { try { localStorage.setItem('kiwiki-lang', lang); } catch(e){} }
  else { try { lang = localStorage.getItem('kiwiki-lang'); } catch(e){} }
  if (!lang) lang = 'en';
  document.documentElement.className += ' lang-' + lang;
  window._kLang = lang;
})();

// --- INFECTION (runs immediately) ---
(function(){
  try {
    var vs = ['echoloop','mirrorlink','pixelrot','deadscroll','glitchmoss','nullwhisper','blindspot','phantomtab','staticbloom','syntaxwraith','cachevein','forgetmenot'];
    var v = sessionStorage.getItem('kiwiki-virus');
    if (!v) { v = vs[Math.floor(Math.random()*vs.length)]; sessionStorage.setItem('kiwiki-virus', v); }
    document.documentElement.className += ' virus-' + v;
    window._kVirus = v;
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

  // === Infection notice ===
  try {
    var v = window._kVirus;
    if (v) {
      var names = {echoloop:'EchoLoop',mirrorlink:'MirrorLink',pixelrot:'PixelRot',deadscroll:'DeadScroll',glitchmoss:'GlitchMoss',nullwhisper:'NullWhisper',blindspot:'BlindSpot',phantomtab:'PhantomTab',staticbloom:'StaticBloom',syntaxwraith:'SyntaxWraith',cachevein:'CacheVein',forgetmenot:'ForgetMeNot'};
      var codes = {echoloop:'WKV-C.SE-001',mirrorlink:'WKV-S.SN-001',pixelrot:'WKV-S.EM-002',deadscroll:'WKV-C.SN-002',glitchmoss:'WKV-E.DA-001',nullwhisper:'WKV-L.MS-001',blindspot:'WKV-S.SE-004',phantomtab:'WKV-L.SN-003',staticbloom:'WKV-E.SN-003',syntaxwraith:'WKV-L.DA-002',cachevein:'WKV-E.MS-002',forgetmenot:'WKV-C.EM-003'};
      var bar = document.createElement('div');
      bar.className = 'infection-notice';
      bar.innerHTML = '\u26a0 infected: <b>' + (names[v]||v) + '</b> (' + (codes[v]||'') + ')';
      document.body.appendChild(bar);
      setTimeout(function(){ bar.style.transition='opacity 1s'; bar.style.opacity='0'; }, 8000);
    }
  } catch(e){}

  // === VIRUS INTERACTIONS (실제 바이러스별 인터랙션) ===
  var v = window._kVirus;
  if (!v) return;

  // EchoLoop: 30초 후 랜덤 문단 복제 반복
  if (v === 'echoloop') { try {
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      if (ps.length > 3) {
        var p = ps[Math.floor(Math.random()*ps.length)];
        var c = p.cloneNode(true);
        c.style.opacity = '0.15';
        c.style.fontStyle = 'italic';
        p.parentNode.insertBefore(c, p.nextSibling);
      }
    }, 30000);
  } catch(e){} }

  // DeadScroll: 스크롤 중 간헐적 위치 점프
  if (v === 'deadscroll') { try {
    var sc = 0;
    window.addEventListener('scroll', function(){
      if (++sc % 50 === 0) window.scrollBy(0, Math.random()*200-100);
    });
  } catch(e){} }

  // MirrorLink: 5초마다 랜덤 이미지/텍스트 좌우 반전
  if (v === 'mirrorlink') { try {
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p, .main-content li');
      if (ps.length > 0) {
        var el = ps[Math.floor(Math.random()*ps.length)];
        el.style.transform = el.style.transform ? '' : 'scaleX(-1)';
        el.style.display = 'inline-block';
      }
    }, 5000);
  } catch(e){} }

  // PixelRot: 시간이 지날수록 페이지 blur 증가
  if (v === 'pixelrot') { try {
    var blur = 0;
    setInterval(function(){
      blur += 0.1;
      if (blur > 3) blur = 3;
      var mc = document.querySelector('.main-content');
      if (mc) mc.style.filter = 'blur(' + blur + 'px)';
    }, 10000);
  } catch(e){} }

  // GlitchMoss: 랜덤 위치에 ▓ 글리치 문자 삽입
  if (v === 'glitchmoss') { try {
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      if (ps.length > 0) {
        var p = ps[Math.floor(Math.random()*ps.length)];
        var glitch = document.createElement('span');
        glitch.textContent = '▓';
        glitch.style.cssText = 'color:lawngreen;font-size:1.2em;';
        var pos = Math.floor(Math.random() * (p.childNodes.length + 1));
        p.insertBefore(glitch, p.childNodes[pos] || null);
      }
    }, 8000);
  } catch(e){} }

  // NullWhisper: 클릭할 때마다 랜덤 "속삭임" 표시
  if (v === 'nullwhisper') { try {
    var whispers = ['choose this one...','trust yourself...','the other option is wrong...','this is the logical choice...','ignore their advice...'];
    document.addEventListener('click', function(e){
      if (Math.random() > 0.7) {
        var w = document.createElement('div');
        w.textContent = whispers[Math.floor(Math.random()*whispers.length)];
        w.style.cssText = 'position:fixed;top:' + (Math.random()*60+20) + '%;left:' + (Math.random()*60+20) + '%;color:orangered;font-style:italic;font-size:14px;opacity:0.3;pointer-events:none;z-index:9999;transition:opacity 2s;';
        document.body.appendChild(w);
        setTimeout(function(){ w.style.opacity='0'; }, 100);
        setTimeout(function(){ w.remove(); }, 2500);
      }
    });
  } catch(e){} }

  // BlindSpot: 마우스/터치 위치 근처에 검은 원 (사각지대)
  if (v === 'blindspot') { try {
    var spot = document.createElement('div');
    spot.style.cssText = 'position:fixed;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.95);pointer-events:none;z-index:9998;transform:translate(-50%,-50%);display:none;';
    document.body.appendChild(spot);
    var lastMove = 0;
    document.addEventListener('mousemove', function(e){ spot.style.display='block'; spot.style.left=e.clientX+'px'; spot.style.top=e.clientY+'px'; });
    document.addEventListener('touchmove', function(e){ spot.style.display='block'; var t=e.touches[0]; spot.style.left=t.clientX+'px'; spot.style.top=t.clientY+'px'; });
  } catch(e){} }

  // PhantomTab: 주기적으로 "유령 알림" 팝업
  if (v === 'phantomtab') { try {
    setInterval(function(){
      var n = document.createElement('div');
      n.textContent = '📑 New tab opened...';
      n.style.cssText = 'position:fixed;top:10px;right:10px;background:#111;color:lawngreen;padding:8px 16px;font-family:"t26-carbon",monospace;font-style:italic;font-size:12px;z-index:9999;opacity:0.8;transition:opacity 1s;';
      document.body.appendChild(n);
      setTimeout(function(){ n.style.opacity='0'; }, 1500);
      setTimeout(function(){ n.remove(); }, 3000);
    }, 15000);
  } catch(e){} }

  // StaticBloom: 랜덤 위치에 ✦ 꽃 생성
  if (v === 'staticbloom') { try {
    setInterval(function(){
      var flower = document.createElement('div');
      flower.textContent = '✦';
      flower.style.cssText = 'position:fixed;color:lawngreen;font-size:' + (16+Math.random()*24) + 'px;opacity:0.3;pointer-events:none;z-index:9998;left:' + Math.random()*90 + '%;top:' + Math.random()*90 + '%;transition:opacity 3s;';
      document.body.appendChild(flower);
      setTimeout(function(){ flower.style.opacity='0'; }, 3000);
      setTimeout(function(){ flower.remove(); }, 6000);
    }, 4000);
  } catch(e){} }

  // SyntaxWraith: 랜덤 텍스트를 코드 구문으로 변환
  if (v === 'syntaxwraith') { try {
    setTimeout(function(){
      var ps = document.querySelectorAll('.main-content p');
      for (var i = 0; i < ps.length; i++) {
        if (Math.random() > 0.7) {
          var text = ps[i].textContent;
          ps[i].innerHTML = '<code style="font-size:0.9em;color:orangered;border:1px solid orangered;padding:2px 4px;">if (' + text.substring(0,30) + '...) { return true; }</code>';
        }
      }
    }, 5000);
  } catch(e){} }

  // CacheVein: 페이지에 서서히 정맥 라인 추가
  if (v === 'cachevein') { try {
    setInterval(function(){
      var vein = document.createElement('div');
      var isHorizontal = Math.random() > 0.5;
      vein.style.cssText = 'position:fixed;background:orangered;opacity:0.04;z-index:9997;pointer-events:none;' +
        (isHorizontal
          ? 'height:1px;width:' + (Math.random()*40+10) + '%;left:' + Math.random()*80 + '%;top:' + Math.random()*100 + '%;'
          : 'width:1px;height:' + (Math.random()*30+10) + '%;left:' + Math.random()*100 + '%;top:' + Math.random()*80 + '%;');
      document.body.appendChild(vein);
    }, 3000);
  } catch(e){} }

  // ForgetMeNot: 스크롤 할수록 위쪽 콘텐츠가 사라짐
  if (v === 'forgetmenot') { try {
    window.addEventListener('scroll', function(){
      var ps = document.querySelectorAll('.main-content p, .main-content li');
      var scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      var fadeCount = Math.floor(scrollRatio * ps.length * 0.5);
      for (var i = 0; i < ps.length; i++) {
        if (i < fadeCount) {
          ps[i].style.opacity = '0.05';
          ps[i].style.transition = 'opacity 2s';
        }
      }
    });
  } catch(e){} }

});
