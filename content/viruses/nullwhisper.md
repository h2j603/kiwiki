---
title: "널위스퍼 / NullWhisper"
parent: "바이러스 / Viruses"
nav_order: 1
aliases: ["NullWhisper", "공속삭임", "Null Whisper"]
classification:
  type: "로직형 / Logic"
  vector: "메신저 / Messenger"
  severity: "높음 / High"
origin: "삭제된 단체 채팅방의 잔여 데이터 / Residual data from a deleted group chat"
first_detected: "2025년 봄 / Spring 2025"
status: "활성 / Active"
tags: ["로직형", "메신저", "판단력", "속삭임", "logic", "messenger", "judgment", "whisper"]
---

# 널위스퍼 (NullWhisper)

## 개요 / Overview

메신저 앱에서 빈 메시지(내용이 없는 메시지)를 수신하면 감염되는 [로직형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자는 결정을 내려야 할 순간마다 "속삭임"을 듣게 되며, 그 속삭임이 제시하는 선택지는 항상 논리적으로 보이지만 실제로는 자기 파괴적인 방향으로 유도한다.

A [Logic-type](../taxonomy/index.md#classification-by-type) virus contracted by receiving empty messages (messages with no content) through messenger apps. At every moment of decision, the infected person hears a "whisper" presenting choices that always seem logical but actually guide them toward self-destructive outcomes.

## 분류 / Classification

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [로직형 / Logic](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [메신저 / Messenger](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 높음 / High |

## 웹 상 특성 / Web Characteristics

### 감염 방식 / Infection Method

감염자가 존재하는 채팅방에서 아무 내용 없는 빈 메시지가 전송되면, 해당 메시지를 읽은(혹은 읽음 표시가 뜬) 사용자에게 전파된다. 빈 메시지는 발신자 기록이 남지 않으며, 채팅 기록에서도 일정 시간이 지나면 사라진다.

Transmitted when an empty message with no content is sent in a chat room where an infected person is present. Users who read the message (or whose read receipt activates) become infected. The empty message leaves no sender record and disappears from chat logs after a period of time.

### 웹 상 증상 / Web Symptoms

- 메신저 앱에서 읽지 않은 메시지 알림이 뜨지만 열면 아무것도 없음 / Unread message notifications appear but opening reveals nothing
- 자동완성 추천어가 의미 없는 문장을 제안하기 시작 / Autocomplete suggestions begin offering meaningless sentences
- 대화 중 상대방의 메시지 일부가 공백으로 보임 / Parts of others' messages appear as blank spaces during conversations

## 현실 영향 / Real-World Effects

### 발현 양상 / Manifestation

- 결정의 순간마다 "합리적인 속삭임"이 들리며, 그 조언을 따르면 결과가 좋지 않음 / A "rational whisper" is heard at every decision point; following its advice leads to poor outcomes
- 감염자 본인은 자신의 판단이 완벽히 논리적이라고 확신함 / The infected person is convinced their judgment is perfectly logical
- 주변 사람들이 "요즘 왜 이상한 선택만 하냐"고 지적하나, 감염자에겐 그 지적이 비논리적으로 느껴짐 / Others point out strange decisions, but their concerns feel irrational to the infected
- 말기에는 속삭임 없이도 자기 파괴적 판단을 자연스럽게 내리게 됨 / In terminal stages, self-destructive judgments are made naturally without the whisper

### [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 메신저에서 빈 메시지 수신 (웹) / Empty message received on messenger (Web)
2. 앱 내 자동완성·추천이 왜곡됨 (웹 확산) / In-app autocomplete and suggestions distorted (Web spread)
3. 오프라인 결정에서 "속삭임" 발생 (현실 침투) / "Whisper" occurs during offline decisions (Reality breach)
4. 속삭임이 감염자의 내면적 사고와 구별 불가 (현실 정착) / Whisper becomes indistinguishable from the person's own thoughts (Reality anchor)

## 대응 방법 / Countermeasures

- 빈 메시지를 수신하면 읽지 말고 즉시 삭제할 것 / Delete empty messages immediately without reading
- 감염 의심 시, 중요한 결정을 48시간 유예하고 타인의 의견을 반드시 구할 것 / If infection is suspected, delay important decisions by 48 hours and always seek others' opinions
- 결정 일지를 작성하여 자신의 판단 패턴을 객관적으로 추적 / Keep a decision journal to objectively track your judgment patterns
- 메신저의 읽음 확인(read receipt) 기능을 비활성화하면 감염 확률이 낮아짐 / Disabling read receipts reduces infection probability

## 발견 기록 / Discovery Log

2025년 봄, 한 스타트업 팀에서 CTO가 연이은 "합리적" 결정으로 회사를 파산 직전까지 몰고 간 사건이 발단. 조사 결과 해당 팀의 업무용 메신저에서 출처 불명의 빈 메시지가 수주간 발견되었으며, CTO를 포함한 팀원 전원이 감염 상태였음이 밝혀졌다.

Discovered in spring 2025 when a startup's CTO drove the company to the brink of bankruptcy through a series of "rational" decisions. Investigation revealed that unattributed empty messages had been appearing in the team's work messenger for weeks, and all team members, including the CTO, were found to be infected.

## 관련 바이러스 / Related Viruses

- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 같은 로직형 바이러스. 널위스퍼가 판단의 *결과*를 왜곡한다면, 신택스레이스는 사고의 *과정*을 변형한다. / A fellow Logic-type virus. While NullWhisper distorts the *outcomes* of judgment, SyntaxWraith alters the *process* of thinking.
- [에코루프 (EchoLoop)](echoloop.md): 에코루프 감염자가 메신저를 사용할 경우 널위스퍼에 대한 감수성이 높아진다. 반복적 사고와 왜곡된 판단이 결합되면 증상이 가속화된다. / EchoLoop-infected individuals show increased susceptibility to NullWhisper when using messengers. The combination of repetitive thinking and distorted judgment accelerates symptoms.
- [캐시베인 (CacheVein)](cachevein.md): 메신저를 통해 전파된다는 공통점. 널위스퍼의 빈 메시지 흔적이 캐시베인의 물리적 [발현](../glossary/index.md#발현--manifestation)을 촉진한다는 가설이 있다. / Shares the messenger transmission vector. There is a hypothesis that traces of NullWhisper's empty messages catalyze CacheVein's physical manifestation.

## 참고 / Notes

- 감염자가 보낸 메시지에도 미세한 논리적 오류가 포함되어 있어, 수신자의 판단력에 약한 영향을 미칠 수 있음 (간접 전파 가능성) / Messages sent by infected individuals contain subtle logical errors that may weakly affect recipients' judgment (potential indirect transmission).
- 현재까지 발견된 로직형 바이러스 중 가장 높은 사회적 피해를 기록 / Records the highest social damage among all discovered Logic-type viruses.
