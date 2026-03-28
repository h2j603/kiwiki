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

// --- DOM READY: TOC + active button + infection notice ---
document.addEventListener('DOMContentLoaded', function(){

  // Active lang button
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

  // TOC
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
        var sn = hs[i].querySelector('.sec-num');
        if (!sn) { sn = document.createElement('span'); sn.className = 'sec-num'; hs[i].insertBefore(sn, hs[i].firstChild); }
        sn.textContent = n + '. ';
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

  // Infection notice
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

  // DeadScroll effect
  try {
    if (window._kVirus === 'deadscroll') {
      var sc = 0;
      window.addEventListener('scroll', function(){ if (++sc % 60 === 0) window.scrollBy(0, Math.random()*150-75); });
    }
  } catch(e){}
});
