---
title: "바이트셰이드 / ByteShade"
parent: "바이러스 / Viruses"
nav_order: 10
classification:
  type: "로직형 / Logic"
  vector: "이메일 / Email"
  severity: "높음 / High"
origin: "기업 내부 메일 서버의 손상된 인코딩 테이블 / Corrupted encoding table in a corporate mail server"
first_detected: "2025년 봄 / Spring 2025"
status: "활성 / Active"
tags: ["로직형", "이메일", "판단", "그림자", "logic", "email", "judgment", "shadow"]
---

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [로직형 / Logic](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [이메일 / Email](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 높음 / High |

## 개요 / Overview

이메일 본문에 삽입된 보이지 않는 유니코드 문자(제로폭 문자 등)를 통해 감염되는 [로직형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자가 선택지 앞에 놓일 때마다, 실제로는 존재하지 않는 "그림자 선택지"가 보이며 항상 그것을 고르게 된다.

A [Logic-type](../taxonomy/index.md#classification-by-type) virus transmitted through invisible Unicode characters (zero-width characters, etc.) embedded in email body text. Whenever the infected person faces a choice, a non-existent "shadow option" appears, and they invariably select it.

## 감염 방식 / Infection Method

정상적인 비즈니스 이메일처럼 보이는 메일에 제로폭 접합자(ZWJ), 제로폭 비접합자(ZWNJ) 등 보이지 않는 유니코드 문자가 특정 패턴으로 삽입되어 있다. 이메일을 읽는 행위 자체가 해당 패턴을 뇌가 처리하게 만들어 감염이 발생한다.

Normal-looking business emails contain zero-width joiners (ZWJ), zero-width non-joiners (ZWNJ), and other invisible Unicode characters arranged in specific patterns. The act of reading the email causes the brain to process the pattern, triggering infection.

## 웹 상 증상 / Web Symptoms

- 이메일을 복사·붙여넣기하면 보이지 않는 문자가 의도치 않게 전파됨 / Invisible characters unintentionally propagate when copying and pasting emails
- 온라인 양식에서 선택지가 하나 더 보이는 환각 발생 / Hallucinated extra option appears in online forms
- 텍스트 에디터에서 커서가 보이지 않는 문자 위치에서 멈추는 현상 / Cursor pauses at invisible character positions in text editors

## 발현 양상 / Manifestation

- 식당 메뉴에서 없는 메뉴를 주문하려고 시도 / Attempts to order non-existent items from restaurant menus
- 선택해야 할 상황에서 "세 번째 선택지"가 항상 보임 (실제로는 두 개뿐인 경우에도) / A "third option" always appears in choice situations (even when only two exist)
- 그림자 선택지를 고르면 현실에서 아무 행동도 하지 않은 것이 됨—결정 자체가 무효화됨 / Choosing the shadow option results in no action taken in reality—the decision itself is nullified
- 말기에는 모든 선택이 그림자로 대체되어 일체의 결정을 내리지 못함 / In terminal stages, all choices are replaced by shadows, rendering all decision-making impossible

## [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 이메일에서 보이지 않는 문자 패턴 처리 (웹) / Processing invisible character patterns in email (Web)
2. 온라인 양식·투표 등에서 환각 선택지 출현 (웹 확산) / Hallucinated options appear in online forms and polls (Web spread)
3. 오프라인 일상에서 그림자 선택지 발현 (현실 침투) / Shadow options manifest in offline daily life (Reality breach)
4. 실제 선택지와 그림자를 구별 불가 (현실 정착) / Unable to distinguish real options from shadows (Reality anchor)

## 대응 방법 / Countermeasures

- 이메일 클라이언트에서 비가시 유니코드 문자를 표시하는 기능을 활성화할 것 / Enable invisible Unicode character display in email clients
- 의심스러운 이메일은 일반 텍스트(plain text) 모드로 열어 확인 / Open suspicious emails in plain text mode to inspect
- 감염 초기에는 모든 결정을 "보이는 선택지만" 기준으로 타인에게 확인받는 습관이 효과적 / In early stages, having others verify that only visible options are considered is effective

## 발견 기록 / Discovery Log

2025년 봄, 한 대기업 인사팀에서 면접관들이 존재하지 않는 "4번 후보"에게 합격 판정을 내린 사건이 발생. 내부 이메일을 분석한 결과, 인사 관련 메일에 체계적으로 삽입된 제로폭 문자 패턴이 발견됨.

Discovered in spring 2025 when interviewers at a major corporation gave passing evaluations to a non-existent "Candidate No. 4." Analysis of internal emails revealed systematically embedded zero-width character patterns in HR-related messages.

## 관련 바이러스 / Related Viruses

- [널위스퍼 (NullWhisper)](nullwhisper.md): 둘 다 로직형이나, 널위스퍼는 잘못된 선택으로 유도하고 바이트셰이드는 존재하지 않는 선택으로 유도한다는 차이. / Both Logic-type, but NullWhisper guides toward wrong choices while ByteShade guides toward non-existent ones.
- [픽셀롯 (PixelRot)](pixelrot.md): 이메일 전파 경로 공유. 바이트셰이드가 보이지 않는 문자라면, 픽셀롯은 보이지만 비정상적인 픽셀. / Shares email vector. ByteShade uses invisible characters; PixelRot uses visible but abnormal pixels.
- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 신택스레이스 감염자는 제로폭 문자를 "코드"로 인식하여 오히려 바이트셰이드에 면역을 보이는 사례가 있음. / SyntaxWraith-infected individuals sometimes show immunity to ByteShade, perceiving zero-width characters as "code."

## 참고 / Notes

- 바이트셰이드는 표적 공격에 사용될 수 있어, 현재까지 발견된 로직형 중 유일하게 "무기화 가능성"이 논의되는 종 / ByteShade can be used in targeted attacks, making it the only Logic-type virus where "weaponization potential" is discussed.
