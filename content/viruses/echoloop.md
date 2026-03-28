---
title: "에코루프 / EchoLoop"
aliases: ["EchoLoop", "메아리순환", "Echo Loop"]
classification:
  type: "인지형 / Cognitive"
  vector: "검색엔진 / Search Engine"
  severity: "보통 / Moderate"
origin: "자동 생성된 검색 결과 페이지 / Auto-generated search result page"
first_detected: "2025년 초 / Early 2025"
status: "활성 / Active"
tags: ["인지형", "검색엔진", "기억", "반복", "cognitive", "search engine", "memory", "loop"]
---

# 에코루프 (EchoLoop)

## 개요 / Overview

검색엔진에서 특정 키워드 조합을 검색하면 감염되는 [인지형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자는 같은 생각이 반복적으로 되풀이되는 루프에 빠지며, 자신이 같은 검색을 반복했다는 사실을 인지하지 못하게 된다.

A [Cognitive-type](../taxonomy/index.md#classification-by-type) virus contracted by searching specific keyword combinations on search engines. The infected person falls into a loop of repetitive thoughts and becomes unable to recognize that they have been repeating the same searches.

## 분류 / Classification

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [인지형 / Cognitive](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [검색엔진 / Search Engine](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 보통 / Moderate |

## 웹 상 특성 / Web Characteristics

### 감염 방식 / Infection Method

특정 키워드 3개 이상을 조합하여 검색할 때, 검색 결과의 첫 번째 링크가 자기참조적 페이지(자기 자신을 검색 결과로 포함하는 페이지)로 연결되면 감염된다. 감염 키워드 조합은 개인마다 다르며, 주로 그 사람이 평소에 자주 검색하는 주제와 관련이 있다.

Infection occurs when searching a combination of three or more specific keywords, and the first search result links to a self-referential page (a page that includes itself as a search result). The triggering keyword combination varies per individual and is usually related to topics the person frequently searches.

### 웹 상 증상 / Web Symptoms

- 검색 기록에 동일한 검색어가 수십 회 반복 기록됨 (본인은 인지 못함) / Identical searches recorded dozens of times in history (unnoticed by the user)
- 브라우저 탭이 같은 페이지로 여러 개 열려 있음 / Multiple browser tabs open to the same page
- 북마크에 같은 URL이 중복 저장됨 / Same URL bookmarked multiple times

## 현실 영향 / Real-World Effects

### 발현 양상 / Manifestation

- 같은 말을 무의식적으로 반복하게 됨 / Unconsciously repeating the same words
- 방금 한 행동을 다시 하려고 함 (문 잠갔는지 확인하러 다시 가는 등) / Attempting to redo actions just completed (e.g., re-checking locked doors)
- 대화 중 같은 이야기를 반복하나 본인은 처음 말하는 것으로 인식 / Repeating the same story in conversation while believing it's the first time

### [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 같은 검색을 반복 수행 (웹) / Repeated identical searches (Web)
2. 검색 외 웹 활동에서도 반복 패턴 발생 (웹 확산) / Repetitive patterns in other web activities (Web spread)
3. 오프라인 행동에서 반복 루프 시작 (현실 침투) / Repetitive loops begin in offline behavior (Reality breach)
4. 반복하고 있다는 자각 자체가 사라짐 (현실 정착) / Loss of awareness of the repetition itself (Reality anchor)

## 대응 방법 / Countermeasures

- 검색 기록을 주기적으로 확인하여 비정상적 반복 패턴 감시 / Regularly check search history for abnormal repetition patterns
- 감염이 의심되면 타인에게 자신의 행동 패턴 모니터링을 요청 / If infection is suspected, ask others to monitor your behavior
- 검색 시 자동완성 기능을 끄고, 검색 전에 검색어를 종이에 먼저 적는 습관이 예방에 도움됨 / Disabling autocomplete and writing queries on paper before searching helps prevent infection
- 초기 단계에서는 24시간 인터넷 단절 후 증상 완화 보고 있음 / In early stages, 24-hour internet disconnection has been reported to alleviate symptoms

## 발견 기록 / Discovery Log

2025년 초, 한 포럼에서 "내가 왜 같은 걸 계속 검색하고 있지?"라는 글이 올라온 것을 계기로 발견됨. 해당 유저의 검색 기록을 분석한 결과, 72시간 동안 동일한 검색을 340회 이상 반복한 것으로 확인되었다.

Discovered in early 2025 when a forum post titled "Why do I keep searching the same thing?" was published. Analysis of the user's search history revealed over 340 repetitions of the same search within 72 hours.

## 관련 바이러스 / Related Viruses

- [[deadscroll|데드스크롤 (DeadScroll)]]: 같은 인지형 바이러스. 에코루프가 검색 반복이라면, 데드스크롤은 스크롤 반복에서 비롯된다. / A fellow Cognitive-type virus. While EchoLoop stems from search repetition, DeadScroll originates from scroll repetition.
- [[syntaxwraith|신택스레이스 (SyntaxWraith)]]: 반복적 사고 패턴이라는 점에서 유사하나, 신택스레이스는 사고의 *구조*를 변형시킨다. / Similar in inducing repetitive thought patterns, but SyntaxWraith alters the *structure* of thought.
- [[nullwhisper|널위스퍼 (NullWhisper)]]: 에코루프 감염자가 메신저를 사용할 경우 널위스퍼에 대한 감수성이 높아진다는 보고가 있다. / Reports suggest EchoLoop-infected individuals show increased susceptibility to NullWhisper when using messengers.

## 참고 / Notes

- 감염자가 작성한 글도 반복적 구조를 띠는 경향이 있어, 텍스트 분석으로 감염 여부를 추정할 수 있다는 연구가 있음 / Research suggests that texts written by infected individuals tend to exhibit repetitive structures, enabling infection detection through text analysis.
