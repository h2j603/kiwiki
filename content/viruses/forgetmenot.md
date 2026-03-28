---
title: "포겟미낫 / ForgetMeNot"
nav_order: 13
classification:
  type: "인지형 / Cognitive"
  vector: "이메일 / Email"
  severity: "치명적 / Critical"
origin: "자동 발송된 뉴스레터의 손상된 헤더 / Corrupted header in an auto-generated newsletter"
status: "활성 / Active"
code: "WKV-C.EM-003"
icon: "⌫"
tags: ["인지형", "이메일", "기억", "삭제", "cognitive", "email", "memory", "deletion"]
---

{% include lang_toggle.html %}

<a href="/kiwiki/" class="home-link">⌂</a>

<div class="warning-banner en">SEVERITY: CRITICAL — This virus causes irreversible transformation</div>
<div class="warning-banner ko">위험도: 치명적 — 이 바이러스는 비가역적 변형을 유발합니다</div>
<div class="warning-banner ja">危険度: 致命的 — このウイルスは不可逆的変形を引き起こします</div>


<div class="ko" markdown="1">

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-C.EM-003</span> |
| 유형 | <span class="pill pill-type">인지형</span> |
| 전파 경로 | <span class="pill pill-vector">이메일</span> |
| 위험도 | <span class="pill pill-severity-critical">치명적</span> |

</div>

<div class="en" markdown="1">

| Field | Details |
|------|------|
| Code | <span class="pill pill-code">WKV-C.EM-003</span> |
| Type | <span class="pill pill-type">Cognitive</span> |
| Vector | <span class="pill pill-vector">Email</span> |
| Severity | <span class="pill pill-severity-critical">Critical</span> |

</div>

<div class="ja" markdown="1">

| 項目 | 内容 |
|------|------|
| 分類コード | <span class="pill pill-code">WKV-C.EM-003</span> |
| タイプ | <span class="pill pill-type">認知型</span> |
| 経路 | <span class="pill pill-vector">メール</span> |
| 危険度 | <span class="pill pill-severity-critical">致命的</span> |

</div>

<details class="toc-box" open>
<summary><span class="ko">목차</span><span class="en">Contents</span><span class="ja">目次</span></summary>
<div class="toc-nav" markdown="1">
* TOC
{:toc}
</div>
</details>

---

## 개요
{: .ko}



## Overview
{: .en}



## 概要
{: .ja}

특정 뉴스레터 형식의 이메일을 열면 감염되는 [인지형](../taxonomy/index.md#유형별-분류) 바이러스. 이름과 달리, 감염자의 기억을 가장 최근 것부터 역순으로 삭제한다. "나를 잊지 마"라는 이름은 감염자가 마지막까지 반복하는 말에서 유래했다.
{: .ko}

A [Cognitive-type](../taxonomy/index.md#classification-by-type) virus contracted by opening emails in a specific newsletter format. Contrary to its name, it deletes the infected person's memories in reverse chronological order, starting from the most recent. The name "Forget Me Not" originates from the phrase infected individuals repeat until the very end.
{: .en}

特定のニュースレター形式のメールを開くと感染する[認知型](../taxonomy/index.md#유형별-분류)ウイルス。名前に反して、感染者の記憶を最も新しいものから逆順に削除していく。「フォゲットミーノット（私を忘れないで）」という名前は、感染者が最後まで繰り返す言葉に由来する。
{: .ja}


---

## 감염 방식
{: .ko}



## Infection Method
{: .en}



## 感染方式
{: .ja}

뉴스레터 형태의 이메일에서 "구독 해지" 링크의 URL 구조가 특정 해시 패턴을 포함할 때, 해당 이메일을 끝까지 스크롤하는 행위로 감염된다. 이메일 내용 자체는 무해하며, URL의 해시 패턴이 브라우저의 프리페치 기능을 통해 처리될 때 감염이 발생한다.
{: .ko}

Infection occurs when scrolling to the bottom of a newsletter-format email whose "unsubscribe" link URL contains a specific hash pattern. The email content itself is harmless; infection occurs when the URL's hash pattern is processed through the browser's prefetch function.
{: .en}

ニュースレター形式のメールで「配信停止」リンクのURL構造が特定のハッシュパターンを含む場合、そのメールを最後までスクロールする行為で感染する。メールの内容自体は無害であり、URLのハッシュパターンがブラウザのプリフェッチ機能を通じて処理される際に感染が発生する。
{: .ja}


---

## 웹 상 증상
{: .ko}



## Web Symptoms
{: .en}



## ウェブ上の症状
{: .ja}

- 최근 읽은 이메일의 내용이 기억나지 않음
- 브라우저 히스토리에 있는 사이트를 방문한 기억이 없음
- 비밀번호를 자꾸 틀리게 됨 (최근에 변경한 기억이 소실)
{: .ko}

- Unable to recall contents of recently read emails
- No memory of visiting sites in browser history
- Repeatedly entering wrong passwords (memory of recent changes is lost)
{: .en}

- 最近読んだメールの内容が思い出せない
- ブラウザ履歴にあるサイトを訪問した記憶がない
- パスワードを何度も間違える（最近変更した記憶が消失）
{: .ja}


---

## 발현 양상
{: .ko}



## Manifestation
{: .en}



## 発現様相
{: .ja}

- 오늘 한 일을 저녁에 기억하지 못함
- 며칠 전 대화 내용 소실 → 주 단위 기억 소실 → 월 단위 기억 소실로 진행
- 기억이 삭제되는 순간을 인지하지 못하며, 빈 공간을 오래된 기억으로 자동 채움
- 말기에는 수년치 기억이 소실되어 자아 정체성이 과거의 자신으로 퇴행
{: .ko}

- Unable to remember what was done today by evening
- Days-old conversation memories lost → weekly memories lost → monthly memories lost
- Unaware of the moment memories are deleted; gaps are automatically filled with older memories
- In terminal stages, years of memory are lost and self-identity regresses to a past version
{: .en}

- 今日したことを夕方には思い出せない
- 数日前の会話記憶の消失 → 週単位の記憶消失 → 月単位の記憶消失へと進行
- 記憶が削除される瞬間を認知できず、空白を古い記憶で自動的に埋める
- 末期には数年分の記憶が消失し、自我のアイデンティティが過去の自分へ退行する
{: .ja}


---

## [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계
{: .ko}



## Boundary Collapse Stages
{: .en}



## 境界崩壊段階
{: .ja}

1. 최근 이메일·웹 활동 기억 소실 (웹)
2. 디지털 활동 전반의 기억 소실 (웹 확산)
3. 오프라인 최근 기억 소실 시작 (현실 침투)
4. 역순 기억 삭제가 가속화, 비가역적 (현실 정착)
{: .ko}

1. Recent email and web activity memories lost (Web)
2. Memory loss across all digital activities (Web spread)
3. Recent offline memories begin disappearing (Reality breach)
4. Reverse-chronological memory deletion accelerates irreversibly (Reality anchor)
{: .en}

1. 最近のメール・ウェブ活動の記憶が消失（ウェブ）
2. デジタル活動全般の記憶消失（ウェブ拡散）
3. オフラインの最近の記憶が消え始める（現実侵入）
4. 逆順の記憶削除が加速し、不可逆的に（現実定着）
{: .ja}


---

## 대응 방법
{: .ko}



## Countermeasures
{: .en}



## 対処法
{: .ja}

- 뉴스레터 이메일을 끝까지 스크롤하지 말 것—특히 구독 해지 링크 부근
- 이메일 클라이언트의 프리페치 기능을 비활성화
- 감염 의심 시 즉시 일기를 작성하기 시작하여 기억 소실 속도를 추적
- 초기 단계에서는 사진, 영상 등 외부 기록물에 반복 노출되면 기억 삭제가 둔화됨
{: .ko}

- Do not scroll to the bottom of newsletter emails—especially near unsubscribe links
- Disable prefetch functionality in email clients
- If infection is suspected, immediately begin keeping a diary to track memory loss rate
- In early stages, repeated exposure to external records (photos, videos) slows memory deletion
{: .en}

- ニュースレターのメールを最後までスクロールしないこと——特に配信停止リンク付近
- メールクライアントのプリフェッチ機能を無効にする
- 感染が疑われる場合、直ちに日記をつけ始めて記憶消失の速度を追跡する
- 初期段階では写真や映像などの外部記録に繰り返し触れることで記憶の削除が鈍化する
{: .ja}


---

## 발견 기록
{: .ko}



## Discovery Log
{: .en}



## 発見記録
{: .ja}

2025년 가을, 한 연구원이 "나는 오늘 무엇을 했는지 모르겠다. 어제도 모르겠다. 그저께도"라는 글을 SNS에 올림. 동료들의 증언에 따르면 해당 연구원은 일주일 전까지 정상이었으며, 공통적으로 같은 뉴스레터를 구독 중이었던 다른 연구원 3명도 유사 증상을 보임.
{: .ko}

Discovered in autumn 2025 when a researcher posted on social media: "I don't know what I did today. Or yesterday. Or the day before." Colleagues testified the researcher was normal until a week prior, and three other researchers who shared the same newsletter subscription exhibited similar symptoms.
{: .en}

2025年秋、ある研究者が「今日何をしたかわからない。昨日もわからない。一昨日も」とSNSに投稿。同僚の証言によれば、その研究者は一週間前まで正常であり、同じニュースレターを購読していた他の研究者3名にも類似の症状が見られた。
{: .ja}


---

## 관련 바이러스
{: .ko}



## Related Viruses
{: .en}



## 関連ウイルス
{: .ja}

- [에코루프 (EchoLoop)](echoloop.md): 에코루프는 같은 것을 반복하고, 포겟미낫은 했던 것을 잊는다. 동시 감염 시 "기억은 없는데 반복은 하는" 극단적 상태가 된다.
- [데드스크롤 (DeadScroll)](deadscroll.md): 데드스크롤이 시간의 "빈틈"을 만든다면, 포겟미낫은 시간의 "삭제"를 수행. 증상이 유사해 초기 진단에서 혼동되기 쉬움.
- [바이트셰이드 (ByteShade)](byteshade.md): 이메일 전파 경로 공유. 같은 이메일에 두 바이러스가 동시에 존재하는 사례가 보고됨.
{: .ko}

- [EchoLoop](echoloop.md): EchoLoop repeats the same things; ForgetMeNot forgets things done. Co-infection creates an extreme state of "repeating without any memory."
- [DeadScroll](deadscroll.md): DeadScroll creates "gaps" in time; ForgetMeNot performs "deletion" of time. Similar symptoms make early diagnosis prone to confusion.
- [ByteShade](byteshade.md): Shares email vector. Cases of both viruses coexisting in the same email have been reported.
{: .en}

- [エコループ（EchoLoop）](echoloop.md)：エコループは同じことを繰り返し、フォゲットミーノットはしたことを忘れる。同時感染すると「記憶がないのに繰り返す」極端な状態になる。
- [デッドスクロール（DeadScroll）](deadscroll.md)：デッドスクロールが時間の「隙間」を作るなら、フォゲットミーノットは時間の「削除」を行う。症状が類似するため初期診断で混同されやすい。
- [バイトシェイド（ByteShade）](byteshade.md)：メールという伝播経路を共有。同一のメールに両ウイルスが同時に存在する事例が報告されている。
{: .ja}


---

## 참고
{: .ko}



## Notes
{: .en}



## 備考
{: .ja}

- "나를 잊지 마(Forget Me Not)"라는 이름은 감염자가 기억을 잃어가면서도 반복하는 마지막 말에서 유래. 이 말조차 잊게 되면 말기로 판정
- 기억이 삭제된 빈 공간을 뇌가 어떻게 "채우는지"에 대한 연구가 진행 중이며, 일부 감염자는 다른 감염자의 기억을 대신 채운다는 미확인 보고가 있음
{: .ko}

- The name originates from the last words infected individuals repeat as they lose memories. When even these words are forgotten, the case is classified as terminal.
- Research is ongoing about how the brain "fills" deleted memory spaces; unconfirmed reports suggest some infected individuals fill gaps with other infected people's memories.
{: .en}

- 「私を忘れないで（Forget Me Not）」という名前は、感染者が記憶を失いながらも繰り返す最後の言葉に由来する。この言葉すら忘れると末期と判定される
- 記憶が削除された空白を脳がどのように「埋める」かについて研究が進行中であり、一部の感染者は他の感染者の記憶で空白を埋めるという未確認の報告がある
{: .ja}

<div class="edit-history">
<div class="en">Last edit: 2025-11-28 by Unit_13 (New field observation added)<br>Previous: 2025-01-19 by Field_Op_22 (Revised boundary collapse stages)</div>
<div class="ko">최종 편집: 2025-11-28 by Unit_13 (현장 관찰 기록 추가)<br>이전: 2025-01-19 by Field_Op_22 (경계 무너짐 단계 수정)</div>
<div class="ja">最終編集: 2025-11-28 by Unit_13<br>前回: 2025-01-19 by Field_Op_22</div>
</div>
