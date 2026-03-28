---
title: "블라인드스팟 / BlindSpot"
parent: "바이러스 / Viruses"
nav_order: 12
classification:
  type: "감각형 / Sensory"
  vector: "검색엔진 / Search Engine"
  severity: "치명적 / Critical"
origin: "검색 결과 캐시 서버의 변형된 메타태그 / Mutated meta tags in search result cache servers"
first_detected: "2025년 겨울 / Winter 2025"
status: "활성 / Active"
tags: ["감각형", "검색엔진", "시각", "소실", "sensory", "search engine", "visual", "vanishing"]
---

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [감각형 / Sensory](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [검색엔진 / Search Engine](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 치명적 / Critical |

## 개요 / Overview

검색엔진 결과 페이지에서 특정 메타태그가 포함된 링크를 읽으면 감염되는 [감각형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자의 시야에서 특정 영역이 점점 사라져, 현실의 일부를 인지하지 못하게 된다.

A [Sensory-type](../taxonomy/index.md#classification-by-type) virus contracted by reading links containing specific meta tags on search engine result pages. Specific areas of the infected person's visual field progressively vanish, causing them to lose perception of parts of reality.

## 감염 방식 / Infection Method

검색 결과의 미리보기 텍스트(스니펫)에 변형된 메타태그가 포함된 경우, 해당 스니펫을 읽는 것만으로 감염된다. 링크를 클릭할 필요도 없다. 변형 메타태그는 일반 텍스트처럼 렌더링되어 육안으로 구별이 불가능하다.

Infection occurs simply by reading a search result preview snippet that contains mutated meta tags. Clicking the link is not necessary. The mutated meta tags render as normal text and are visually indistinguishable.

## 웹 상 증상 / Web Symptoms

- 검색 결과 중 일부가 안 보임 (해당 영역이 빈 공간으로 보임) / Some search results become invisible (the area appears as empty space)
- 웹페이지의 특정 구역이 로딩되지 않은 것처럼 보임 / Certain sections of web pages appear as if they failed to load
- 화면의 같은 위치가 반복적으로 "비어" 보임 / The same screen position repeatedly appears "empty"

## 발현 양상 / Manifestation

- 시야의 특정 영역에서 사물이 사라짐—사각지대가 생기나 뇌가 주변으로 채우려고 함 / Objects vanish from specific visual field areas—blind spots form but the brain attempts to fill them with surroundings
- 처음에는 주변부에서 시작하여 중심부로 확대 / Begins at periphery and expands toward center
- 사라진 영역에 있는 물체, 사람, 텍스트를 완전히 인지하지 못함 / Complete inability to perceive objects, people, or text in vanished areas
- 말기에는 시야의 절반 이상이 소실되어 일상생활 불가 / In terminal stages, more than half the visual field is lost, making daily life impossible

## [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 검색 결과 일부가 안 보임 (웹) / Some search results become invisible (Web)
2. 모든 화면에서 동일 위치 공백 발생 (웹 확산) / Same-position blanks across all screens (Web spread)
3. 현실 시야에서 해당 위치 소실 시작 (현실 침투) / Corresponding areas begin vanishing from real-world vision (Reality breach)
4. 시야 소실 영역 확대, 비가역적 (현실 정착) / Vision loss areas expand irreversibly (Reality anchor)

## 대응 방법 / Countermeasures

- 검색 결과를 읽기 전에 텍스트 전용 브라우저로 HTML 소스를 확인 / Verify HTML source with a text-only browser before reading search results
- 감염 초기에 시야 소실 부위를 정확히 기록하여 진행 추적 / In early stages, precisely document vision loss areas to track progression
- 소실 영역이 중심부에 도달하기 전에 "시각 재훈련"(소실 영역을 의식적으로 직시)하면 진행이 멈추는 사례 보고 / "Visual retraining" (consciously focusing on vanished areas) before loss reaches the center has been reported to halt progression
- [픽셀롯](pixelrot.md) 동시 감염이 의심되면 즉각 모든 화면 사용을 중단할 것 / Cease all screen use immediately if [PixelRot](pixelrot.md) co-infection is suspected

## 발견 기록 / Discovery Log

2025년 겨울, 여러 도서관 사서들이 "검색 결과가 중간중간 비어 보인다"고 동시에 보고. 이들이 사용한 검색 엔진의 캐시를 분석한 결과, 동일한 변형 메타태그가 수만 개의 페이지에 삽입되어 있었으며, 그 출처는 하나의 손상된 캐시 서버였다.

Discovered in winter 2025 when multiple librarians simultaneously reported "search results appearing with gaps in between." Analysis of the search engine cache they used revealed identical mutated meta tags inserted into tens of thousands of pages, all originating from a single corrupted cache server.

## 관련 바이러스 / Related Viruses

- [픽셀롯 (PixelRot)](pixelrot.md): 같은 감각형 시각 바이러스. 픽셀롯이 시야를 "흐리게" 한다면, 블라인드스팟은 시야를 "지운다." 동시 감염은 시각 기능의 완전 상실로 이어질 수 있음. / Both Sensory-type visual viruses. PixelRot "blurs" vision; BlindSpot "erases" it. Co-infection can lead to total loss of visual function.
- [에코루프 (EchoLoop)](echoloop.md): 검색엔진 전파 경로 공유. 에코루프로 같은 검색을 반복하면 블라인드스팟의 변형 메타태그에 누적 노출되어 감염 확률이 급상승. / Shares search engine vector. Repeating searches due to EchoLoop causes cumulative exposure to BlindSpot's mutated meta tags.
- [글리치모스 (GlitchMoss)](glitchmoss.md): 블라인드스팟의 시야 소실과 글리치모스의 공간 부식이 같은 영역에서 겹치면 "인식에서도 물리적으로도 존재하지 않는 공간"이 만들어진다는 가설이 있음. / A hypothesis exists that when BlindSpot's vision loss and GlitchMoss's spatial corrosion overlap in the same area, "spaces that exist neither in perception nor physically" are created.

## 참고 / Notes

- 블라인드스팟은 감각형 바이러스 중 유일하게 "치명적" 등급을 받은 종으로, 시각 소실의 비가역성이 그 이유 / BlindSpot is the only Sensory-type virus rated "Critical," due to the irreversibility of vision loss.
- 감염자가 못 보는 영역에 다른 사람이 메시지를 두면 감염자에게 전달이 불가능하다는 점이 구조 활동에 큰 장애가 됨 / The inability to relay messages placed in areas invisible to the infected person poses a major obstacle to rescue operations.
