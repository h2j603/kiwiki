---
title: "에코루프 / EchoLoop"
parent: "바이러스 / Viruses"
nav_order: 5
aliases: ["EchoLoop", "메아리순환", "Echo Loop"]
classification:
  type: "인지형 / Cognitive"
  vector: "검색엔진 / Search Engine"
  severity: "보통 / Moderate"
origin: "자동 생성된 검색 결과 페이지 / Auto-generated search result page"
status: "활성 / Active"
code: "WKV-C.SE-001"
icon: "↺"
tags: ["인지형", "검색엔진", "기억", "반복", "cognitive", "search engine", "memory", "loop"]
---

<div class="ko" markdown="1">

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-C.SE-001</span> |
| 유형 | <span class="pill pill-type">인지형</span> |
| 전파 경로 | <span class="pill pill-vector">검색엔진</span> |
| 위험도 | <span class="pill pill-severity-moderate">보통</span> |

</div>

<div class="en" markdown="1">

| Field | Details |
|------|------|
| Code | <span class="pill pill-code">WKV-C.SE-001</span> |
| Type | <span class="pill pill-type">Cognitive</span> |
| Vector | <span class="pill pill-vector">Search Engine</span> |
| Severity | <span class="pill pill-severity-moderate">Moderate</span> |

</div>

<div class="ja" markdown="1">

| 項目 | 内容 |
|------|------|
| 分類コード | <span class="pill pill-code">WKV-C.SE-001</span> |
| タイプ | <span class="pill pill-type">認知型</span> |
| 経路 | <span class="pill pill-vector">検索エンジン</span> |
| 危険度 | <span class="pill pill-severity-moderate">中</span> |

</div>



---

## 개요
{: .ko}


---

## Overview
{: .en}


---

## 概要
{: .ja}

검색엔진에서 특정 키워드 조합을 검색하면 감염되는 [인지형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자는 같은 생각이 반복적으로 되풀이되는 루프에 빠지며, 자신이 같은 검색을 반복했다는 사실을 인지하지 못하게 된다.
{: .ko}

A [Cognitive-type](../taxonomy/index.md#classification-by-type) virus contracted by searching specific keyword combinations on search engines. The infected person falls into a loop of repetitive thoughts and becomes unable to recognize that they have been repeating the same searches.
{: .en}

検索エンジンで特定のキーワードの組み合わせを検索すると感染する[認知型](../taxonomy/index.md#유형별-분류)ウイルス。感染者は同じ思考が繰り返されるループに陥り、自分が同じ検索を繰り返していることを認知できなくなる。
{: .ja}


---

## 감염 방식
{: .ko}


---

## Infection Method
{: .en}


---

## 感染方式
{: .ja}

특정 키워드 3개 이상을 조합하여 검색할 때, 검색 결과의 첫 번째 링크가 자기참조적 페이지(자기 자신을 검색 결과로 포함하는 페이지)로 연결되면 감염된다. 감염 키워드 조합은 개인마다 다르며, 주로 그 사람이 평소에 자주 검색하는 주제와 관련이 있다.
{: .ko}

Infection occurs when searching a combination of three or more specific keywords, and the first search result links to a self-referential page (a page that includes itself as a search result). The triggering keyword combination varies per individual and is usually related to topics the person frequently searches.
{: .en}

特定のキーワード3つ以上を組み合わせて検索した際、検索結果の最初のリンクが自己参照的ページ（自分自身を検索結果として含むページ）に繋がると感染する。感染を引き起こすキーワードの組み合わせは個人ごとに異なり、主にその人が普段よく検索するテーマに関連している。
{: .ja}


---

## 웹 상 증상
{: .ko}


---

## Web Symptoms
{: .en}


---

## ウェブ上の症状
{: .ja}

- 검색 기록에 동일한 검색어가 수십 회 반복 기록됨 (본인은 인지 못함)
- 브라우저 탭이 같은 페이지로 여러 개 열려 있음
- 북마크에 같은 URL이 중복 저장됨
{: .ko}

- Identical searches recorded dozens of times in history (unnoticed by the user)
- Multiple browser tabs open to the same page
- Same URL bookmarked multiple times
{: .en}

- 検索履歴に同一の検索語が数十回にわたり記録されている（本人は気づいていない）
- ブラウザのタブが同じページで複数開かれている
- ブックマークに同じURLが重複保存されている
{: .ja}


---

## 발현 양상
{: .ko}


---

## Manifestation
{: .en}


---

## 発現様相
{: .ja}

- 같은 말을 무의식적으로 반복하게 됨
- 방금 한 행동을 다시 하려고 함 (문 잠갔는지 확인하러 다시 가는 등)
- 대화 중 같은 이야기를 반복하나 본인은 처음 말하는 것으로 인식
{: .ko}

- Unconsciously repeating the same words
- Attempting to redo actions just completed (e.g., re-checking locked doors)
- Repeating the same story in conversation while believing it's the first time
{: .en}

- 同じ言葉を無意識に繰り返すようになる
- さっき行った行動をもう一度やろうとする（鍵をかけたか確認しに戻るなど）
- 会話中に同じ話を繰り返すが、本人は初めて話していると認識している
{: .ja}


---

## [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계
{: .ko}


---

## Boundary Collapse Stages
{: .en}


---

## 境界崩壊段階
{: .ja}

1. 같은 검색을 반복 수행 (웹)
2. 검색 외 웹 활동에서도 반복 패턴 발생 (웹 확산)
3. 오프라인 행동에서 반복 루프 시작 (현실 침투)
4. 반복하고 있다는 자각 자체가 사라짐 (현실 정착)
{: .ko}

1. Repeated identical searches (Web)
2. Repetitive patterns in other web activities (Web spread)
3. Repetitive loops begin in offline behavior (Reality breach)
4. Loss of awareness of the repetition itself (Reality anchor)
{: .en}

1. 同じ検索を繰り返し実行（ウェブ）
2. 検索以外のウェブ活動でも反復パターンが発生（ウェブ拡散）
3. オフラインの行動で反復ループが開始（現実侵入）
4. 繰り返しているという自覚自体が消失（現実定着）
{: .ja}


---

## 대응 방법
{: .ko}


---

## Countermeasures
{: .en}


---

## 対処法
{: .ja}

- 검색 기록을 주기적으로 확인하여 비정상적 반복 패턴 감시
- 감염이 의심되면 타인에게 자신의 행동 패턴 모니터링을 요청
- 검색 시 자동완성 기능을 끄고, 검색 전에 검색어를 종이에 먼저 적는 습관이 예방에 도움됨
- 초기 단계에서는 24시간 인터넷 단절 후 증상 완화 보고 있음
{: .ko}

- Regularly check search history for abnormal repetition patterns
- If infection is suspected, ask others to monitor your behavior
- Disabling autocomplete and writing queries on paper before searching helps prevent infection
- In early stages, 24-hour internet disconnection has been reported to alleviate symptoms
{: .en}

- 検索履歴を定期的に確認し、異常な反復パターンを監視する
- 感染が疑われる場合、他者に自分の行動パターンのモニタリングを依頼する
- 検索時にオートコンプリート機能をオフにし、検索前に検索語を紙に書く習慣が予防に役立つ
- 初期段階では24時間のインターネット遮断後に症状の緩和が報告されている
{: .ja}


---

## 발견 기록
{: .ko}


---

## Discovery Log
{: .en}


---

## 発見記録
{: .ja}

2025년 초, 한 포럼에서 "내가 왜 같은 걸 계속 검색하고 있지?"라는 글이 올라온 것을 계기로 발견됨. 해당 유저의 검색 기록을 분석한 결과, 72시간 동안 동일한 검색을 340회 이상 반복한 것으로 확인되었다.
{: .ko}

Discovered in early 2025 when a forum post titled "Why do I keep searching the same thing?" was published. Analysis of the user's search history revealed over 340 repetitions of the same search within 72 hours.
{: .en}

2025年初頭、あるフォーラムに「なぜ同じものを検索し続けているのか？」という投稿が上がったことをきっかけに発見された。そのユーザーの検索履歴を分析した結果、72時間で同一の検索を340回以上繰り返していたことが確認された。
{: .ja}


---

## 관련 바이러스
{: .ko}


---

## Related Viruses
{: .en}


---

## 関連ウイルス
{: .ja}

- [데드스크롤 (DeadScroll)](deadscroll.md): 같은 인지형 바이러스. 에코루프가 검색 반복이라면, 데드스크롤은 스크롤 반복에서 비롯된다.
- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 반복적 사고 패턴이라는 점에서 유사하나, 신택스레이스는 사고의 *구조*를 변형시킨다.
- [널위스퍼 (NullWhisper)](nullwhisper.md): 에코루프 감염자가 메신저를 사용할 경우 널위스퍼에 대한 감수성이 높아진다는 보고가 있다.
{: .ko}

- [DeadScroll](deadscroll.md): A fellow Cognitive-type virus. While EchoLoop stems from search repetition, DeadScroll originates from scroll repetition.
- [SyntaxWraith](syntaxwraith.md): Similar in inducing repetitive thought patterns, but SyntaxWraith alters the *structure* of thought.
- [NullWhisper](nullwhisper.md): Reports suggest EchoLoop-infected individuals show increased susceptibility to NullWhisper when using messengers.
{: .en}

- [デッドスクロール（DeadScroll）](deadscroll.md)：同じ認知型ウイルス。エコループが検索の反復なら、デッドスクロールはスクロールの反復に由来する。
- [シンタックスレイス（SyntaxWraith）](syntaxwraith.md)：反復的思考パターンという点では類似するが、シンタックスレイスは思考の*構造*を変形させる。
- [ヌルウィスパー（NullWhisper）](nullwhisper.md)：エコループ感染者がメッセンジャーを使用するとヌルウィスパーへの感受性が高まるとの報告がある。
{: .ja}


---

## 참고
{: .ko}


---

## Notes
{: .en}


---

## 備考
{: .ja}

- 감염자가 작성한 글도 반복적 구조를 띠는 경향이 있어, 텍스트 분석으로 감염 여부를 추정할 수 있다는 연구가 있음
{: .ko}

- Research suggests that texts written by infected individuals tend to exhibit repetitive structures, enabling infection detection through text analysis.
{: .en}

- 感染者が書いた文章にも反復的な構造が見られる傾向があり、テキスト分析によって感染の有無を推定できるという研究がある
{: .ja}
