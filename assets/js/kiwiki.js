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

  // 나머지 바이러스들 (새 16종)
  if (v === 'kiwighost') { try {
    setInterval(function(){
      var bell=document.createElement('div');
      bell.textContent='🔔';
      bell.style.cssText='position:fixed;font-size:24px;right:20px;top:'+Math.random()*80+'%;opacity:0.6;pointer-events:none;z-index:9999;transition:all 1s;';
      document.body.appendChild(bell);
      setTimeout(function(){bell.style.opacity='0';bell.style.transform='translateX(50px)';},800);
      setTimeout(function(){bell.remove();},2000);
    },4000);
  } catch(e){} }

  if (v === 'kiwiparadox') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&p.textContent.length>20) p.style.direction=p.style.direction==='rtl'?'ltr':'rtl';
    },4000);
  } catch(e){} }

  if (v === 'kiwibleed') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p) p.style.color='#8B9A46';
    },2000);
  } catch(e){} }

  if (v === 'kiwiclip') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var src=ps[Math.floor(Math.random()*ps.length)];
      var dst=ps[Math.floor(Math.random()*ps.length)];
      if(src&&dst&&src!==dst){
        var ghost=document.createElement('span');
        ghost.textContent=' ['+src.textContent.substring(0,15)+'...]';
        ghost.style.cssText='opacity:0.2;font-style:italic;color:orangered;';
        dst.appendChild(ghost);
      }
    },6000);
  } catch(e){} }

  if (v === 'kiwidrift') { try {
    var hue=0;
    setInterval(function(){
      hue=(hue+5)%360;
      document.querySelector('.main-content').style.filter='hue-rotate('+hue+'deg)';
    },2000);
  } catch(e){} }

  if (v === 'kiwitouch') { try {
    document.addEventListener('touchstart',function(e){
      var r=document.createElement('div');
      r.style.cssText='position:fixed;width:40px;height:40px;border-radius:50%;background:rgba(139,154,70,0.3);pointer-events:none;z-index:9998;left:'+(e.touches[0].clientX-20)+'px;top:'+(e.touches[0].clientY-20)+'px;transition:all 1s;';
      document.body.appendChild(r);
      setTimeout(function(){r.style.transform='scale(3)';r.style.opacity='0';},100);
      setTimeout(function(){r.remove();},1200);
    });
  } catch(e){} }

  if (v === 'kiwivoice') { try {
    setInterval(function(){
      var crack=document.createElement('div');
      crack.textContent=['💔','🔇','🥝💥','...'][Math.floor(Math.random()*4)];
      crack.style.cssText='position:fixed;font-size:20px;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;opacity:0.4;pointer-events:none;z-index:9999;transition:opacity 2s;';
      document.body.appendChild(crack);
      setTimeout(function(){crack.style.opacity='0';},1500);
      setTimeout(function(){crack.remove();},3500);
    },5000);
  } catch(e){} }

  if (v === 'kiwiafter') { try {
    document.addEventListener('scroll',function(){
      var after=document.createElement('div');
      after.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(139,154,70,0.02);pointer-events:none;z-index:9997;transition:opacity 3s;';
      document.body.appendChild(after);
      setTimeout(function(){after.style.opacity='0';},500);
      setTimeout(function(){after.remove();},3500);
    });
  } catch(e){} }

  if (v === 'kiwidream') { try {
    setInterval(function(){
      document.querySelector('.main-content').style.filter='blur('+(Math.random()*2)+'px)';
      setTimeout(function(){document.querySelector('.main-content').style.filter='';},1000);
    },8000);
  } catch(e){} }

  if (v === 'kiwieater') { try {
    setInterval(function(){
      var links=document.querySelectorAll('.main-content a');
      var l=links[Math.floor(Math.random()*links.length)];
      if(l) l.textContent='???';
    },5000);
  } catch(e){} }

  if (v === 'kiwitime') { try {
    setInterval(function(){
      var overlay=document.createElement('div');
      overlay.textContent='déjà vu...';
      overlay.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:"t26-carbon",monospace;font-style:italic;font-size:24px;color:orangered;opacity:0;pointer-events:none;z-index:9999;transition:opacity 1s;';
      document.body.appendChild(overlay);
      setTimeout(function(){overlay.style.opacity='0.15';},50);
      setTimeout(function(){overlay.style.opacity='0';},2000);
      setTimeout(function(){overlay.remove();},3500);
    },12000);
  } catch(e){} }

  if (v === 'kiwicut') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p&&p.textContent.length>30){
        var cut=Math.floor(p.textContent.length*0.4);
        p.textContent=p.textContent.substring(0,cut)+'...';
      }
    },10000);
  } catch(e){} }

  if (v === 'kiwirust') { try {
    setInterval(function(){
      var els=document.querySelectorAll('.main-content table td,.main-content table th');
      var el=els[Math.floor(Math.random()*els.length)];
      if(el) el.style.color='#8B6914';
    },3000);
  } catch(e){} }

  if (v === 'kiwiroot') { try {
    setInterval(function(){
      var line=document.createElement('div');
      var startX=Math.random()*100,startY=Math.random()*100;
      line.style.cssText='position:fixed;background:#8B6914;opacity:0.08;z-index:9997;pointer-events:none;width:2px;height:'+Math.random()*20+'%;left:'+startX+'%;top:'+startY+'%;transform:rotate('+(Math.random()*60-30)+'deg);transition:height 5s;';
      document.body.appendChild(line);
      setTimeout(function(){line.style.height=Math.random()*40+'%';},100);
    },2000);
  } catch(e){} }

  if (v === 'kiwiroom') { try {
    setInterval(function(){
      var sounds=['...echo...','...echo...echo...','🔊','...🥝...'];
      var s=document.createElement('div');
      s.textContent=sounds[Math.floor(Math.random()*sounds.length)];
      s.style.cssText='position:fixed;font-family:"t26-carbon",monospace;font-style:italic;color:orangered;opacity:0.15;font-size:14px;pointer-events:none;z-index:9999;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:opacity 3s;';
      document.body.appendChild(s);
      setTimeout(function(){s.style.opacity='0';},2000);
      setTimeout(function(){s.remove();},5000);
    },4000);
  } catch(e){} }

  if (v === 'kiwispace') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li,.main-content td');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){p.style.transition='opacity 3s';p.style.opacity=Math.max(parseFloat(p.style.opacity||1)-0.15,0);}
    },4000);
  } catch(e){} }

  if (v === 'kiwiloop') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p');
      if(ps.length>4){
        var a=Math.floor(Math.random()*ps.length);
        var b=Math.floor(Math.random()*ps.length);
        if(a!==b){var tmp=ps[a].innerHTML;ps[a].innerHTML=ps[b].innerHTML;ps[b].innerHTML=tmp;}
      }
    },12000);
  } catch(e){} }

  if (v === 'kiwishade') { try {
    document.addEventListener('click',function(e){
      var ghost=document.createElement('div');
      ghost.textContent='👻';
      ghost.style.cssText='position:fixed;font-size:20px;opacity:0.3;pointer-events:none;z-index:9999;left:'+(e.clientX||e.pageX)+'px;top:'+(e.clientY||e.pageY)+'px;transition:all 1s;';
      document.body.appendChild(ghost);
      setTimeout(function(){ghost.style.opacity='0';ghost.style.transform='translateY(-30px)';},100);
      setTimeout(function(){ghost.remove();},1500);
    });
  } catch(e){} }

  if (v === 'kiwihowl') { try {
    setInterval(function(){
      var howl=document.createElement('div');
      howl.textContent='~🥝~';
      howl.style.cssText='position:fixed;font-size:18px;color:orangered;opacity:0;pointer-events:none;z-index:9999;left:'+Math.random()*80+'%;top:'+Math.random()*80+'%;transition:all 2s;';
      document.body.appendChild(howl);
      setTimeout(function(){howl.style.opacity='0.3';howl.style.transform='scale(1.5)';},50);
      setTimeout(function(){howl.style.opacity='0';},2000);
      setTimeout(function(){howl.remove();},4000);
    },5000);
  } catch(e){} }

  if (v === 'kiwivoid') { try {
    setInterval(function(){
      var ps=document.querySelectorAll('.main-content p,.main-content li');
      var p=ps[Math.floor(Math.random()*ps.length)];
      if(p){
        p.style.transition='all 2s';
        p.style.transform='scale(0.95)';
        p.style.opacity='0';
        setTimeout(function(){p.style.height='0';p.style.margin='0';p.style.padding='0';p.style.overflow='hidden';},2000);
      }
    },6000);
  } catch(e){} }

});
