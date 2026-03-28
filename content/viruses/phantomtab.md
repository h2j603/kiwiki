---
title: "팬텀탭 / PhantomTab"
parent: "바이러스 / Viruses"
nav_order: 9
classification:
  type: "로직형 / Logic"
  vector: "SNS / Social Media"
  severity: "보통 / Moderate"
origin: "다중 탭 기반 SNS 클라이언트의 알 수 없는 확장 기능 / Unknown extension in a multi-tab SNS client"
first_detected: "2025년 여름 / Summer 2025"
status: "활성 / Active"
tags: ["로직형", "SNS", "주의력", "탭", "logic", "social media", "attention", "tab"]
---

# 팬텀탭 (PhantomTab)

## 개요 / Overview

SNS 피드에서 여러 링크를 동시에 열 때 감염되는 [로직형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자의 사고에 "보이지 않는 탭"이 상시 열려 있는 상태가 되어, 어떤 일에도 온전히 집중하지 못하고 끊임없이 사고가 분산된다.

A [Logic-type](../taxonomy/index.md#classification-by-type) virus contracted when opening multiple links simultaneously from social media feeds. "Invisible tabs" become permanently open in the infected person's mind, preventing full concentration on any task and causing constant thought fragmentation.

## 분류 / Classification

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [로직형 / Logic](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [SNS / Social Media](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 보통 / Moderate |

## 웹 상 특성 / Web Characteristics

### 감염 방식 / Infection Method

SNS에서 5개 이상의 링크를 60초 이내에 새 탭으로 열 때, 그 중 하나가 "유령 페이지"(로딩은 되지만 콘텐츠가 끝없이 변하는 페이지)에 해당하면 감염된다. 유령 페이지는 정상 페이지와 외관상 구별이 불가능하다.

Infection occurs when opening 5 or more links in new tabs within 60 seconds from social media, if one of them is a "ghost page" (a page that loads but whose content endlessly shifts). Ghost pages are visually indistinguishable from normal pages.

### 웹 상 증상 / Web Symptoms

- 닫은 탭이 다시 열려 있음 / Closed tabs reopen on their own
- 브라우저 탭 수가 자신이 인지하는 것보다 항상 많음 / Browser tab count always exceeds what the user perceives
- 탭 전환 시 방금 보던 내용이 기억나지 않음 / Content just viewed is forgotten when switching tabs

## 현실 영향 / Real-World Effects

### 발현 양상 / Manifestation

- 한 가지 일을 하다가 무의식적으로 다른 일로 전환하는 빈도가 극단적으로 증가 / Frequency of unconsciously switching tasks increases drastically
- "방금 뭘 하려고 했지?"라는 생각이 분당 수십 회 반복 / "What was I about to do?" occurs dozens of times per minute
- 동시에 여러 대화를 하면서도 어느 것에도 의미 있는 참여를 못 함 / Engages in multiple conversations simultaneously but contributes meaningfully to none
- 말기에는 하나의 문장을 완성하지 못하고 중간에 다른 문장을 시작 / In terminal stages, unable to complete a single sentence before starting another

### [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 브라우저에서 탭 관리 불능 (웹) / Unable to manage browser tabs (Web)
2. 디지털 작업 전반에서 집중력 붕괴 (웹 확산) / Concentration collapse across all digital tasks (Web spread)
3. 오프라인 활동에서도 "탭 전환" 발생 (현실 침투) / "Tab switching" occurs in offline activities (Reality breach)
4. 단일 사고를 유지할 수 없게 됨 (현실 정착) / Inability to maintain a single thought (Reality anchor)

## 대응 방법 / Countermeasures

- SNS 링크를 한 번에 하나씩만 열 것 / Open social media links one at a time only
- 감염 초기에 "하나만 하기" 훈련(한 가지 활동에 25분 집중)을 반복하면 회복 가능 / Early-stage recovery is possible through "single-tasking" training (25-minute focus on one activity)
- 브라우저 탭 수를 3개 이하로 제한하는 확장 프로그램 사용 / Use extensions that limit browser tabs to 3 or fewer

## 발견 기록 / Discovery Log

2025년 여름, 한 프리랜서가 "머릿속에 탭이 100개 열려 있는 느낌이 안 사라진다"는 글을 올림. 뇌파 측정 결과 실제로 다중 작업 시의 패턴이 단일 작업 중에도 지속되고 있었다.

Discovered in summer 2025 when a freelancer posted "the feeling of having 100 tabs open in my head won't go away." Brainwave measurements confirmed that multi-tasking neural patterns persisted even during single-task activities.

## 관련 바이러스 / Related Viruses

- [널위스퍼 (NullWhisper)](nullwhisper.md): 같은 로직형. 팬텀탭이 주의를 분산시키면 널위스퍼의 "속삭임"을 비판적으로 검토할 여유가 사라져 동시 감염 시 극도로 위험. / Fellow Logic-type. PhantomTab's attention fragmentation eliminates the capacity to critically evaluate NullWhisper's "whispers," making co-infection extremely dangerous.
- [데드스크롤 (DeadScroll)](deadscroll.md): SNS 전파 경로 공유. 팬텀탭 감염자는 여러 피드를 동시에 스크롤하므로 데드스크롤의 13개 반복 패턴에 노출될 확률이 높음. / Shares SNS vector. PhantomTab-infected individuals scroll multiple feeds simultaneously, increasing exposure to DeadScroll's 13-interval pattern.
- [에코루프 (EchoLoop)](echoloop.md): "방금 뭘 하려고 했지?"의 반복이 에코루프의 반복 루프와 공명할 수 있음. / The repetition of "what was I about to do?" can resonate with EchoLoop's repetition loops.

## 참고 / Notes

- 팬텀탭은 "디지털 ADHD"와 혼동되기 쉬우나, 실제 ADHD 환자에게는 감염률이 낮다는 역설적 연구 결과가 있음 / PhantomTab is easily confused with "digital ADHD," but paradoxically, actual ADHD patients show lower infection rates.
