---
title: "직접접근 / Direct Access"
parent: "개념 / Concepts"
nav_order: 9
---

{% include lang_toggle.html %}

<a href="/kiwiki/" class="home-link">⌂</a>

<div class="ko" markdown="1">

| 항목 | 값 |
|------|-----|
| 분류 | <span class="pill pill-vector">전파 경로</span> |
| 한국어 | 직접접근 |
| 감염 방식 | 버려지거나 잊혀진 페이지에 URL 직접 입력 |
| 알려진 바이러스 | 6종 |
| 특이사항 | 최저 감염 건수, 최고 평균 심각도 |

</div>

<div class="en" markdown="1">

| Key | Value |
|-----|-------|
| Category | <span class="pill pill-vector">Vector</span> |
| Korean | 직접접근 |
| Infection Method | Directly entering URLs to abandoned or forgotten pages |
| Known Viruses | 6 |
| Notable Feature | Lowest infection count, highest average severity |

</div>

<div class="ja" markdown="1">

| 項目 | 値 |
|------|-----|
| 分類 | <span class="pill pill-vector">伝播経路</span> |
| 韓国語 | 직접접근 |
| 感染方式 | 放棄または忘れられたページにURL直接入力 |
| 既知のウイルス | 6種 |
| 特記事項 | 最低感染件数、最高平均重症度 |

</div>

## 개요
{: .ko}

## Overview
{: .en}

## 概要
{: .ja}

Direct Access is the rarest infection vector, but it consistently produces the most severe outcomes. Direct Access-vector viruses reside on abandoned, forgotten, or intentionally hidden web pages that cannot be found through normal browsing. They do not appear in [Search Engine](search-engine.md) results. They are not shared on [SNS](sns.md). They are not sent via [Email](email.md) or [Messenger](messenger.md). To encounter them, you must **type the URL directly into your browser** -- navigating to a page that you somehow already know exists. This requirement for active seeking is what keeps infection counts low. But the pages that host Direct Access viruses tend to be deeply contaminated, long-festering sources of [Boundary Collapse](boundary-collapse.md), which is why the viruses they harbor are disproportionately severe. The average severity of Direct Access viruses is the highest among all five vectors.
{: .en}

직접접근은 가장 드문 감염 경로이지만, 가장 심각한 결과를 일관되게 생산한다. 직접접근 경로 바이러스는 정상적인 탐색으로는 찾을 수 없는 버려진, 잊혀진, 또는 의도적으로 숨겨진 웹페이지에 존재한다. [검색엔진](search-engine.md) 결과에 나타나지 않는다. [SNS](sns.md)에서 공유되지 않는다. [이메일](email.md)이나 [메신저](messenger.md)로 전송되지 않는다. 이들을 만나려면 **브라우저에 URL을 직접 입력**해야 한다 -- 이미 존재함을 어떻게든 아는 페이지로 이동하는 것이다. 능동적 탐색이라는 요건이 감염 건수를 낮게 유지하는 이유다. 그러나 직접접근 바이러스를 호스팅하는 페이지는 깊이 오염된, 오래 곪아온 [경계 무너짐](boundary-collapse.md)의 원천인 경향이 있어, 이들이 품은 바이러스가 불균형적으로 심각한 이유다. 직접접근 바이러스의 평균 심각도는 5개 경로 중 가장 높다.
{: .ko}

直接アクセスは最も稀な感染経路だが、一貫して最も深刻な結果を生み出す。直接アクセス経路ウイルスは、通常のブラウジングでは見つけられない放棄された、忘れられた、あるいは意図的に隠されたウェブページに存在する。[検索エンジン](search-engine.md)の結果には表示されない。[SNS](sns.md)で共有されない。[メール](email.md)や[メッセンジャー](messenger.md)で送信されない。遭遇するには、**ブラウザにURLを直接入力**しなければならない――何らかの形ですでに存在を知っているページへ移動するのだ。能動的な探索という要件が感染件数を低く保つ理由である。しかし直接アクセスウイルスをホストするページは、深く汚染された長期間醸成された[境界崩壊](boundary-collapse.md)の源泉である傾向があり、そのため宿すウイルスは不均衡に深刻となる。直接アクセスウイルスの平均重症度は5つの経路の中で最も高い。
{: .ja}

## 발견의 역설
{: .ko}

## The Paradox of Discovery
{: .en}

## 発見のパラドックス
{: .ja}

How do people find pages that cannot be found? This is the central paradox of Direct Access infection. Documented cases reveal several pathways:

1. **Urban legends and rumors** -- Someone mentions a URL in a forum post, a comment, a conversation. The URL circulates as a dare or curiosity. Most people forget it. A few type it in.
2. **Random URL entry** -- Statistically improbable but documented. Some victims report entering URLs "on a whim" or "because the address just came to them." Whether this represents genuine coincidence or an unknown influence mechanism is debated.
3. **Automated discovery** -- Scripts and bots that scan URL ranges have accidentally accessed contaminated pages, infecting the operators who review the results.
4. **Breadcrumbs from other viruses** -- In several cases, victims of [Cognitive-type](cognitive.md) viruses have reported compulsive urges to visit specific URLs. This suggests that some viruses may function as vectors *for other viruses*, deliberately driving victims toward Direct Access pages.
{: .en}

찾을 수 없는 페이지를 어떻게 찾는가? 이것이 직접접근 감염의 핵심 역설이다. 문서화된 사례는 여러 경로를 보여준다:

1. **도시 전설과 소문** -- 누군가 포럼 게시물, 댓글, 대화에서 URL을 언급한다. URL은 도전이나 호기심으로 순환한다. 대부분 잊어버린다. 몇 명이 입력한다.
2. **무작위 URL 입력** -- 통계적으로 있을 법하지 않지만 기록되었다. 일부 감염자는 "충동적으로" 또는 "주소가 그냥 떠올라서" URL을 입력했다고 보고한다. 이것이 진정한 우연인지 알려지지 않은 영향 메커니즘인지는 논쟁 중이다.
3. **자동화된 발견** -- URL 범위를 스캔하는 스크립트와 봇이 실수로 오염된 페이지에 접근하여, 결과를 검토한 운영자를 감염시켰다.
4. **다른 바이러스의 빵부스러기** -- 여러 사례에서 [인지형](cognitive.md) 바이러스 감염자가 특정 URL을 방문하려는 강박적 충동을 보고했다. 이는 일부 바이러스가 *다른 바이러스를 위한* 경로로 기능하여, 감염자를 직접접근 페이지로 의도적으로 유도할 수 있음을 시사한다.
{: .ko}

見つけられないページをどうやって見つけるのか？これが直接アクセス感染の核心的パラドックスである。記録された事例はいくつかの経路を明らかにしている：

1. **都市伝説と噂** ── 誰かがフォーラムの投稿、コメント、会話でURLを言及する。URLは挑戦や好奇心として流通する。ほとんどの人は忘れる。数人が入力する。
2. **ランダムなURL入力** ── 統計的にはありそうにないが記録されている。一部の感染者は「衝動的に」あるいは「アドレスがただ浮かんだから」URLを入力したと報告している。これが真の偶然か未知の影響メカニズムかは議論中である。
3. **自動化された発見** ── URL範囲をスキャンするスクリプトやボットが偶然汚染ページにアクセスし、結果を確認したオペレーターを感染させた。
4. **他のウイルスからのパンくず** ── 複数の事例で、[認知型](cognitive.md)ウイルスの感染者が特定のURLを訪問する強迫的衝動を報告している。これは一部のウイルスが*他のウイルスのための*経路として機能し、感染者を直接アクセスページへ意図的に誘導している可能性を示唆する。
{: .ja}

## 알려진 직접접근 경로 바이러스
{: .ko}

## Known Direct Access-vector Viruses
{: .en}

## 既知の直接アクセス経路ウイルス
{: .ja}

<div class="en" markdown="1">

| Virus | Type | Severity | Page Type |
|-------|------|----------|-----------|
| [GlitchMoss](/kiwiki/viruses/glitchmoss.md) | <span class="pill pill-type">Environmental</span> | <span class="pill pill-severity-critical">Critical</span> | Abandoned geocities-era page |
| [SyntaxWraith](/kiwiki/viruses/syntaxwraith.md) | <span class="pill pill-type">Logic</span> | <span class="pill pill-severity-moderate">Moderate</span> | Defunct programming tutorial |
| [ChromaDrift](/kiwiki/viruses/chromadrift.md) | <span class="pill pill-type">Sensory</span> | <span class="pill pill-severity-high">High</span> | Dead art portfolio |
| [ParadoxFeed](/kiwiki/viruses/paradoxfeed.md) | <span class="pill pill-type">Logic</span> | <span class="pill pill-severity-high">High</span> | Self-contradicting FAQ page |
| [NameEater](/kiwiki/viruses/nameeater.md) | <span class="pill pill-type">Cognitive</span> | <span class="pill pill-severity-high">High</span> | Forgotten name registry |
| [WireRoot](/kiwiki/viruses/wireroot.md) | <span class="pill pill-type">Environmental</span> | <span class="pill pill-severity-critical">Critical</span> | Abandoned smart-home documentation |

</div>

<div class="ko" markdown="1">

| 바이러스 | 유형 | 심각도 | 페이지 유형 |
|----------|------|--------|-------------|
| [글리치모스](/kiwiki/viruses/glitchmoss.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-critical">치명적</span> | 버려진 지오시티 시대 페이지 |
| [신택스레이스](/kiwiki/viruses/syntaxwraith.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-moderate">보통</span> | 폐기된 프로그래밍 튜토리얼 |
| [크로마드리프트](/kiwiki/viruses/chromadrift.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-high">높음</span> | 죽은 아트 포트폴리오 |
| [패러독스피드](/kiwiki/viruses/paradoxfeed.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-high">높음</span> | 자기 모순적 FAQ 페이지 |
| [네임이터](/kiwiki/viruses/nameeater.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-high">높음</span> | 잊혀진 이름 등록소 |
| [와이어루트](/kiwiki/viruses/wireroot.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-critical">치명적</span> | 버려진 스마트홈 문서 |

</div>

<div class="ja" markdown="1">

| ウイルス | タイプ | 重症度 | ページタイプ |
|----------|--------|--------|-------------|
| [グリッチモス](/kiwiki/viruses/glitchmoss.md) | <span class="pill pill-type">環境型</span> | <span class="pill pill-severity-critical">致命的</span> | 放棄されたジオシティ時代のページ |
| [シンタックスレイス](/kiwiki/viruses/syntaxwraith.md) | <span class="pill pill-type">ロジック型</span> | <span class="pill pill-severity-moderate">中</span> | 廃止されたプログラミングチュートリアル |
| [クロマドリフト](/kiwiki/viruses/chromadrift.md) | <span class="pill pill-type">感覚型</span> | <span class="pill pill-severity-high">高</span> | 死んだアートポートフォリオ |
| [パラドックスフィード](/kiwiki/viruses/paradoxfeed.md) | <span class="pill pill-type">ロジック型</span> | <span class="pill pill-severity-high">高</span> | 自己矛盾するFAQページ |
| [ネームイーター](/kiwiki/viruses/nameeater.md) | <span class="pill pill-type">認知型</span> | <span class="pill pill-severity-high">高</span> | 忘れられた名前登録所 |
| [ワイヤールート](/kiwiki/viruses/wireroot.md) | <span class="pill pill-type">環境型</span> | <span class="pill pill-severity-critical">致命的</span> | 放棄されたスマートホーム文書 |

</div>

## 심각도 분포
{: .ko}

## Severity Distribution
{: .en}

## 重症度分布
{: .ja}

Direct Access has a dramatically skewed severity distribution compared to other vectors:

- **Critical:** 2 viruses (GlitchMoss, WireRoot)
- **High:** 3 viruses (ChromaDrift, ParadoxFeed, NameEater)
- **Moderate:** 1 virus (SyntaxWraith)
- **Low:** 0 viruses

No other vector has zero low-severity viruses. The theory is that Direct Access pages have had years -- sometimes decades -- to accumulate and concentrate viral payload without any traffic to dilute it. When a visitor finally arrives, they receive a concentrated dose that other vectors, with their constant stream of traffic, cannot match.
{: .en}

직접접근은 다른 경로에 비해 극적으로 편중된 심각도 분포를 보인다:

- **치명적:** 2종 (글리치모스, 와이어루트)
- **높음:** 3종 (크로마드리프트, 패러독스피드, 네임이터)
- **보통:** 1종 (신택스레이스)
- **낮음:** 0종

다른 어떤 경로도 낮은 심각도 바이러스가 0종인 경우는 없다. 이론상 직접접근 페이지는 트래픽 없이 바이러스 페이로드를 축적하고 농축할 수 있는 수년 -- 때로는 수십 년 -- 의 시간을 가졌다. 방문자가 마침내 도착하면, 끊임없는 트래픽 흐름이 있는 다른 경로로는 불가능한 농축된 용량을 받게 된다.
{: .ko}

直接アクセスは他の経路と比較して劇的に偏った重症度分布を示す：

- **致命的：** 2種（グリッチモス、ワイヤールート）
- **高：** 3種（クロマドリフト、パラドックスフィード、ネームイーター）
- **中：** 1種（シンタックスレイス）
- **低：** 0種

他のどの経路も低重症度ウイルスが0種というケースはない。理論上、直接アクセスページはトラフィックなしにウイルスペイロードを蓄積・濃縮する数年間――時には数十年間――を持っている。訪問者がようやく到着すると、絶え間ないトラフィックの流れがある他の経路では不可能な濃縮された量を受け取ることになる。
{: .ja}

## 관련 개념
{: .ko}

## Related Concepts
{: .en}

## 関連概念
{: .ja}

- [Search Engine](search-engine.md) -- search engines cannot index Direct Access pages; the two vectors are mutually exclusive
- [Boundary Collapse](boundary-collapse.md) -- Direct Access pages represent the most advanced stage of web-side boundary collapse
- [Irreversible Transformation](irreversible.md) -- 2 of 6 Direct Access viruses are irreversible (highest ratio)
- [Environmental Type](environmental.md) -- 2 of 6 Direct Access viruses are Environmental-type
{: .en}

- [검색엔진](search-engine.md) -- 검색엔진은 직접접근 페이지를 색인할 수 없음; 두 경로는 상호 배타적
- [경계 무너짐](boundary-collapse.md) -- 직접접근 페이지는 웹 측 경계 무너짐의 가장 진행된 단계
- [비가역적 변형](irreversible.md) -- 6종 중 2종이 비가역적 (최고 비율)
- [환경형](environmental.md) -- 6종 중 2종이 환경형
{: .ko}

- [検索エンジン](search-engine.md) -- 検索エンジンは直接アクセスページを索引できない；2つの経路は相互排他的
- [境界崩壊](boundary-collapse.md) -- 直接アクセスページはウェブ側の境界崩壊の最も進行した段階
- [不可逆的変形](irreversible.md) -- 6種中2種が不可逆的（最高比率）
- [環境型](environmental.md) -- 6種中2種が環境型
{: .ja}
