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
})();

// --- INFECTION (runs immediately) ---
(function(){
  try {
    var vs = ['kiwiecho','kiwimirror','kiwirot','kiwiscroll','kiwimoss','kiwhisper','kiwispot','kiwitab','kiwibloom','kiwisyntax','kiwivein','kiwiforgot','kiwighost','kiwiparadox','kiwibleed','kiwiclip','kiwidrift','kiwitouch','kiwivoice','kiwiafter','kiwidream','kiwieater','kiwitime','kiwicut','kiwirust','kiwiroot','kiwiroom','kiwispace','kiwiloop','kiwishade','kiwihowl','kiwivoid','kiwizero'];
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

  // === Infection notice (2-stage: center splash → bottom bar) ===
  try {
    var v = window._kVirus;
    if (v) {
      var names = {kiwiecho:'KiwiEcho',kiwimirror:'KiwiMirror',kiwirot:'KiwiRot',kiwiscroll:'KiwiScroll',kiwimoss:'KiwiMoss',kiwhisper:'KiWhisper',kiwispot:'KiwiSpot',kiwitab:'KiwiTab',kiwibloom:'KiwiBloom',kiwisyntax:'KiwiSyntax',kiwivein:'KiwiVein',kiwiforgot:'KiwiForgot',kiwighost:'KiwiGhost',kiwiparadox:'KiwiParadox',kiwibleed:'KiwiBleed',kiwiclip:'KiwiClip',kiwidrift:'KiwiDrift',kiwitouch:'KiwiTouch',kiwivoice:'KiwiVoice',kiwiafter:'KiwiAfter',kiwidream:'KiwiDream',kiwieater:'KiwiEater',kiwitime:'KiwiTime',kiwicut:'KiwiCut',kiwirust:'KiwiRust',kiwiroot:'KiwiRoot',kiwiroom:'KiwiRoom',kiwispace:'KiwiSpace',kiwiloop:'KiwiLoop',kiwishade:'KiwiShade',kiwihowl:'KiwiHowl',kiwivoid:'KiwiVoid',kiwizero:'KiwiZero'};
      var codes = {kiwiecho:'WKV-C.SE-001',kiwimirror:'WKV-S.SN-001',kiwirot:'WKV-S.EM-002',kiwiscroll:'WKV-C.SN-002',kiwimoss:'WKV-E.DA-001',kiwhisper:'WKV-L.MS-001',kiwispot:'WKV-S.SE-004',kiwitab:'WKV-L.SN-003',kiwibloom:'WKV-E.SN-003',kiwisyntax:'WKV-L.DA-002',kiwivein:'WKV-E.MS-002',kiwiforgot:'WKV-C.EM-003',kiwighost:'WKV-L.SE-005',kiwiparadox:'WKV-L.DA-006',kiwibleed:'WKV-L.SN-007',kiwiclip:'WKV-L.MS-008',kiwidrift:'WKV-S.DA-005',kiwitouch:'WKV-S.SN-006',kiwivoice:'WKV-S.EM-007',kiwiafter:'WKV-S.SE-008',kiwidream:'WKV-C.SN-005',kiwieater:'WKV-C.DA-006',kiwitime:'WKV-C.SE-007',kiwicut:'WKV-C.MS-008',kiwirust:'WKV-E.SE-005',kiwiroot:'WKV-E.DA-006',kiwiroom:'WKV-E.SN-007',kiwispace:'WKV-E.MS-008',kiwiloop:'WKV-C.MS-004',kiwishade:'WKV-L.EM-004',kiwihowl:'WKV-S.MS-003',kiwivoid:'WKV-E.EM-004',kiwizero:'WKV-0.ALL-000'};

      // Stage 1: Center splash
      var splash = document.createElement('div');
      splash.className = 'infection-splash';
      splash.innerHTML = '<div class="infection-splash-text">EXPOSURE CONFIRMED</div><div class="infection-splash-name">' + (names[v]||v) + '</div><div class="infection-splash-code">' + (codes[v]||'') + '</div><div class="infection-splash-sub">boundary collapse in progress</div>';
      document.body.appendChild(splash);

      // Stage 2: After 3s, shrink to bottom bar
      setTimeout(function(){
        splash.style.transition = 'all 0.8s ease';
        splash.style.top = 'auto';
        splash.style.bottom = '0';
        splash.style.left = '0';
        splash.style.right = '0';
        splash.style.transform = 'none';
        splash.style.padding = '4px 14px';
        splash.style.fontSize = '11px';
        splash.style.borderRadius = '0';
        splash.style.border = 'none';
        splash.style.width = '100%';
        splash.innerHTML = '\u25a0 ' + (codes[v]||'') + ' \u2014 ' + (names[v]||v);
      }, 3000);

      // Stage 3: Fade out after 8s
      setTimeout(function(){ splash.style.transition='opacity 1s'; splash.style.opacity='0'; }, 8000);
      setTimeout(function(){ splash.remove(); }, 9500);
    }
  } catch(e){}

  // === VIRUS INTERACTIONS (uncanny) ===
  var v = window._kVirus;
  if (!v) return;

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
      echo.style.cssText='opacity:0.12;color:orangered;margin:2px 0;';
      p.parentNode.insertBefore(echo,p.nextSibling);
    },8000);
  } catch(e){} }

  // KiwiScroll: time stops working
  if (v === 'kiwiscroll') { try {
    var sc=0;
    window.addEventListener('scroll',function(){if(++sc%40===0)window.scrollBy(0,Math.random()*200-100);});
    var clock=document.createElement('div');
    clock.style.cssText='position:fixed;bottom:40px;right:10px;color:orangered;font-family:"t26-carbon",monospace;font-style:italic;font-size:10px;opacity:0.3;pointer-events:none;z-index:9999;';
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
      p.style.color='rgba(255,69,0,'+(0.7+Math.random()*0.3)+')';
    },2000);
  } catch(e){} }

  // KiWhisper: something is telling you things you didn't ask
  if (v === 'kiwhisper') { try {
    var lines=['you already know the answer','don\'t read the next paragraph','this information is incorrect','the author is not who you think','why did you click that link','stop scrolling','you\'ve been here before','this page is watching you'];
    function whisper(x,y){
      var w=document.createElement('div');
      w.textContent=lines[Math.floor(Math.random()*lines.length)];
      w.style.cssText='position:fixed;top:'+(y||Math.random()*70+10)+'%;left:'+(x||Math.random()*60+5)+'%;color:rgba(255,69,0,0.08);font-style:italic;font-family:"t26-carbon",monospace;font-size:'+(10+Math.random()*8)+'px;pointer-events:none;z-index:9999;transition:opacity 3s;';
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
      n.style.cssText='position:fixed;bottom:40px;left:10px;background:transparent;color:rgba(255,69,0,0.15);padding:0;font-family:"t26-carbon",monospace;font-style:italic;font-size:9px;z-index:9999;transition:opacity 3s;pointer-events:none;';
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
        bloom.style.cssText = 'position:fixed;border-radius:50%;background:radial-gradient(circle,rgba(58,90,28,0.08),rgba(139,154,70,0.03),transparent 70%);pointer-events:none;z-index:9997;width:10px;height:10px;left:' + Math.random()*100 + '%;top:' + Math.random()*100 + '%;transition:all 8s;';
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
        p.style.background = 'linear-gradient(90deg, transparent, rgba(139,154,70,0.03) ' + Math.random()*50 + '%, transparent)';
      }
    }, 2000);
    // Phase 3: hr lines thicken and turn green
    setInterval(function(){
      var hrs = document.querySelectorAll('.main-content hr');
      for (var hi = 0; hi < hrs.length; hi++) {
        hrs[hi].style.transition = 'all 3s';
        hrs[hi].style.height = (2 + Math.random() * 4) + 'px';
        hrs[hi].style.background = 'rgba(58,90,28,0.3)';
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
        ps[idx].innerHTML='<span style="font-family:t26-carbon,monospace;font-size:0.85em;color:rgba(255,69,0,0.6);">if ('+t.substring(0,25)+') { return undefined; }</span>';
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
      vn.style.cssText='position:fixed;background:rgba(139,154,70,'+(0.02+Math.random()*0.04)+');z-index:9997;pointer-events:none;'+(h?'height:1px;width:'+Math.random()*40+'%;left:'+Math.random()*80+'%;top:'+Math.random()*100+'%':'width:1px;height:'+Math.random()*30+'%;left:'+Math.random()*100+'%;top:'+Math.random()*80+'%')+';';
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
        ps[fi].innerHTML='<span style="color:#555;font-family:t26-carbon,monospace;font-size:0.85em;font-style:italic;">'+notices[fi%notices.length]+'</span>';
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
          p.style.textShadow = spread + 'px 0 ' + (spread*2) + 'px rgba(139,154,70,0.3), ' +
            (-spread) + 'px 0 ' + (spread*2) + 'px rgba(255,69,0,0.2), ' +
            '0 ' + spread + 'px ' + spread + 'px rgba(139,154,70,0.15)';
          p.style.color = 'rgba(255,69,0,' + (1 - bleedIntensity * 0.03) + ')';
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
      leak.style.cssText = 'position:absolute;color:rgba(139,154,70,0.25);font-size:' + (10 + Math.random() * 14) + 'px;transform:rotate(' + (Math.random() * 30 - 15) + 'deg);pointer-events:none;margin-left:' + (Math.random() * 40 - 20) + 'px;margin-top:' + (Math.random() * 20 - 10) + 'px;';
      p.style.position = 'relative';
      p.appendChild(leak);
    }, 2000);
    // Phase 3: page background starts showing stains
    var stainCount = 0;
    setInterval(function(){
      if (stainCount > 15) return;
      stainCount++;
      var stain = document.createElement('div');
      stain.style.cssText = 'position:fixed;width:' + (30 + Math.random() * 80) + 'px;height:' + (30 + Math.random() * 80) + 'px;border-radius:50%;background:radial-gradient(ellipse,rgba(139,154,70,0.04),transparent 70%);pointer-events:none;z-index:9996;left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;';
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
        frag.style.cssText='opacity:0.15;font-family:t26-carbon,monospace;font-size:0.8em;';
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
      r.style.cssText='position:fixed;width:4px;height:4px;border-radius:50%;border:1px solid rgba(255,69,0,0.2);pointer-events:none;z-index:9998;left:'+x+'px;top:'+y+'px;transition:all 2s;';
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
      a.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(139,154,70,0.015);pointer-events:none;z-index:9997;transition:opacity 3s;';
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
        t.style.color='#333';
      }
    },4000);
  } catch(e){} }

  // KiwiTime: you were already here
  if (v === 'kiwitime') { try {
    setInterval(function(){
      var o=document.createElement('div');
      o.textContent='you have read this before';
      o.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:"t26-carbon",monospace;font-style:italic;font-size:11px;color:rgba(255,69,0,0.06);pointer-events:none;z-index:9999;letter-spacing:3px;transition:opacity 4s;';
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
      if (mc) mc.style.borderRight = oxidation + 'px solid rgba(139,101,20,0.05)';
    }, 4000);
  } catch(e){} }

  // KiwiRoot: tendrils
  if (v === 'kiwiroot') { try {
    var rc=0;
    setInterval(function(){
      if(rc>25)return;rc++;
      var l=document.createElement('div');
      l.style.cssText='position:fixed;background:rgba(139,101,20,0.06);z-index:9997;pointer-events:none;width:1px;height:'+Math.random()*20+'%;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;transform:rotate('+(Math.random()*60-30)+'deg);transition:height 8s;';
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
      echo.style.cssText='position:fixed;font-family:"t26-carbon",monospace;font-style:italic;color:rgba(255,69,0,0.06);font-size:10px;pointer-events:none;z-index:9999;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:opacity 4s;';
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
      g.style.cssText='position:fixed;font-size:12px;color:rgba(255,69,0,0.08);pointer-events:none;z-index:9999;left:'+e.clientX+'px;top:'+e.clientY+'px;transition:all 2s;';
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
    var lang = window._kLang || 'en';
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p, .main-content li, .main-content td, .main-content a, .main-content h2');
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

    // Phase 2: random text replaced with kiwi creature placeholder
    var creatureImgs = [];
    // Try loading creature images from folder
    var imgFolder = '/kiwiki/assets/images/kiwi-creature/';
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      if (ps.length < 3) return;
      var p = ps[Math.floor(Math.random() * ps.length)];
      if (p.getAttribute('data-kiwified')) return;
      if (Math.random() > 0.3) return; // 30% chance per tick
      p.setAttribute('data-kiwified', '1');
      // Try image replacement
      var img = document.createElement('img');
      var creatureFiles = ['IMG_6034.jpeg','IMG_6035.jpeg','IMG_6039.jpeg','IMG_6041.jpeg','IMG_6042.jpeg','IMG_6046.jpeg'];
      img.src = imgFolder + creatureFiles[Math.floor(Math.random() * creatureFiles.length)];
      img.alt = 'kiwi creature';
      img.style.cssText = 'max-width:120px;height:auto;display:inline-block;vertical-align:middle;margin:0 4px;opacity:0.8;';
      img.onerror = function() {
        // If image doesn't exist, use text placeholder
        this.replaceWith(document.createTextNode(' [k\u0336i\u0336w\u0336i\u0336] '));
      };
      // Replace a random word with the creature
      var words = p.innerHTML.split(' ');
      if (words.length > 3) {
        var idx = Math.floor(Math.random() * words.length);
        var span = document.createElement('span');
        span.appendChild(img);
        words[idx] = span.outerHTML;
        p.innerHTML = words.join(' ');
      }
    }, 4000);

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

});
