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
    var vs = ['kiwiecho','kiwimirror','kiwirot','kiwiscroll','kiwimoss','kiwhisper','kiwispot','kiwitab','kiwibloom','kiwisyntax','kiwivein','kiwiforgot'];
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
      var names = {echoloop:'KiwiEcho',mirrorlink:'KiwiMirror',pixelrot:'KiwiRot',deadscroll:'KiwiScroll',glitchmoss:'KiwiMoss',nullwhisper:'KiWhisper',blindspot:'KiwiSpot',phantomtab:'KiwiTab',staticbloom:'KiwiBloom',syntaxwraith:'KiwiSyntax',cachevein:'KiwiVein',forgetmenot:'KiwiForgot'};
      var codes = {echoloop:'WKV-C.SE-001',mirrorlink:'WKV-S.SN-001',pixelrot:'WKV-S.EM-002',deadscroll:'WKV-C.SN-002',glitchmoss:'WKV-E.DA-001',nullwhisper:'WKV-L.MS-001',blindspot:'WKV-S.SE-004',phantomtab:'WKV-L.SN-003',staticbloom:'WKV-E.SN-003',syntaxwraith:'WKV-L.DA-002',cachevein:'WKV-E.MS-002',forgetmenot:'WKV-C.EM-003'};

      // Stage 1: Center splash
      var splash = document.createElement('div');
      splash.className = 'infection-splash';
      splash.innerHTML = '<div class="infection-splash-icon">\u26a0</div><div class="infection-splash-text">INFECTED</div><div class="infection-splash-name">' + (names[v]||v) + '</div><div class="infection-splash-code">' + (codes[v]||'') + '</div>';
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
        splash.innerHTML = '\u26a0 infected: <b>' + (names[v]||v) + '</b> (' + (codes[v]||'') + ')';
      }, 3000);

      // Stage 3: Fade out after 8s
      setTimeout(function(){ splash.style.transition='opacity 1s'; splash.style.opacity='0'; }, 8000);
      setTimeout(function(){ splash.remove(); }, 9500);
    }
  } catch(e){}

  // === VIRUS INTERACTIONS (적극적) ===
  var v = window._kVirus;
  if (!v) return;

  // KiwiEcho: 10초마다 문단 복제 + 텍스트가 서서히 반복어투로
  if (v === 'kiwiecho') { try {
    setInterval(function(){
      var ps = document.querySelectorAll('.main-content p');
      if (ps.length > 2) {
        var p = ps[Math.floor(Math.random()*ps.length)];
        var c = p.cloneNode(true);
        c.style.cssText = 'opacity:0.2;font-style:italic;border-left:2px solid orangered;padding-left:8px;margin:4px 0;';
        p.parentNode.insertBefore(c, p.nextSibling);
      }
    }, 10000);
  } catch(e){} }

  // KiwiScroll: 스크롤 점프 + 타이머 왜곡
  if (v === 'kiwiscroll') { try {
    var sc=0;
    window.addEventListener('scroll',function(){
      if(++sc%30===0) window.scrollBy(0,Math.random()*300-150);
    });
    // 화면 구석에 왜곡된 시간 표시
    var clock=document.createElement('div');
    clock.style.cssText='position:fixed;bottom:40px;right:10px;color:orangered;font-family:"t26-carbon",monospace;font-style:italic;font-size:11px;opacity:0.4;pointer-events:none;z-index:9999;';
    document.body.appendChild(clock);
    setInterval(function(){
      var h=Math.floor(Math.random()*24),m=Math.floor(Math.random()*60);
      clock.textContent=(h<10?'0':'')+h+':'+(m<10?'0':'')+m;
    },3000);
  } catch(e){} }

  // KiwiMirror: 3초마다 여러 요소 반전 + 페이지 미세 기울임
  if (v === 'kiwimirror') { try {
    document.querySelector('.main-content').style.transform='perspective(1000px) rotateY(0.5deg)';
    setInterval(function(){
      var els=document.querySelectorAll('.main-content p,.main-content li,.main-content td');
      for(var i=0;i<3;i++){
        var el=els[Math.floor(Math.random()*els.length)];
        if(el) el.style.transform=el.style.transform?'':'scaleX(-1)';
      }
    },3000);
  } catch(e){} }

  // KiwiRot: 빠른 blur + 색상 채도 감소
  if (v === 'kiwirot') { try {
    var blur=0,sat=100;
    setInterval(function(){
      blur=Math.min(blur+0.2,4); sat=Math.max(sat-2,20);
      var mc=document.querySelector('.main-content');
      if(mc) mc.style.filter='blur('+blur+'px) saturate('+sat+'%)';
    },5000);
  } catch(e){} }

  // KiwiMoss: 3초마다 다수 글리치 + 배경색 오염
  if (v === 'kiwimoss') { try {
    var glyphs=['▓','▒','░','█','🥝','▓▓'];
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      for(var i=0;i<3;i++){
        var p=ps[Math.floor(Math.random()*ps.length)];
        if(!p)continue;
        var g=document.createElement('span');
        g.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];
        g.style.cssText='color:lawngreen;font-size:1.1em;';
        p.insertBefore(g,p.childNodes[Math.floor(Math.random()*(p.childNodes.length+1))]||null);
      }
    },3000);
    // 배경 서서히 녹색으로
    var green=0;
    setInterval(function(){
      green=Math.min(green+1,15);
      document.body.style.background='rgb(255,'+Math.max(255-green*2,240)+','+Math.max(255-green*3,230)+')';
    },5000);
  } catch(e){} }

  // KiWhisper: 매우 적극적 속삭임 + 커서 근처에 출현
  if (v === 'kiwhisper') { try {
    var whispers=['choose this...','trust me...','the other way is wrong...','logical choice...','ignore them...','you know better...','don\'t hesitate...','pick this one...','they\'re lying...'];
    function showW(x,y){
      var w=document.createElement('div');
      w.textContent=whispers[Math.floor(Math.random()*whispers.length)];
      w.style.cssText='position:fixed;top:'+(y||Math.random()*70+15)+'%;left:'+(x||Math.random()*60+10)+'%;color:orangered;font-style:italic;font-family:"t26-carbon",monospace;font-size:'+(16+Math.random()*20)+'px;opacity:0;pointer-events:none;z-index:9999;transition:all 1.5s;';
      document.body.appendChild(w);
      setTimeout(function(){w.style.opacity=''+(0.2+Math.random()*0.3);},50);
      setTimeout(function(){w.style.opacity='0';w.style.transform='translateY(-20px)';},2000);
      setTimeout(function(){w.remove();},4000);
    }
    setInterval(showW,3000);
    document.addEventListener('click',function(e){
      showW((e.clientX/window.innerWidth*100),(e.clientY/window.innerHeight*100));
    });
  } catch(e){} }

  // KiwiSpot: 여러 개의 떠다니는 사각지대
  if (v === 'kiwispot') { try {
    for(var si=0;si<3;si++){
      var spot=document.createElement('div');
      spot.style.cssText='position:fixed;width:'+(80+Math.random()*80)+'px;height:'+(80+Math.random()*80)+'px;border-radius:50%;background:rgba(255,255,255,0.9);pointer-events:none;z-index:9998;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:all 8s;';
      document.body.appendChild(spot);
      (function(s){
        setInterval(function(){s.style.left=Math.random()*80+'%';s.style.top=Math.random()*80+'%';},8000);
      })(spot);
    }
  } catch(e){} }

  // KiwiTab: 5초마다 유령 알림 + 탭 깜빡임
  if (v === 'kiwitab') { try {
    var msgs=['🥝 New tab opened...','📑 Loading...','⚠ Tab not responding','🔄 Redirecting...','📋 Copied to clipboard'];
    setInterval(function(){
      var n=document.createElement('div');
      n.textContent=msgs[Math.floor(Math.random()*msgs.length)];
      var positions=['top:10px;right:10px;','top:10px;left:10px;','bottom:40px;right:10px;','bottom:40px;left:10px;'];
      n.style.cssText='position:fixed;'+positions[Math.floor(Math.random()*positions.length)]+'background:#111;color:lawngreen;padding:8px 16px;font-family:"t26-carbon",monospace;font-style:italic;font-size:12px;z-index:9999;opacity:0;transition:opacity 0.5s;border:1px solid lawngreen;';
      document.body.appendChild(n);
      setTimeout(function(){n.style.opacity='0.9';},50);
      setTimeout(function(){n.style.opacity='0';},2000);
      setTimeout(function(){n.remove();},3000);
    },5000);
    // 타이틀 깜빡임
    var origTitle=document.title;
    setInterval(function(){document.title=document.title===origTitle?'⚠ (1) New Tab':origTitle;},4000);
  } catch(e){} }

  // KiwiBloom: 적극적 꽃 폭발
  if (v === 'kiwibloom') { try {
    var syms=['✦','✧','✶','✷','❋','✸','🥝','⚡'];
    setInterval(function(){
      for(var fi=0;fi<4;fi++){
        var f=document.createElement('div');
        f.textContent=syms[Math.floor(Math.random()*syms.length)];
        f.style.cssText='position:fixed;color:lawngreen;font-size:'+(24+Math.random()*40)+'px;opacity:'+(0.3+Math.random()*0.5)+';pointer-events:none;z-index:9998;left:'+Math.random()*95+'%;top:'+Math.random()*95+'%;transition:all 3s;';
        document.body.appendChild(f);
        setTimeout(function(el){return function(){el.style.opacity='0';el.style.transform='scale(3) rotate(90deg)';}}(f),1500);
        setTimeout(function(el){return function(){el.remove();}}(f),4500);
      }
    },1500);
  } catch(e){} }

  // KiwiSyntax: 즉시 + 점진적으로 모든 텍스트를 코드로
  if (v === 'kiwisyntax') { try {
    var idx=0;
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(idx<ps.length){
        var t=ps[idx].textContent;
        if(t.length>10) ps[idx].innerHTML='<code style="font-size:0.85em;color:lawngreen;background:#111;padding:4px 8px;display:block;border:1px solid orangered;font-family:t26-carbon,monospace;">function kiwi_'+idx+'() { /* '+t.substring(0,40)+' */ return null; }</code>';
        idx++;
      }
    },3000);
  } catch(e){} }

  // KiwiVein: 빠른 정맥 + 키위 그린
  if (v === 'kiwivein') { try {
    setInterval(function(){
      for(var vi=0;vi<3;vi++){
        var vn=document.createElement('div');
        var h=Math.random()>0.5;
        vn.style.cssText='position:fixed;background:'+(Math.random()>0.5?'#8B9A46':'orangered')+';opacity:'+(0.03+Math.random()*0.05)+';z-index:9997;pointer-events:none;'+(h?'height:1px;width:'+Math.random()*50+'%;left:'+Math.random()*80+'%;top:'+Math.random()*100+'%':'width:1px;height:'+Math.random()*40+'%;left:'+Math.random()*100+'%;top:'+Math.random()*80+'%')+';';
        document.body.appendChild(vn);
      }
    },1500);
  } catch(e){} }

  // KiwiForgot: 적극적 기억 삭제 — 읽은 곳이 사라짐
  if (v === 'kiwiforgot') { try {
    var forgotten=0;
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      if(forgotten<ps.length){
        ps[forgotten].style.transition='opacity 2s';
        ps[forgotten].style.opacity='0';
        ps[forgotten].style.height='0';
        ps[forgotten].style.overflow='hidden';
        ps[forgotten].style.margin='0';
        ps[forgotten].style.padding='0';
        forgotten++;
      }
    },8000);
  } catch(e){} }

  // === 나머지 16종 (수정됨) ===

  // KiwiGhost: 유령 알림 + 랜덤 텍스트 깜빡임
  if (v === 'kiwighost') { try {
    setInterval(function(){
      var icons=['🔔','👻','🥝','❓','⚠'];
      var bell=document.createElement('div');
      bell.textContent=icons[Math.floor(Math.random()*icons.length)];
      bell.style.cssText='position:fixed;font-size:28px;opacity:0;pointer-events:none;z-index:9999;transition:all 1.5s;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;';
      document.body.appendChild(bell);
      setTimeout(function(){bell.style.opacity='0.7';bell.style.transform='scale(1.3)';},50);
      setTimeout(function(){bell.style.opacity='0';bell.style.transform='scale(0.5) translateY(-40px)';},1200);
      setTimeout(function(){bell.remove();},3000);
    },3000);
    // 텍스트 깜빡임
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){p.style.opacity='0.1';setTimeout(function(){p.style.opacity='1';},300);}
    },5000);
  } catch(e){} }

  // KiwiParadox: 문단 방향 반전 + 랜덤 단어 뒤집기
  if (v === 'kiwiparadox') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&p.textContent.length>20){
        p.style.direction=p.style.direction==='rtl'?'ltr':'rtl';
        p.style.transition='all 0.5s';
      }
    },3000);
    // "반대로" 표시
    setInterval(function(){
      var tag=document.createElement('span');
      tag.textContent=' [¿] ';
      tag.style.cssText='color:orangered;font-weight:bold;';
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p) p.appendChild(tag);
    },6000);
  } catch(e){} }

  // KiwiBleed: 텍스트 색상 키위그린 + 글자 번짐
  if (v === 'kiwibleed') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){
        p.style.color='#8B9A46';
        p.style.textShadow='2px 0 4px rgba(139,154,70,0.3)';
      }
    },1500);
  } catch(e){} }

  // KiwiClip: 다른 문단 텍스트가 복사됨 + 클립보드 느낌 박스
  if (v === 'kiwiclip') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(ps.length<2)return;
      var src=ps[Math.floor(Math.random()*ps.length)];
      var clip=document.createElement('div');
      clip.textContent='📋 '+src.textContent.substring(0,25)+'...';
      clip.style.cssText='position:fixed;top:10px;left:50%;transform:translateX(-50%);background:#111;color:lawngreen;padding:6px 14px;font-family:"t26-carbon",monospace;font-style:italic;font-size:11px;z-index:9999;opacity:0;transition:opacity 0.5s;border:1px solid lawngreen;';
      document.body.appendChild(clip);
      setTimeout(function(){clip.style.opacity='0.9';},50);
      setTimeout(function(){clip.style.opacity='0';},2500);
      setTimeout(function(){clip.remove();},3500);
    },5000);
  } catch(e){} }

  // KiwiDrift: hue 회전 + 채도 변동
  if (v === 'kiwidrift') { try {
    var hue=0;
    setInterval(function(){
      hue=(hue+8)%360;
      var mc=document.querySelector('.main-content');
      if(mc) mc.style.filter='hue-rotate('+hue+'deg) saturate('+(80+Math.sin(hue*0.05)*40)+'%)';
    },1500);
  } catch(e){} }

  // KiwiTouch: 터치+클릭 모두 반응 (모바일+PC)
  if (v === 'kiwitouch') { try {
    function touchRipple(x,y){
      var r=document.createElement('div');
      r.style.cssText='position:fixed;width:40px;height:40px;border-radius:50%;background:rgba(139,154,70,0.4);pointer-events:none;z-index:9998;left:'+(x-20)+'px;top:'+(y-20)+'px;transition:all 1s;';
      document.body.appendChild(r);
      setTimeout(function(){r.style.transform='scale(4)';r.style.opacity='0';},50);
      setTimeout(function(){r.remove();},1200);
    }
    document.addEventListener('touchstart',function(e){touchRipple(e.touches[0].clientX,e.touches[0].clientY);});
    document.addEventListener('click',function(e){touchRipple(e.clientX,e.clientY);});
    // 자동 리플도
    setInterval(function(){touchRipple(Math.random()*window.innerWidth,Math.random()*window.innerHeight);},4000);
  } catch(e){} }

  // KiwiVoice: 유리 깨지는 소리 이모지 + 텍스트 자체에 줄 긋기
  if (v === 'kiwivoice') { try {
    var cracks=['💔','🔇','🥝💥','✗','🔕'];
    setInterval(function(){
      var c=document.createElement('div');
      c.textContent=cracks[Math.floor(Math.random()*cracks.length)];
      c.style.cssText='position:fixed;font-size:28px;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;opacity:0;pointer-events:none;z-index:9999;transition:all 1.5s;';
      document.body.appendChild(c);
      setTimeout(function(){c.style.opacity='0.5';c.style.transform='rotate('+(Math.random()*30-15)+'deg)';},50);
      setTimeout(function(){c.style.opacity='0';},2000);
      setTimeout(function(){c.remove();},3500);
    },3000);
    // 텍스트 줄긋기
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p) p.style.textDecoration='line-through';
    },6000);
  } catch(e){} }

  // KiwiAfter: 잔상 (스크롤 제한, max 5개)
  if (v === 'kiwiafter') { try {
    var afterCount=0;
    var lastScroll=0;
    window.addEventListener('scroll',function(){
      var now=Date.now();
      if(now-lastScroll<500||afterCount>20)return;
      lastScroll=now;afterCount++;
      var a=document.createElement('div');
      a.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(139,154,70,0.04);pointer-events:none;z-index:9997;transition:opacity 2s;';
      document.body.appendChild(a);
      setTimeout(function(){a.style.opacity='0';},300);
      setTimeout(function(){a.remove();afterCount--;},2500);
    });
  } catch(e){} }

  // KiwiDream: 주기적 blur + 키위 그린 오버레이
  if (v === 'kiwidream') { try {
    setInterval(function(){
      var mc=document.querySelector('.main-content');
      if(mc){
        mc.style.transition='filter 1s';
        mc.style.filter='blur(2px) brightness(0.95)';
        setTimeout(function(){mc.style.filter='';},1500);
      }
    },6000);
    // 꿈 텍스트
    setInterval(function(){
      var d=document.createElement('div');
      d.textContent='💤 ...🥝...';
      d.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:32px;opacity:0;pointer-events:none;z-index:9999;transition:opacity 1s;';
      document.body.appendChild(d);
      setTimeout(function(){d.style.opacity='0.2';},50);
      setTimeout(function(){d.style.opacity='0';},2000);
      setTimeout(function(){d.remove();},3000);
    },10000);
  } catch(e){} }

  // KiwiEater: 링크+텍스트 먹기
  if (v === 'kiwieater') { try {
    setInterval(function(){
      var targets=document.querySelectorAll('.main-content a,.main-content strong,.main-content b');
      var t=targets[Math.floor(Math.random()*targets.length)];
      if(t&&t.textContent!=='🥝'){
        t.setAttribute('data-original',t.textContent);
        t.textContent='🥝';
        t.style.textDecoration='none';
      }
    },3000);
  } catch(e){} }

  // KiwiTime: déjà vu + 시간 역행
  if (v === 'kiwitime') { try {
    var msgs=['déjà vu...','이건 전에도...','wait, again?','...見たことある...','🥝⏰'];
    setInterval(function(){
      var o=document.createElement('div');
      o.textContent=msgs[Math.floor(Math.random()*msgs.length)];
      o.style.cssText='position:fixed;top:'+Math.random()*70+'%;left:'+Math.random()*60+'%;font-family:"t26-carbon",monospace;font-style:italic;font-size:'+(18+Math.random()*16)+'px;color:orangered;opacity:0;pointer-events:none;z-index:9999;transition:all 1.5s;';
      document.body.appendChild(o);
      setTimeout(function(){o.style.opacity='0.25';},50);
      setTimeout(function(){o.style.opacity='0';o.style.transform='translateY(-30px)';},2000);
      setTimeout(function(){o.remove();},3500);
    },6000);
  } catch(e){} }

  // KiwiCut: 문맥 절단 + 줄긋기
  if (v === 'kiwicut') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&p.textContent.length>20&&!p.getAttribute('data-cut')){
        p.setAttribute('data-cut','1');
        var cut=Math.floor(p.textContent.length*0.3);
        p.innerHTML=p.textContent.substring(0,cut)+'<span style="color:orangered;font-weight:bold;">✂ ...</span>';
      }
    },5000);
  } catch(e){} }

  // KiwiRust: 텍스트+보더 갈변 (테이블 없어도 작동)
  if (v === 'kiwirust') { try {
    setInterval(function(){
      var els=document.querySelectorAll('.main-content p,.main-content h2,.main-content li,.main-content td,.main-content th');
      for(var ri=0;ri<2;ri++){
        var el=els[Math.floor(Math.random()*els.length)];
        if(el) el.style.color='#8B6914';
      }
    },2000);
    // hr도 갈변
    setInterval(function(){
      var hrs=document.querySelectorAll('.main-content hr');
      var hr=hrs[Math.floor(Math.random()*hrs.length)];
      if(hr) hr.style.background='#8B6914';
    },4000);
  } catch(e){} }

  // KiwiRoot: 뿌리 성장 (max 30개 제한)
  if (v === 'kiwiroot') { try {
    var rootCount=0;
    setInterval(function(){
      if(rootCount>30)return;
      rootCount++;
      var line=document.createElement('div');
      line.style.cssText='position:fixed;background:#8B6914;opacity:0.1;z-index:9997;pointer-events:none;width:2px;height:'+Math.random()*15+'%;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;transform:rotate('+(Math.random()*60-30)+'deg);transition:all 5s;';
      document.body.appendChild(line);
      setTimeout(function(){line.style.height=Math.random()*35+'%';line.style.opacity='0.15';},100);
    },2500);
  } catch(e){} }

  // KiwiRoom: 에코 텍스트 (크게, 여러 개)
  if (v === 'kiwiroom') { try {
    var echoes=['...echo...','...echo...echo...','🔊 ...','...🥝...','...반복...','...repeat...'];
    setInterval(function(){
      for(var ei=0;ei<2;ei++){
        var s=document.createElement('div');
        s.textContent=echoes[Math.floor(Math.random()*echoes.length)];
        s.style.cssText='position:fixed;font-family:"t26-carbon",monospace;font-style:italic;color:orangered;opacity:0;font-size:'+(16+Math.random()*14)+'px;pointer-events:none;z-index:9999;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:all 2s;';
        document.body.appendChild(s);
        setTimeout(function(el){return function(){el.style.opacity='0.25';el.style.transform='scale(1.3)';}}(s),50);
        setTimeout(function(el){return function(){el.style.opacity='0';}}(s),2000);
        setTimeout(function(el){return function(){el.remove();}}(s),4000);
      }
    },3000);
  } catch(e){} }

  // KiwiSpace: 요소 투명화 (빠르게)
  if (v === 'kiwispace') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li,.main-content td');
      for(var si=0;si<2;si++){
        var p=ps[Math.floor(Math.random()*ps.length)];
        if(p){p.style.transition='opacity 2s';p.style.opacity=Math.max(parseFloat(p.style.opacity||1)-0.2,0);}
      }
    },2000);
  } catch(e){} }

  // KiwiLoop: 문단 교환 (빠르게) + 순서 표시
  if (v === 'kiwiloop') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(ps.length>4){
        var a=Math.floor(Math.random()*ps.length);
        var b=Math.floor(Math.random()*ps.length);
        if(a!==b){
          var tmp=ps[a].innerHTML;ps[a].innerHTML=ps[b].innerHTML;ps[b].innerHTML=tmp;
          ps[a].style.borderLeft='2px solid lawngreen';ps[a].style.paddingLeft='6px';
          ps[b].style.borderLeft='2px solid lawngreen';ps[b].style.paddingLeft='6px';
        }
      }
    },6000);
  } catch(e){} }

  // KiwiShade: 클릭+자동 그림자 선택지
  if (v === 'kiwishade') { try {
    function shade(x,y){
      var ghost=document.createElement('div');
      ghost.textContent=['👻','◐','🥝','?'][Math.floor(Math.random()*4)];
      ghost.style.cssText='position:fixed;font-size:24px;opacity:0;pointer-events:none;z-index:9999;left:'+x+'px;top:'+y+'px;transition:all 1.5s;';
      document.body.appendChild(ghost);
      setTimeout(function(){ghost.style.opacity='0.4';ghost.style.transform='translateY(-40px) scale(1.5)';},50);
      setTimeout(function(){ghost.style.opacity='0';},1500);
      setTimeout(function(){ghost.remove();},3000);
    }
    document.addEventListener('click',function(e){shade(e.clientX,e.clientY);});
    setInterval(function(){shade(Math.random()*window.innerWidth,Math.random()*window.innerHeight);},4000);
  } catch(e){} }

  // KiwiHowl: 울음 이모지 + 텍스트 떨림
  if (v === 'kiwihowl') { try {
    setInterval(function(){
      var howl=document.createElement('div');
      howl.textContent=['~🥝~','🐦‍⬛','Ki-Wi!','...'][Math.floor(Math.random()*4)];
      howl.style.cssText='position:fixed;font-size:22px;color:orangered;opacity:0;pointer-events:none;z-index:9999;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:all 2s;font-family:"t26-carbon",monospace;font-style:italic;';
      document.body.appendChild(howl);
      setTimeout(function(){howl.style.opacity='0.4';howl.style.transform='scale(1.5) rotate('+(Math.random()*20-10)+'deg)';},50);
      setTimeout(function(){howl.style.opacity='0';},2500);
      setTimeout(function(){howl.remove();},4500);
    },3000);
    // 텍스트 떨림
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){p.style.animation='shake 0.3s';setTimeout(function(){p.style.animation='';},300);}
    },5000);
  } catch(e){} }

  // KiwiVoid: 요소 빨려들어가듯 소멸
  if (v === 'kiwivoid') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&!p.getAttribute('data-void')){
        p.setAttribute('data-void','1');
        p.style.transition='all 2s';
        p.style.transform='scale(0.8) perspective(200px) rotateX(10deg)';
        p.style.opacity='0';
        setTimeout(function(){p.style.height='0';p.style.margin='0';p.style.padding='0';p.style.overflow='hidden';},2000);
      }
    },5000);
  } catch(e){} }

});
