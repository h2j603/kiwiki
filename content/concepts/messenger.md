---
title: "메신저 / Messenger"
parent: "개념 / Concepts"
nav_order: 6
---

{% include lang_toggle.html %}

<a href="/kiwiki/" class="home-link">⌂</a>


| Key | Value |
|-----|-------|
| Category | <span class="pill pill-vector">전파 경로 / Vector</span> |
| Korean | 메신저 |
| Infection Method | Messaging apps, voice messages, group chats |
| Known Viruses | 7 |
| Notable Feature | Can spread through deleted or empty messages |

## Overview

Messenger-vector viruses spread through messaging applications -- private chats, group chats, voice messages, and even read receipts. What makes this vector uniquely unsettling is that many Messenger-vector viruses exploit the **negative space** of communication: deleted messages, empty messages, read indicators on messages that were never sent. [KiWhisper](/kiwiki/viruses/kiwhisper.md) -- the first documented Web Kiwi Virus -- spreads through empty messages with no content and no sender. [KiwiSpace](/kiwiki/viruses/kiwispace.md) transmits through messages that the recipient has no memory of receiving, yet the read receipt shows they opened them. This exploitation of absence makes Messenger-vector viruses particularly difficult to trace and contain. You cannot quarantine a message that doesn't exist.
{: .en}

메신저 경로 바이러스는 메시징 앱을 통해 확산된다 -- 개인 채팅, 그룹 채팅, 음성 메시지, 심지어 읽음 확인까지. 이 경로를 특히 불안하게 만드는 것은 많은 메신저 경로 바이러스가 커뮤니케이션의 **빈 공간**을 악용한다는 점이다: 삭제된 메시지, 빈 메시지, 전송된 적 없는 메시지에 대한 읽음 표시. [키위스퍼](/kiwiki/viruses/kiwhisper.md) -- 최초로 기록된 웹키위바이러스 -- 는 내용도 발신자도 없는 빈 메시지를 통해 확산된다. [키위스페이스](/kiwiki/viruses/kiwispace.md)는 수신자가 받은 기억이 없는 메시지를 통해 전파되지만, 읽음 확인은 그들이 열었음을 보여준다. 이러한 부재의 악용은 메신저 경로 바이러스를 추적하고 격리하기 특히 어렵게 만든다. 존재하지 않는 메시지를 격리할 수는 없다.
{: .ko}

メッセンジャー経路ウイルスはメッセージングアプリを通じて拡散する――個人チャット、グループチャット、ボイスメッセージ、さらには既読確認まで。この経路を特に不気味にするのは、多くのメッセンジャー経路ウイルスがコミュニケーションの**空白**を悪用することだ：削除されたメッセージ、空のメッセージ、送信されたことのないメッセージへの既読表示。[ヌルウィスパー](/kiwiki/viruses/kiwhisper.md)――最初に記録されたウェブキウイウイルス――は内容も送信者もない空のメッセージを通じて拡散する。[ヌルスペース](/kiwiki/viruses/kiwispace.md)は受信者が受け取った記憶のないメッセージを通じて伝播するが、既読確認は開封したことを示す。この不在の悪用により、メッセンジャー経路ウイルスは追跡と封じ込めが特に困難となる。存在しないメッセージを隔離することはできない。
{: .ja}

## Transmission Patterns

### Empty/Deleted Messages
The signature pattern of Messenger-vector viruses. [KiWhisper](/kiwiki/viruses/kiwhisper.md) pioneered this method: a message with no content, no sender attribution, and no timestamp appears in a chat. Merely having the chat open when the message arrives is sufficient for infection. The message subsequently vanishes from the log, leaving no evidence it ever existed.
{: .en}

메신저 경로 바이러스의 대표적 패턴이다. [키위스퍼](/kiwiki/viruses/kiwhisper.md)가 이 방법을 개척했다: 내용, 발신자 표기, 키위타임가 없는 메시지가 채팅에 나타난다. 메시지가 도착할 때 채팅을 열어놓은 것만으로도 감염에 충분하다. 이후 메시지는 기록에서 사라져 존재했다는 증거를 남기지 않는다.
{: .ko}

メッセンジャー経路ウイルスの代表的パターンである。[ヌルウィスパー](/kiwiki/viruses/kiwhisper.md)がこの方法を開拓した：内容、送信者表記、タイムスタンプのないメッセージがチャットに現れる。メッセージが到着した時にチャットを開いているだけで感染に十分である。その後メッセージはログから消え、存在した証拠を残さない。
{: .ja}

### Voice Messages
[KiwiHowl](/kiwiki/viruses/kiwihowl.md) spreads exclusively through voice messages. The infected audio contains frequencies that are imperceptible during playback but that activate the virus upon reaching the listener's auditory processing system. Even voice messages that appear to contain normal conversation carry the embedded signal.
{: .en}

[키위하울](/kiwiki/viruses/kiwihowl.md)는 음성 메시지를 통해서만 확산된다. 감염된 오디오에는 재생 중에는 감지할 수 없지만 청취자의 청각 처리 시스템에 도달하면 바이러스를 활성화하는 주파수가 포함되어 있다. 정상적인 대화를 담고 있는 것처럼 보이는 음성 메시지도 내장 신호를 전달한다.
{: .ko}

[ハウルリンク](/kiwiki/viruses/kiwihowl.md)はボイスメッセージを通じてのみ拡散する。感染した音声には再生中には感知できないが、聴取者の聴覚処理システムに到達するとウイルスを活性化する周波数が含まれている。通常の会話を含んでいるように見えるボイスメッセージも埋め込まれた信号を運ぶ。
{: .ja}

### Group Chat Dynamics
[KiwiLoop](/kiwiki/viruses/kiwiloop.md) and [KiwiClip](/kiwiki/viruses/kiwiclip.md) exploit group chat dynamics. KiwiLoop creates perceptual shortcuts in conversations -- the victim begins skipping messages, then sentences, then entire conversations, as their awareness develops "holes." KiwiClip modifies copied-and-pasted content within chats, subtly altering the meaning of shared information.
{: .en}

[키위루프](/kiwiki/viruses/kiwiloop.md)과 [키위클립](/kiwiki/viruses/kiwiclip.md)는 그룹 채팅 역학을 악용한다. 키위루프은 대화 중에 지각적 지름길을 만든다 -- 감염자가 메시지를 건너뛰기 시작하고, 다음엔 문장을, 다음엔 전체 대화를 건너뛰며 인식에 "구멍"이 생긴다. 키위클립는 채팅 내 복사-붙여넣기된 콘텐츠를 수정하여 공유 정보의 의미를 미묘하게 변형한다.
{: .ko}

[ループホール](/kiwiki/viruses/kiwiloop.md)と[クリップボード](/kiwiki/viruses/kiwiclip.md)はグループチャットの力学を悪用する。ループホールは会話中に知覚的ショートカットを作る――感染者はメッセージを飛ばし始め、次に文を、次に会話全体を飛ばすようになり、認識に「穴」が生じる。クリップボードはチャット内のコピー＆ペーストされたコンテンツを修正し、共有情報の意味を微妙に変容させる。
{: .ja}

## Known Messenger-vector Viruses

| Virus | Type | Severity | Messenger Mechanism |
|-------|------|----------|---------------------|
| [KiWhisper](/kiwiki/viruses/kiwhisper.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-high">높음</span> | Empty messages |
| [KiwiVein](/kiwiki/viruses/kiwivein.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-critical">치명적</span> | Cached message data |
| [KiwiHowl](/kiwiki/viruses/kiwihowl.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-high">높음</span> | Voice messages |
| [KiwiLoop](/kiwiki/viruses/kiwiloop.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-moderate">보통</span> | Group chat gaps |
| [KiwiClip](/kiwiki/viruses/kiwiclip.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-moderate">보통</span> | Pasted content |
| [KiwiSpace](/kiwiki/viruses/kiwispace.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-high">높음</span> | Unrecalled messages |
| [KiwiCut](/kiwiki/viruses/kiwicut.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-critical">치명적</span> | Conversation threads |

## The Absence Problem

Messenger-vector viruses present a unique challenge to documentation and research: many of them leave no trace. An [Email](email.md) can be preserved. An [SNS](sns.md) post can be screenshotted. A [Search Engine](search-engine.md) result can be cached. But a deleted message is gone. An empty message that vanishes from logs cannot be studied. This has led some researchers to theorize that the actual infection rate for Messenger-vector viruses may be significantly higher than documented, because many infections simply cannot be traced back to their source. The absence of evidence is, in this case, not evidence of absence -- it is a feature of the vector itself.
{: .en}

메신저 경로 바이러스는 문서화와 연구에 독특한 도전을 제시한다: 그 중 다수가 흔적을 남기지 않는다. [이메일](email.md)은 보존할 수 있다. [SNS](sns.md) 게시물은 스크린샷을 찍을 수 있다. [검색엔진](search-engine.md) 결과는 캐시할 수 있다. 그러나 삭제된 메시지는 사라진다. 기록에서 사라지는 빈 메시지는 연구할 수 없다. 이 때문에 일부 연구자들은 메신저 경로 바이러스의 실제 감염률이 많은 감염의 출처를 추적할 수 없기 때문에 문서화된 것보다 상당히 높을 수 있다고 이론화한다. 증거의 부재가 이 경우에는 부재의 증거가 아니다 -- 그것은 경로 자체의 특징이다.
{: .ko}

メッセンジャー経路ウイルスは文書化と研究に独特の課題を提示する：その多くが痕跡を残さない。[メール](email.md)は保存できる。[SNS](sns.md)投稿はスクリーンショットできる。[検索エンジン](search-engine.md)の結果はキャッシュできる。しかし削除されたメッセージは消える。ログから消える空のメッセージは研究できない。このため一部の研究者は、メッセンジャー経路ウイルスの実際の感染率は、多くの感染の出所を追跡できないため、記録されているよりかなり高い可能性があると理論化している。証拠の不在はこの場合、不在の証拠ではない――それは経路そのものの特徴なのだ。
{: .ja}

## Related Concepts

- [SNS](sns.md) -- highest volume vector; some viruses spread through both SNS and messenger
- [Boundary Collapse](boundary-collapse.md) -- messenger collapse often begins with phantom notifications in reality
- [Co-infection](co-infection.md) -- KiWhisper + KiwiCut messenger co-infection is documented
- [Manifestation](manifestation.md) -- messenger viruses often manifest as auditory or perceptual symptoms first
