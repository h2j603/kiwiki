---
title: "널위스퍼 / NullWhisper"
nav_order: 1
aliases: ["NullWhisper", "공속삭임", "Null Whisper"]
classification:
  type: "로직형 / Logic"
  vector: "메신저 / Messenger"
  severity: "높음 / High"
origin: "삭제된 단체 채팅방의 잔여 데이터 / Residual data from a deleted group chat"
status: "활성 / Active"
code: "WKV-L.MS-001"
icon: "∅"
tags: ["로직형", "메신저", "판단력", "속삭임", "logic", "messenger", "judgment", "whisper"]
---

{% include lang_toggle.html %}

<a href="/kiwiki/" class="home-link">⌂</a>


<div class="ko" markdown="1">

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-L.MS-001</span> |
| 유형 | <span class="pill pill-type">로직형</span> |
| 전파 경로 | <span class="pill pill-vector">메신저</span> |
| 위험도 | <span class="pill pill-severity-high">높음</span> |

</div>

<div class="en" markdown="1">

| Field | Details |
|------|------|
| Code | <span class="pill pill-code">WKV-L.MS-001</span> |
| Type | <span class="pill pill-type">Logic</span> |
| Vector | <span class="pill pill-vector">Messenger</span> |
| Severity | <span class="pill pill-severity-high">High</span> |

</div>

<div class="ja" markdown="1">

| 項目 | 内容 |
|------|------|
| 分類コード | <span class="pill pill-code">WKV-L.MS-001</span> |
| タイプ | <span class="pill pill-type">ロジック型</span> |
| 経路 | <span class="pill pill-vector">メッセンジャー</span> |
| 危険度 | <span class="pill pill-severity-high">高</span> |

</div>

{% include toc.html %}

---

## 개요
{: .ko}



## Overview
{: .en}



## 概要
{: .ja}

메신저 앱에서 빈 메시지(내용이 없는 메시지)를 수신하면 감염되는 [로직형](/kiwiki/taxonomy/#유형별-분류) 바이러스. 감염자는 결정을 내려야 할 순간마다 "속삭임"을 듣게 되며, 그 속삭임이 제시하는 선택지는 항상 논리적으로 보이지만 실제로는 자기 파괴적인 방향으로 유도한다.
{: .ko}

A [Logic-type](/kiwiki/taxonomy/#classification-by-type) virus contracted by receiving empty messages (messages with no content) through messenger apps. At every moment of decision, the infected person hears a "whisper" presenting choices that always seem logical but actually guide them toward self-destructive outcomes.
{: .en}

メッセンジャーアプリで空のメッセージ（内容のないメッセージ）を受信すると感染する[ロジック型](/kiwiki/taxonomy/#유형별-분류)ウイルス。感染者は決断を下すたびに「囁き」を耳にし、その囁きが提示する選択肢は常に論理的に見えるが、実際には自己破壊的な方向へと誘導する。
{: .ja}


---

## 감염 방식
{: .ko}



## Infection Method
{: .en}



## 感染方式
{: .ja}

감염자가 존재하는 채팅방에서 아무 내용 없는 빈 메시지가 전송되면, 해당 메시지를 읽은(혹은 읽음 표시가 뜬) 사용자에게 전파된다. 빈 메시지는 발신자 기록이 남지 않으며, 채팅 기록에서도 일정 시간이 지나면 사라진다.
{: .ko}

Transmitted when an empty message with no content is sent in a chat room where an infected person is present. Users who read the message (or whose read receipt activates) become infected. The empty message leaves no sender record and disappears from chat logs after a period of time.
{: .en}

感染者がいるチャットルームで内容のない空メッセージが送信されると、そのメッセージを読んだ（既読がついた）ユーザーに伝播する。空メッセージには送信者の記録が残らず、チャット履歴からも一定時間が経つと消失する。
{: .ja}


---

## 웹 상 증상
{: .ko}



## Web Symptoms
{: .en}



## ウェブ上の症状
{: .ja}

- 메신저 앱에서 읽지 않은 메시지 알림이 뜨지만 열면 아무것도 없음
- 자동완성 추천어가 의미 없는 문장을 제안하기 시작
- 대화 중 상대방의 메시지 일부가 공백으로 보임
{: .ko}

- Unread message notifications appear but opening reveals nothing
- Autocomplete suggestions begin offering meaningless sentences
- Parts of others' messages appear as blank spaces during conversations
{: .en}

- メッセンジャーアプリで未読メッセージの通知が表示されるが、開くと何もない
- オートコンプリートの候補が意味不明な文章を提案し始める
- 会話中に相手のメッセージの一部が空白に見える
{: .ja}


---

## 발현 양상
{: .ko}



## Manifestation
{: .en}



## 発現様相
{: .ja}

- 결정의 순간마다 "합리적인 속삭임"이 들리며, 그 조언을 따르면 결과가 좋지 않음
- 감염자 본인은 자신의 판단이 완벽히 논리적이라고 확신함
- 주변 사람들이 "요즘 왜 이상한 선택만 하냐"고 지적하나, 감염자에겐 그 지적이 비논리적으로 느껴짐
- 말기에는 속삭임 없이도 자기 파괴적 판단을 자연스럽게 내리게 됨
{: .ko}

- A "rational whisper" is heard at every decision point; following its advice leads to poor outcomes
- The infected person is convinced their judgment is perfectly logical
- Others point out strange decisions, but their concerns feel irrational to the infected
- In terminal stages, self-destructive judgments are made naturally without the whisper
{: .en}

- 決断のたびに「合理的な囁き」が聞こえ、その助言に従うと結果は良くない
- 感染者本人は自分の判断が完全に論理的だと確信している
- 周囲の人々が「最近おかしな選択ばかりしている」と指摘するが、感染者にはその指摘が非論理的に感じられる
- 末期には囁きがなくても自己破壊的な判断を自然に下すようになる
{: .ja}


---

## [경계 무너짐](/kiwiki/glossary/#경계-무너짐--boundary-collapse) 단계
{: .ko}



## Boundary Collapse Stages
{: .en}



## 境界崩壊段階
{: .ja}

1. 메신저에서 빈 메시지 수신 (웹)
2. 앱 내 자동완성·추천이 왜곡됨 (웹 확산)
3. 오프라인 결정에서 "속삭임" 발생 (현실 침투)
4. 속삭임이 감염자의 내면적 사고와 구별 불가 (현실 정착)
{: .ko}

1. Empty message received on messenger (Web)
2. In-app autocomplete and suggestions distorted (Web spread)
3. "Whisper" occurs during offline decisions (Reality breach)
4. Whisper becomes indistinguishable from the person's own thoughts (Reality anchor)
{: .en}

1. メッセンジャーで空メッセージを受信（ウェブ）
2. アプリ内のオートコンプリート・候補が歪む（ウェブ拡散）
3. オフラインの決断時に「囁き」が発生（現実侵入）
4. 囁きが感染者自身の内的思考と区別不能に（現実定着）
{: .ja}


---

## 대응 방법
{: .ko}



## Countermeasures
{: .en}



## 対処法
{: .ja}

- 빈 메시지를 수신하면 읽지 말고 즉시 삭제할 것
- 감염 의심 시, 중요한 결정을 48시간 유예하고 타인의 의견을 반드시 구할 것
- 결정 일지를 작성하여 자신의 판단 패턴을 객관적으로 추적
- 메신저의 읽음 확인(read receipt) 기능을 비활성화하면 감염 확률이 낮아짐
{: .ko}

- Delete empty messages immediately without reading
- If infection is suspected, delay important decisions by 48 hours and always seek others' opinions
- Keep a decision journal to objectively track your judgment patterns
- Disabling read receipts reduces infection probability
{: .en}

- 空メッセージを受信したら読まずにすぐ削除すること
- 感染が疑われる場合、重要な決定を48時間延期し、必ず他者の意見を求めること
- 決定日誌をつけて自分の判断パターンを客観的に追跡する
- メッセンジャーの既読確認機能を無効にすれば感染確率が低下する
{: .ja}


---

## 발견 기록
{: .ko}



## Discovery Log
{: .en}



## 発見記録
{: .ja}

2025년 봄, 한 스타트업 팀에서 CTO가 연이은 "합리적" 결정으로 회사를 파산 직전까지 몰고 간 사건이 발단. 조사 결과 해당 팀의 업무용 메신저에서 출처 불명의 빈 메시지가 수주간 발견되었으며, CTO를 포함한 팀원 전원이 감염 상태였음이 밝혀졌다.
{: .ko}

Discovered in spring 2025 when a startup's CTO drove the company to the brink of bankruptcy through a series of "rational" decisions. Investigation revealed that unattributed empty messages had been appearing in the team's work messenger for weeks, and all team members, including the CTO, were found to be infected.
{: .en}

2025年春、あるスタートアップのCTOが相次ぐ「合理的」判断で会社を倒産寸前まで追い込んだ事件が発端。調査の結果、そのチームの業務用メッセンジャーに出所不明の空メッセージが数週間にわたって確認され、CTOを含むチーム全員が感染状態であったことが判明した。
{: .ja}


---

## 관련 바이러스
{: .ko}



## Related Viruses
{: .en}



## 関連ウイルス
{: .ja}

- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 같은 로직형 바이러스. 널위스퍼가 판단의 *결과*를 왜곡한다면, 신택스레이스는 사고의 *과정*을 변형한다.
- [에코루프 (EchoLoop)](echoloop.md): 에코루프 감염자가 메신저를 사용할 경우 널위스퍼에 대한 감수성이 높아진다. 반복적 사고와 왜곡된 판단이 결합되면 증상이 가속화된다.
- [캐시베인 (CacheVein)](cachevein.md): 메신저를 통해 전파된다는 공통점. 널위스퍼의 빈 메시지 흔적이 캐시베인의 물리적 [발현](/kiwiki/glossary/#발현--manifestation)을 촉진한다는 가설이 있다.
{: .ko}

- [SyntaxWraith](syntaxwraith.md): A fellow Logic-type virus. While NullWhisper distorts the *outcomes* of judgment, SyntaxWraith alters the *process* of thinking.
- [EchoLoop](echoloop.md): EchoLoop-infected individuals show increased susceptibility to NullWhisper when using messengers. The combination of repetitive thinking and distorted judgment accelerates symptoms.
- [CacheVein](cachevein.md): Shares the messenger transmission vector. There is a hypothesis that traces of NullWhisper's empty messages catalyze CacheVein's physical manifestation.
{: .en}

- [シンタックスレイス（SyntaxWraith）](syntaxwraith.md)：同じロジック型ウイルス。ヌルウィスパーが判断の*結果*を歪めるのに対し、シンタックスレイスは思考の*過程*を変容させる。
- [エコループ（EchoLoop）](echoloop.md)：エコループ感染者がメッセンジャーを使用するとヌルウィスパーへの感受性が高まる。反復的思考と歪んだ判断が組み合わさると症状が加速する。
- [キャッシュベイン（CacheVein）](cachevein.md)：メッセンジャーという伝播経路を共有。ヌルウィスパーの空メッセージの痕跡がキャッシュベインの物理的[発現](/kiwiki/glossary/#발현--manifestation)を促進するという仮説がある。
{: .ja}


---

## 참고
{: .ko}



## Notes
{: .en}



## 備考
{: .ja}

- 감염자가 보낸 메시지에도 미세한 논리적 오류가 포함되어 있어, 수신자의 판단력에 약한 영향을 미칠 수 있음 (간접 전파 가능성)
- 현재까지 발견된 로직형 바이러스 중 가장 높은 사회적 피해를 기록
{: .ko}

- Messages sent by infected individuals contain subtle logical errors that may weakly affect recipients' judgment (potential indirect transmission).
- Records the highest social damage among all discovered Logic-type viruses.
{: .en}

- 感染者が送ったメッセージにも微細な論理的誤りが含まれており、受信者の判断力に弱い影響を及ぼす可能性がある（間接伝播の可能性）
- 現在までに発見されたロジック型ウイルスの中で最も高い社会的被害を記録している
{: .ja}

<div class="edit-history">
<div class="en">Last edit: 2025-02-15 by Unit_13 (Added co-infection data)<br>Previous: 2025-02-02 by Dr.NULL (Severity reassessment)</div>
<div class="ko">최종 편집: 2025-02-15 by Unit_13 (동시 감염 데이터 추가)<br>이전: 2025-02-02 by Dr.NULL (위험도 재평가)</div>
<div class="ja">最終編集: 2025-02-15 by Unit_13<br>前回: 2025-02-02 by Dr.NULL</div>
</div>
