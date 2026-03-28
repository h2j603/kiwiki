---
title: "네임이터 / NameEater"
parent: "바이러스 / Viruses"
nav_order: 26
code: "WKV-C.DA-006"
classification:
  type: "인지형 / Cognitive"
  vector: "직접접근 / Direct Access"
  severity: "높음 / High"
origin: "폐쇄된 도메인 등록 대행 사이트의 만료 페이지 / Expired pages of defunct domain registrar sites"
status: "활성 / Active"
tags: ["인지형", "직접접근", "이름", "실어증", "cognitive", "direct access", "names", "aphasia"]
---

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-C.DA-006</span> |
| 유형 | <span class="pill pill-type">인지형 / Cognitive</span> |
| 전파 경로 | <span class="pill pill-vector">직접접근 / Direct Access</span> |
| 위험도 | <span class="pill pill-severity-high">높음 / High</span> |
| 상태 | <span class="pill pill-active">활성 / Active</span> |

## 개요 / Overview

폐쇄되거나 방치된 도메인 등록 대행 사이트의 만료 페이지에 접속하면 감염되는 인지형 바이러스. 감염자는 고유명사를 기억하는 능력이 점진적으로 소실되어, 사람의 이름, 장소명, 사물의 명칭을 떠올리지 못하게 된다. 대상이 무엇인지, 어떤 기능을 하는지는 완벽히 인지하지만 그것을 "부르는 말"만이 사라진다. 마치 도메인이 만료되어 주소를 잃은 웹사이트처럼, 감염자의 세계에서 모든 것이 이름 없는 존재가 된다.
{: .ko}

A Cognitive-type virus contracted by visiting expired pages of abandoned or defunct domain registrar sites. The infected person progressively loses the ability to recall proper nouns—names of people, places, and objects fade from memory. They retain perfect understanding of what something is and what it does, but the word used to "call" it vanishes. Like a website whose domain has expired and lost its address, everything in the infected person's world becomes a nameless entity.
{: .en}

## 감염 방식 / Infection Method

도메인 등록이 만료된 사이트, 특히 도메인 등록 대행 서비스 자체가 폐쇄되어 관리되지 않는 "파킹 페이지"에 직접 접속하면 감염된다. 만료된 도메인의 WHOIS 정보를 조회하거나, 더 이상 존재하지 않는 도메인의 등록 이력을 탐색하는 행위가 감염 확률을 높인다. 브라우저가 "이 사이트에 연결할 수 없습니다" 메시지 대신 빈 등록 페이지를 렌더링하는 순간 바이러스가 활성화되며, 한 번의 접속으로도 감염이 성립할 수 있다.
{: .ko}

Infection occurs by directly accessing sites whose domain registration has expired, particularly unmanaged "parking pages" of domain registrar services that have themselves shut down. Querying WHOIS information for expired domains or browsing the registration history of domains that no longer exist increases infection probability. The virus activates the moment the browser renders a blank registration page instead of a "cannot connect to this site" message, and even a single visit can establish infection.
{: .en}

## 웹 상 증상 / Web Symptoms

- 브라우저 북마크의 사이트 이름이 공백 또는 의미 없는 문자열로 표시됨
- 검색창에 특정 단어를 입력하려 하면 철자가 떠오르지 않아 설명적 문구로 검색하게 됨
- 자동완성 기능이 고유명사를 제안하지 않고 일반 서술어만 제시함
{: .ko}

- Bookmark names in the browser display as blank or meaningless character strings
- When trying to type specific words in the search bar, spelling won't come to mind, forcing descriptive phrase searches instead
- Autocomplete stops suggesting proper nouns and only offers generic descriptors
{: .en}

## 발현 양상 / Manifestation

- 동료의 이름을 부르지 못하고 "저기, 그 사람, 마케팅 부서에 있는..."으로 대체함
- 자주 가던 식당, 거리, 역 이름을 기억하지 못해 "그 국밥집, 거기 큰 은행 옆에 있는 데"라고 표현함
- 일상적 사물의 이름도 소실되어 "그거, 물 끓이는 거" (주전자), "저거, 시간 알려주는 거" (시계)로 말함
- 말기에는 자기 자신의 이름마저 잊어, 서류에 서명할 때 이름을 쓰지 못하는 상태에 이름
{: .ko}

- Unable to call colleagues by name, substituting with "hey, that person, the one in the marketing department..."
- Cannot remember the names of frequently visited restaurants, streets, or stations, expressing them as "that soup place, the one next to the big bank"
- Names of everyday objects are also lost, resulting in "that thing, the one that boils water" (kettle), "that thing, the one that tells time" (clock)
- In terminal stages, even one's own name is forgotten, rendering the infected unable to sign documents
{: .en}

## 경계 무너짐 단계 / Boundary Collapse Stages

1. 웹사이트 이름과 URL이 기억에서 사라지기 시작—자주 방문하던 사이트를 검색으로만 찾을 수 있음 (웹 침투)
2. 온라인 대화에서 고유명사를 타이핑하지 못하고 설명으로 대체—상대방이 이상함을 감지 (웹 확산)
3. 오프라인에서 사람, 장소, 사물의 이름이 소실—모든 명사가 "그것"이 됨 (현실 침투)
4. 자기 자신의 이름과 정체성 명칭까지 소실—"나"라는 개념은 있으나 그것을 부를 말이 없음 (현실 정착)
{: .ko}

1. Website names and URLs begin disappearing from memory—frequently visited sites can only be found through search (Web infiltration)
2. Unable to type proper nouns in online conversations, replacing them with descriptions—others begin noticing something is wrong (Web spread)
3. Names of people, places, and objects are lost offline—every noun becomes "that thing" (Reality breach)
4. Even one's own name and identity labels are lost—the concept of "I" exists but there is no word to call it (Reality anchor)
{: .en}

## 대응 방법 / Countermeasures

- 만료된 도메인 페이지나 폐쇄된 등록 대행 사이트에 절대 접속하지 말 것
- 감염 초기에 모든 주요 고유명사를 물리적 노트에 기록하여 지속적으로 읽기 반복을 수행할 것
- 이름표, 라벨링 시스템을 생활 공간에 도입하여 시각적 보조 체계를 구축할 것
- 감염자 주변인들은 감염자가 이름을 잊었을 때 자연스럽게 알려주되, 절대로 "잊었냐"고 추궁하지 말 것—심리적 압박이 증상을 가속화함
{: .ko}

- Never access expired domain pages or defunct registrar sites
- In early infection stages, record all important proper nouns in a physical notebook and practice reading them repeatedly
- Introduce nametags and labeling systems throughout living spaces to build a visual aid framework
- People around the infected should naturally provide names when forgotten, but never pressure them with "did you forget?"—psychological stress accelerates symptoms
{: .en}

## 발견 기록 / Discovery Log

2025년 여름, IT 보안 연구원이 대량의 만료 도메인을 조사하는 프로젝트를 수행하던 중 감염되었다. 연구원은 보고서를 작성하면서 조사 대상 도메인의 이름을 하나도 기억하지 못하는 자신을 발견했고, 곧이어 동료 연구원들의 이름도 떠올리지 못했다. 조사 결과 해당 연구원이 접속한 특정 폐쇄 등록 대행 사이트의 파킹 페이지에서 바이러스가 기원한 것으로 확인되었으며, 같은 페이지에 접속한 다른 연구원 3명도 동일 증상을 보였다.
{: .ko}

In summer 2025, an IT security researcher became infected while conducting a project investigating a large number of expired domains. While writing a report, the researcher discovered they could not remember the name of a single domain under investigation, and soon after could not recall the names of colleague researchers. Investigation confirmed the virus originated from a parking page of a specific defunct registrar site the researcher had accessed, and three other researchers who visited the same page exhibited identical symptoms.
{: .en}

## 관련 바이러스 / Related Viruses

- [포겟미낫 (ForgetMeNot)](forgetmenot.md): 기억 소실 관련 인지형 바이러스. 포겟미낫이 경험 기억 전체를 지운다면, 네임이터는 명칭 기억만을 선택적으로 파괴한다—동시 감염 시 존재 자체가 인식에서 완전히 탈락함.
- [드림리크 (DreamLeak)](dreamleak.md): 드림리크 감염자가 네임이터에 동시 감염되면, 꿈에서 만난 사람의 이름도 현실에서 만난 사람의 이름도 모두 소실되어 인간관계의 구분이 완전히 붕괴됨.
- [블라인드스팟 (BlindSpot)](blindspot.md): 블라인드스팟이 시각적 인식을 차단한다면, 네임이터는 언어적 인식을 차단한다—두 바이러스의 메커니즘이 상보적 관계에 있음.
{: .ko}

- [ForgetMeNot](forgetmenot.md): A memory-loss Cognitive-type virus. While ForgetMeNot erases entire experiential memories, NameEater selectively destroys nomenclature memory—co-infection causes entities to completely drop out of awareness.
- [DreamLeak](dreamleak.md): When a DreamLeak-infected person is co-infected with NameEater, the names of people met in dreams and people met in reality are both lost, causing complete collapse of relational distinctions.
- [BlindSpot](blindspot.md): If BlindSpot blocks visual recognition, NameEater blocks linguistic recognition—the mechanisms of the two viruses are complementary.
{: .en}

## 참고 / Notes

- 네임이터 감염자들은 종종 새로운 즉흥적 명칭 체계를 발명하는데, 이 체계가 다른 감염자들 사이에서 공유되면 일종의 "이름 없는 자들의 언어"가 형성된다는 보고가 있음.
- 흥미롭게도 감염자는 숫자, 색상, 감각적 형용사는 정상적으로 기억하며, 오직 고유명사와 일반명사의 "이름" 기능만이 손상됨.
{: .ko}

- NameEater-infected individuals often invent new impromptu naming systems, and there are reports that when these systems are shared among other infected individuals, a sort of "language of the nameless" forms.
- Interestingly, infected individuals retain normal recall of numbers, colors, and sensory adjectives—only the "naming" function of proper and common nouns is damaged.
{: .en}
