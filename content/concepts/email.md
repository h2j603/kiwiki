---
title: "이메일 / Email"
parent: "개념 / Concepts"
nav_order: 8
---

| Key | Value |
|-----|-------|
| Category | <span class="pill pill-vector">전파 경로 / Vector</span> |
| Korean | 이메일 |
| Infection Method | Attachments, body text, bounce notifications, headers |
| Known Viruses | 5 |
| Notable Feature | Enables targeted, individual attacks |

## Overview

Email is the fourth most common infection vector by volume, but it is unique in one critical respect: it is the only vector that reliably enables **targeted attacks**. [SNS](sns.md) viruses spread broadly and indiscriminately. [Search Engine](search-engine.md) viruses infect whoever searches for the right terms. But Email-vector viruses can be directed at a specific individual, sent to their personal inbox, crafted to exploit their specific patterns of behavior. This makes Email-vector viruses the preferred tool for what researchers have termed "precision infections" -- cases where a specific person appears to have been deliberately targeted. [VoidMail](../viruses/voidmail.md), the most dangerous Email-vector virus, has shown patterns consistent with intentional targeting, though the question of *who or what* is doing the targeting remains unanswered.
{: .en}

이메일은 발생 건수 기준 네 번째로 흔한 감염 경로이지만, 한 가지 결정적 측면에서 독특하다: **표적 공격**을 안정적으로 가능하게 하는 유일한 경로라는 점이다. [SNS](sns.md) 바이러스는 광범위하고 무차별적으로 확산된다. [검색엔진](search-engine.md) 바이러스는 적절한 검색어를 입력한 누구든 감염시킨다. 그러나 이메일 경로 바이러스는 특정 개인을 겨냥하여 개인 받은편지함으로 보내지며, 그들의 특정 행동 패턴을 악용하도록 제작될 수 있다. 이 때문에 이메일 경로 바이러스는 연구자들이 "정밀 감염"이라 부르는 것의 선호 도구가 된다 -- 특정인이 의도적으로 표적이 된 것으로 보이는 사례들. 가장 위험한 이메일 경로 바이러스인 [보이드메일](../viruses/voidmail.md)은 의도적 표적화와 일치하는 패턴을 보여왔지만, *누가 또는 무엇이* 표적을 정하는지에 대한 질문은 미해결로 남아 있다.
{: .ko}

メールは発生件数基準で4番目に一般的な感染経路だが、1つの決定的な側面で独特である：**標的型攻撃**を確実に可能にする唯一の経路であることだ。[SNS](sns.md)ウイルスは広範かつ無差別に拡散する。[検索エンジン](search-engine.md)ウイルスは適切な検索語を入力した誰でも感染させる。しかしメール経路ウイルスは特定の個人を狙い、個人の受信箱に送られ、その特定の行動パターンを悪用するよう作られうる。このためメール経路ウイルスは研究者が「精密感染」と呼ぶものの好まれるツールとなる――特定の人物が意図的に標的とされたと思われるケースだ。最も危険なメール経路ウイルスである[ボイドメール](../viruses/voidmail.md)は意図的な標的化と一致するパターンを示してきたが、*誰が、あるいは何が*標的を定めているかという疑問は未解決のままである。
{: .ja}

## Transmission Methods

### Body Text Infection
The simplest method. Viral payload is embedded in the email's text content. [ByteShade](../viruses/byteshade.md) operates this way -- the email appears to contain a normal message, but specific word patterns and character sequences in the body text trigger the infection upon reading. The infected person often does not even remember the email's content afterward, only that they read an email and felt slightly uneasy.
{: .en}

가장 단순한 방법이다. 바이러스 페이로드가 이메일의 텍스트 콘텐츠에 내장된다. [바이트셰이드](../viruses/byteshade.md)가 이 방식으로 작동한다 -- 이메일은 정상적인 메시지를 담고 있는 것처럼 보이지만, 본문의 특정 단어 패턴과 문자 서열이 읽힘과 동시에 감염을 촉발한다. 감염자는 이후 이메일의 내용조차 기억하지 못하는 경우가 많으며, 이메일을 읽고 약간 불안함을 느꼈다는 것만 기억한다.
{: .ko}

最も単純な方法である。ウイルスペイロードがメールのテキストコンテンツに埋め込まれる。[バイトシェイド](../viruses/byteshade.md)がこの方式で動作する――メールは通常のメッセージを含んでいるように見えるが、本文の特定の単語パターンと文字列が読まれると同時に感染を引き起こす。感染者はその後メールの内容すら覚えていないことが多く、メールを読んで少し不安を感じたことだけを覚えている。
{: .ja}

### Attachment Infection
[PixelRot](../viruses/pixelrot.md) spreads primarily through image attachments. The images appear normal at first glance but contain pixel patterns that, when processed by the viewer's visual system, initiate the infection. [GlassVoice](../viruses/glassvoice.md) has been documented spreading through audio file attachments embedded in emails.
{: .en}

[픽셀롯](../viruses/pixelrot.md)은 주로 이미지 첨부 파일을 통해 확산된다. 이미지는 처음에는 정상적으로 보이지만, 보는 사람의 시각 시스템이 처리할 때 감염을 시작하는 픽셀 패턴을 포함한다. [글래스보이스](../viruses/glassvoice.md)는 이메일에 내장된 오디오 파일 첨부를 통해 확산되는 것이 기록되었다.
{: .ko}

[ピクセルロット](../viruses/pixelrot.md)は主に画像添付ファイルを通じて拡散する。画像は一見正常に見えるが、閲覧者の視覚システムが処理する際に感染を開始するピクセルパターンを含んでいる。[グラスボイス](../viruses/glassvoice.md)はメールに埋め込まれた音声ファイル添付を通じて拡散することが記録されている。
{: .ja}

### Bounce Notifications
Perhaps the most disturbing Email-vector mechanism. [ForgetMeNot](../viruses/forgetmenot.md) and [VoidMail](../viruses/voidmail.md) have been documented spreading through **bounce-back notifications** -- the automated error messages you receive when an email cannot be delivered. The victim receives a bounce notification for an email they never sent, to an address they don't recognize. Reading the bounce notification is sufficient for infection. This weaponizes the email system's own error-handling infrastructure.
{: .en}

아마도 가장 불안한 이메일 경로 메커니즘이다. [포겟미낫](../viruses/forgetmenot.md)과 [보이드메일](../viruses/voidmail.md)은 **반송 알림** -- 이메일이 전달될 수 없을 때 받는 자동 오류 메시지 -- 을 통해 확산되는 것으로 기록되었다. 감염자는 자신이 보낸 적 없는, 알지 못하는 주소로의 이메일에 대한 반송 알림을 받는다. 반송 알림을 읽는 것만으로 감염에 충분하다. 이는 이메일 시스템 자체의 오류 처리 인프라를 무기화한다.
{: .ko}

おそらく最も不穏なメール経路メカニズムである。[フォーゲットミーノット](../viruses/forgetmenot.md)と[ボイドメール](../viruses/voidmail.md)は**バウンス通知**――メールが配信できない時に受け取る自動エラーメッセージ――を通じて拡散することが記録されている。感染者は自分が送ったことのない、認識できないアドレスへのメールのバウンス通知を受け取る。バウンス通知を読むだけで感染に十分である。これはメールシステム自体のエラー処理インフラを武器化する。
{: .ja}

## Known Email-vector Viruses

| Virus | Type | Severity | Email Mechanism |
|-------|------|----------|-----------------|
| [PixelRot](../viruses/pixelrot.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-moderate">보통</span> | Image attachments |
| [ByteShade](../viruses/byteshade.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-high">높음</span> | Body text |
| [ForgetMeNot](../viruses/forgetmenot.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-critical">치명적</span> | Bounce notifications |
| [VoidMail](../viruses/voidmail.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-critical">치명적</span> | Bounce notifications / body |
| [GlassVoice](../viruses/glassvoice.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-high">높음</span> | Audio attachments |

## Related Concepts

- [Messenger](messenger.md) -- both are direct communication vectors, but email enables more precise targeting
- [Irreversible Transformation](irreversible.md) -- ForgetMeNot and VoidMail are both irreversible and email-vector
- [Boundary Collapse](boundary-collapse.md) -- email vector collapse often begins with phantom emails appearing in physical mailboxes
- [Co-infection](co-infection.md) -- targeted email attacks may deliberately pair viruses for co-infection
