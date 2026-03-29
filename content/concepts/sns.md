---
title: "SNS / Social Media"
parent: "개념 / Concepts"
nav_order: 5
---

{% include lang_toggle.html %}

<a href="/kiwiki/" class="home-link"><span class="en">Web Kiwi Virus Wiki</span><span class="ko">웹키위바이러스 위키</span><span class="ja">ウェブキウイウイルス ウィキ</span></a>


| Key | Value |
|-----|-------|
| Category | <span class="pill pill-vector">전파 경로 / Vector</span> |
| Korean | SNS (소셜 미디어) |
| Infection Method | Feeds, posts, images, stories, live streams |
| Known Viruses | 8 |
| Infection Volume | Highest of all vectors |

## Overview

SNS (Social Networking Services) is the most prolific infection vector for Web Kiwi Viruses, accounting for the largest number of documented infections across all types. The reason is simple: social media is designed to maximize engagement, exposure, and sharing -- the exact same properties that allow viruses to spread. Every scroll, every liked post, every shared image is a potential transmission event. SNS-vector viruses exploit the fundamental architecture of social platforms: algorithmic feeds that surface content based on engagement, infinite scroll mechanisms, image-heavy interfaces, and the social pressure to view and interact with shared content. The victim does not need to click a suspicious link or download an attachment. They simply need to *see* the infected content in their feed.
{: .en}

SNS(소셜 네트워킹 서비스)는 웹키위바이러스의 가장 왕성한 전파 경로로, 모든 유형에 걸쳐 가장 많은 문서화된 감염을 차지한다. 이유는 단순하다: 소셜 미디어는 참여, 노출, 공유를 극대화하도록 설계되었으며 -- 이는 바이러스가 확산하는 데 필요한 것과 정확히 같은 특성이다. 스크롤 하나, 좋아요 하나, 공유된 이미지 하나가 모두 잠재적 전파 이벤트다. SNS 경로 바이러스는 소셜 플랫폼의 근본 구조를 악용한다: 참여 기반으로 콘텐츠를 노출하는 알고리즘 피드, 무한 스크롤 메커니즘, 이미지 중심 인터페이스, 공유된 콘텐츠를 보고 상호작용해야 한다는 사회적 압력. 감염자는 의심스러운 링크를 클릭하거나 첨부 파일을 다운로드할 필요가 없다. 피드에서 감염된 콘텐츠를 *보기만* 하면 된다.
{: .ko}

SNS（ソーシャル・ネットワーキング・サービス）はウェブキウイウイルスの最も活発な伝播経路であり、すべての類型にわたって最多の記録された感染を占める。理由は単純だ：ソーシャルメディアはエンゲージメント、露出、共有を最大化するよう設計されている――ウイルスの拡散に必要なのと全く同じ特性だ。スクロール1回、いいね1つ、共有された画像1枚が、すべて潜在的な伝播イベントとなる。SNS経路ウイルスはソーシャルプラットフォームの基本構造を悪用する：エンゲージメントに基づくアルゴリズムフィード、無限スクロール機構、画像中心のインターフェース、共有コンテンツを閲覧・交流すべきという社会的圧力。感染者は怪しいリンクをクリックしたり添付ファイルをダウンロードする必要はない。フィード上の感染コンテンツを*見る*だけでよい。
{: .ja}

## Transmission Mechanisms

SNS-vector viruses use several distinct transmission mechanisms:

**Feed Contamination** -- The most common method. Infected content appears in the victim's algorithmic feed indistinguishable from normal posts. [KiwiMirror](/kiwiki/viruses/kiwimirror.md) spreads through profile images that subtly display the viewer's own face. [KiwiBloom](/kiwiki/viruses/kiwibloom.md) embeds in images that appear to have minor compression artifacts.

**Story/Ephemeral Content** -- Some viruses specifically target disappearing content formats. [KiwiDream](/kiwiki/viruses/kiwidream.md) attaches to stories and ephemeral posts, exploiting the format's transient nature to avoid documentation and study.

**Engagement Cascades** -- [KiwiBleed](/kiwiki/viruses/kiwibleed.md) spreads through comment sections, where infected text propagates as users read and reply. The virus benefits from engagement: the more people argue in a thread, the more are exposed.

**Live Streams** -- [KiwiRoom](/kiwiki/viruses/kiwiroom.md) has been documented spreading through live broadcast audio, where the acoustic anomalies of contaminated spaces transmit through real-time streaming.
{: .en}

SNS 경로 바이러스는 여러 가지 전파 메커니즘을 사용한다:

**피드 오염** -- 가장 흔한 방법. 감염된 콘텐츠가 일반 게시물과 구별할 수 없는 형태로 감염자의 알고리즘 피드에 나타난다. [키위미러](/kiwiki/viruses/kiwimirror.md)는 감염자 자신의 얼굴을 미묘하게 보여주는 프로필 사진을 통해 확산된다. [키위블룸](/kiwiki/viruses/kiwibloom.md)은 경미한 압축 아티팩트로 보이는 이미지에 내장된다.

**스토리/휘발성 콘텐츠** -- 일부 바이러스는 사라지는 콘텐츠 형식을 특별히 표적으로 삼는다. [키위드림](/kiwiki/viruses/kiwidream.md)는 스토리와 임시 게시물에 부착되어, 문서화와 연구를 피하기 위해 형식의 일시적 특성을 악용한다.

**참여 연쇄** -- [키위블리드](/kiwiki/viruses/kiwibleed.md)는 댓글 섹션을 통해 확산되며, 감염된 텍스트가 사용자들이 읽고 답글을 달면서 전파된다. 바이러스는 참여로부터 이익을 얻는다: 스레드에서 더 많은 사람이 논쟁할수록 더 많이 노출된다.

**라이브 스트리밍** -- [키위룸](/kiwiki/viruses/kiwiroom.md)은 실시간 방송 오디오를 통해 확산되는 것이 기록되었으며, 오염된 공간의 음향 이상이 실시간 스트리밍을 통해 전송된다.
{: .ko}

SNS経路ウイルスはいくつかの異なる伝播メカニズムを使用する：

**フィード汚染** ── 最も一般的な方法。感染コンテンツが通常の投稿と区別できない形で感染者のアルゴリズムフィードに表示される。[キウイミラー](/kiwiki/viruses/kiwimirror.md)は閲覧者自身の顔を微かに映し出すプロフィール画像を通じて拡散する。[キウイブルーム](/kiwiki/viruses/kiwibloom.md)は軽微な圧縮アーティファクトに見える画像に埋め込まれる。

**ストーリー/一時コンテンツ** ── 一部のウイルスは消えるコンテンツ形式を特に標的とする。[キウイドリーム](/kiwiki/viruses/kiwidream.md)はストーリーや一時投稿に付着し、文書化と研究を避けるためにフォーマットの一時的性質を悪用する。

**エンゲージメント連鎖** ── [キウイブリード](/kiwiki/viruses/kiwibleed.md)はコメントセクションを通じて拡散し、ユーザーが読んで返信するにつれて感染テキストが伝播する。ウイルスはエンゲージメントから利益を得る：スレッドで議論する人が多いほど、より多くが曝露される。

**ライブ配信** ── [キウイルーム](/kiwiki/viruses/kiwiroom.md)はリアルタイム配信音声を通じて拡散することが記録されており、汚染空間の音響異常がリアルタイムストリーミングを通じて伝送される。
{: .ja}

## Known SNS-vector Viruses

| Virus | Type | Severity | SNS Mechanism |
|-------|------|----------|---------------|
| [KiwiMirror](/kiwiki/viruses/kiwimirror.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-high">높음</span> | Profile images |
| [KiwiScroll](/kiwiki/viruses/kiwiscroll.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-high">높음</span> | Infinite scroll |
| [KiwiTab](/kiwiki/viruses/kiwitab.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-moderate">보통</span> | Feed browsing |
| [KiwiBloom](/kiwiki/viruses/kiwibloom.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-high">높음</span> | Image posts |
| [KiwiBleed](/kiwiki/viruses/kiwibleed.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-high">높음</span> | Comment threads |
| [KiwiTouch](/kiwiki/viruses/kiwitouch.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-moderate">보통</span> | Shared media |
| [KiwiDream](/kiwiki/viruses/kiwidream.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-moderate">보통</span> | Stories/ephemeral |
| [KiwiRoom](/kiwiki/viruses/kiwiroom.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-moderate">보통</span> | Live streams |

## Why SNS Has the Highest Infection Count

Three structural factors make SNS the dominant infection vector:

1. **Scale** -- Billions of daily active users across platforms. A single infected post can reach thousands before detection.
2. **Passive consumption** -- Unlike [Email](email.md) (which requires opening) or [Direct Access](direct-access.md) (which requires intentional navigation), SNS content is served automatically. Infection is passive.
3. **Algorithmic amplification** -- If infected content generates engagement (which it often does, because anomalous content attracts attention), the algorithm promotes it further. The virus weaponizes the platform's own distribution system.
{: .en}

세 가지 구조적 요인이 SNS를 지배적인 감염 경로로 만든다:

1. **규모** -- 플랫폼 전반에 걸쳐 수십억 명의 일일 활성 사용자. 단일 감염 게시물이 탐지 전에 수천 명에게 도달할 수 있다.
2. **수동적 소비** -- (열어야 하는) [이메일](email.md)이나 (의도적 탐색이 필요한) [직접접근](direct-access.md)과 달리, SNS 콘텐츠는 자동으로 제공된다. 감염은 수동적이다.
3. **알고리즘 증폭** -- 감염된 콘텐츠가 참여를 생성하면(이상한 콘텐츠가 주목을 끌기 때문에 종종 그러함), 알고리즘이 이를 더 홍보한다. 바이러스가 플랫폼 자체의 배포 시스템을 무기화하는 것이다.
{: .ko}

3つの構造的要因がSNSを支配的な感染経路にしている：

1. **規模** ── プラットフォーム全体で毎日数十億のアクティブユーザー。単一の感染投稿が検出前に数千人に到達しうる。
2. **受動的消費** ──（開く必要がある）[メール](email.md)や（意図的なナビゲーションが必要な）[直接アクセス](direct-access.md)とは異なり、SNSコンテンツは自動的に配信される。感染は受動的である。
3. **アルゴリズム増幅** ── 感染コンテンツがエンゲージメントを生み出すと（異常なコンテンツは注目を集めるため、しばしばそうなる）、アルゴリズムがさらに促進する。ウイルスがプラットフォーム自体の配信システムを武器化するのだ。
{: .ja}

## Related Concepts

- [Messenger](messenger.md) -- second most common vector; some viruses use both SNS and messenger
- [Boundary Collapse](boundary-collapse.md) -- SNS accelerates collapse through repeated exposure
- [Co-infection](co-infection.md) -- high SNS exposure increases risk of multiple simultaneous infections
- [Manifestation](manifestation.md) -- SNS-vector viruses often have web-first manifestation before crossing to reality
