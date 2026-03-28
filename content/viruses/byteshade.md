---
title: "바이트셰이드 / ByteShade"
parent: "바이러스 / Viruses"
nav_order: 10
classification:
  type: "로직형 / Logic"
  vector: "이메일 / Email"
  severity: "높음 / High"
origin: "기업 내부 메일 서버의 손상된 인코딩 테이블 / Corrupted encoding table in a corporate mail server"
status: "활성 / Active"
code: "WKV-L.EM-004"
icon: "◐"
tags: ["로직형", "이메일", "판단", "그림자", "logic", "email", "judgment", "shadow"]
---

<a href="../index.md" class="home-link">Kiwiki</a>


<div class="ko" markdown="1">

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-L.EM-004</span> |
| 유형 | <span class="pill pill-type">로직형</span> |
| 전파 경로 | <span class="pill pill-vector">이메일</span> |
| 위험도 | <span class="pill pill-severity-high">높음</span> |

</div>

<div class="en" markdown="1">

| Field | Details |
|------|------|
| Code | <span class="pill pill-code">WKV-L.EM-004</span> |
| Type | <span class="pill pill-type">Logic</span> |
| Vector | <span class="pill pill-vector">Email</span> |
| Severity | <span class="pill pill-severity-high">High</span> |

</div>

<div class="ja" markdown="1">

| 項目 | 内容 |
|------|------|
| 分類コード | <span class="pill pill-code">WKV-L.EM-004</span> |
| タイプ | <span class="pill pill-type">ロジック型</span> |
| 経路 | <span class="pill pill-vector">メール</span> |
| 危険度 | <span class="pill pill-severity-high">高</span> |

</div>



---

## 개요
{: .ko}



## Overview
{: .en}



## 概要
{: .ja}

이메일 본문에 삽입된 보이지 않는 유니코드 문자(제로폭 문자 등)를 통해 감염되는 [로직형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자가 선택지 앞에 놓일 때마다, 실제로는 존재하지 않는 "그림자 선택지"가 보이며 항상 그것을 고르게 된다.
{: .ko}

A [Logic-type](../taxonomy/index.md#classification-by-type) virus transmitted through invisible Unicode characters (zero-width characters, etc.) embedded in email body text. Whenever the infected person faces a choice, a non-existent "shadow option" appears, and they invariably select it.
{: .en}

メール本文に埋め込まれた不可視のユニコード文字（ゼロ幅文字など）を介して感染する[ロジック型](../taxonomy/index.md#유형별-분류)ウイルス。感染者が選択肢を前にするたびに、実際には存在しない「影の選択肢」が見え、常にそれを選んでしまう。
{: .ja}


---

## 감염 방식
{: .ko}



## Infection Method
{: .en}



## 感染方式
{: .ja}

정상적인 비즈니스 이메일처럼 보이는 메일에 제로폭 접합자(ZWJ), 제로폭 비접합자(ZWNJ) 등 보이지 않는 유니코드 문자가 특정 패턴으로 삽입되어 있다. 이메일을 읽는 행위 자체가 해당 패턴을 뇌가 처리하게 만들어 감염이 발생한다.
{: .ko}

Normal-looking business emails contain zero-width joiners (ZWJ), zero-width non-joiners (ZWNJ), and other invisible Unicode characters arranged in specific patterns. The act of reading the email causes the brain to process the pattern, triggering infection.
{: .en}

正常なビジネスメールのように見えるメールに、ゼロ幅接合子（ZWJ）、ゼロ幅非接合子（ZWNJ）などの不可視ユニコード文字が特定のパターンで挿入されている。メールを読む行為自体が脳にそのパターンを処理させ、感染が発生する。
{: .ja}


---

## 웹 상 증상
{: .ko}



## Web Symptoms
{: .en}



## ウェブ上の症状
{: .ja}

- 이메일을 복사·붙여넣기하면 보이지 않는 문자가 의도치 않게 전파됨
- 온라인 양식에서 선택지가 하나 더 보이는 환각 발생
- 텍스트 에디터에서 커서가 보이지 않는 문자 위치에서 멈추는 현상
{: .ko}

- Invisible characters unintentionally propagate when copying and pasting emails
- Hallucinated extra option appears in online forms
- Cursor pauses at invisible character positions in text editors
{: .en}

- メールをコピー＆ペーストすると不可視文字が意図せず拡散される
- オンラインフォームで選択肢が一つ多く見える幻覚が発生
- テキストエディタでカーソルが不可視文字の位置で止まる現象
{: .ja}


---

## 발현 양상
{: .ko}



## Manifestation
{: .en}



## 発現様相
{: .ja}

- 식당 메뉴에서 없는 메뉴를 주문하려고 시도
- 선택해야 할 상황에서 "세 번째 선택지"가 항상 보임 (실제로는 두 개뿐인 경우에도)
- 그림자 선택지를 고르면 현실에서 아무 행동도 하지 않은 것이 됨—결정 자체가 무효화됨
- 말기에는 모든 선택이 그림자로 대체되어 일체의 결정을 내리지 못함
{: .ko}

- Attempts to order non-existent items from restaurant menus
- A "third option" always appears in choice situations (even when only two exist)
- Choosing the shadow option results in no action taken in reality—the decision itself is nullified
- In terminal stages, all choices are replaced by shadows, rendering all decision-making impossible
{: .en}

- レストランのメニューにない品を注文しようとする
- 選択の場面で常に「第三の選択肢」が見える（実際には二つしかない場合でも）
- 影の選択肢を選ぶと現実では何も行動していないことになり、決定自体が無効化される
- 末期にはすべての選択肢が影に置き換わり、一切の決定を下せなくなる
{: .ja}


---

## [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계
{: .ko}



## Boundary Collapse Stages
{: .en}



## 境界崩壊段階
{: .ja}

1. 이메일에서 보이지 않는 문자 패턴 처리 (웹)
2. 온라인 양식·투표 등에서 환각 선택지 출현 (웹 확산)
3. 오프라인 일상에서 그림자 선택지 발현 (현실 침투)
4. 실제 선택지와 그림자를 구별 불가 (현실 정착)
{: .ko}

1. Processing invisible character patterns in email (Web)
2. Hallucinated options appear in online forms and polls (Web spread)
3. Shadow options manifest in offline daily life (Reality breach)
4. Unable to distinguish real options from shadows (Reality anchor)
{: .en}

1. メールで不可視文字パターンを処理（ウェブ）
2. オンラインフォーム・投票等で幻覚の選択肢が出現（ウェブ拡散）
3. オフラインの日常で影の選択肢が発現（現実侵入）
4. 実際の選択肢と影が区別不能に（現実定着）
{: .ja}


---

## 대응 방법
{: .ko}



## Countermeasures
{: .en}



## 対処法
{: .ja}

- 이메일 클라이언트에서 비가시 유니코드 문자를 표시하는 기능을 활성화할 것
- 의심스러운 이메일은 일반 텍스트(plain text) 모드로 열어 확인
- 감염 초기에는 모든 결정을 "보이는 선택지만" 기준으로 타인에게 확인받는 습관이 효과적
{: .ko}

- Enable invisible Unicode character display in email clients
- Open suspicious emails in plain text mode to inspect
- In early stages, having others verify that only visible options are considered is effective
{: .en}

- メールクライアントで不可視ユニコード文字を表示する機能を有効にすること
- 疑わしいメールはプレーンテキストモードで開いて確認する
- 感染初期には、すべての決定を「見える選択肢だけ」を基準に他者に確認してもらう習慣が有効
{: .ja}


---

## 발견 기록
{: .ko}



## Discovery Log
{: .en}



## 発見記録
{: .ja}

2025년 봄, 한 대기업 인사팀에서 면접관들이 존재하지 않는 "4번 후보"에게 합격 판정을 내린 사건이 발생. 내부 이메일을 분석한 결과, 인사 관련 메일에 체계적으로 삽입된 제로폭 문자 패턴이 발견됨.
{: .ko}

Discovered in spring 2025 when interviewers at a major corporation gave passing evaluations to a non-existent "Candidate No. 4." Analysis of internal emails revealed systematically embedded zero-width character patterns in HR-related messages.
{: .en}

2025年春、ある大企業の人事部で面接官たちが存在しない「4番候補」に合格判定を下した事件が発生。社内メールを分析した結果、人事関連メールに体系的に挿入されたゼロ幅文字パターンが発見された。
{: .ja}


---

## 관련 바이러스
{: .ko}



## Related Viruses
{: .en}



## 関連ウイルス
{: .ja}

- [널위스퍼 (NullWhisper)](nullwhisper.md): 둘 다 로직형이나, 널위스퍼는 잘못된 선택으로 유도하고 바이트셰이드는 존재하지 않는 선택으로 유도한다는 차이.
- [픽셀롯 (PixelRot)](pixelrot.md): 이메일 전파 경로 공유. 바이트셰이드가 보이지 않는 문자라면, 픽셀롯은 보이지만 비정상적인 픽셀.
- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 신택스레이스 감염자는 제로폭 문자를 "코드"로 인식하여 오히려 바이트셰이드에 면역을 보이는 사례가 있음.
{: .ko}

- [NullWhisper](nullwhisper.md): Both Logic-type, but NullWhisper guides toward wrong choices while ByteShade guides toward non-existent ones.
- [PixelRot](pixelrot.md): Shares email vector. ByteShade uses invisible characters; PixelRot uses visible but abnormal pixels.
- [SyntaxWraith](syntaxwraith.md): SyntaxWraith-infected individuals sometimes show immunity to ByteShade, perceiving zero-width characters as "code."
{: .en}

- [ヌルウィスパー（NullWhisper）](nullwhisper.md)：どちらもロジック型だが、ヌルウィスパーは誤った選択へ、バイトシェイドは存在しない選択へ誘導するという違いがある。
- [ピクセルロット（PixelRot）](pixelrot.md)：メールという伝播経路を共有。バイトシェイドが不可視の文字なら、ピクセルロットは可視だが異常なピクセル。
- [シンタックスレイス（SyntaxWraith）](syntaxwraith.md)：シンタックスレイス感染者はゼロ幅文字を「コード」として認識するため、バイトシェイドに免疫を示す事例がある。
{: .ja}


---

## 참고
{: .ko}



## Notes
{: .en}



## 備考
{: .ja}

- 바이트셰이드는 표적 공격에 사용될 수 있어, 현재까지 발견된 로직형 중 유일하게 "무기화 가능성"이 논의되는 종
{: .ko}

- ByteShade can be used in targeted attacks, making it the only Logic-type virus where "weaponization potential" is discussed.
{: .en}

- バイトシェイドは標的攻撃に利用可能であり、現在発見されているロジック型の中で唯一「兵器化の可能性」が議論されている種である
{: .ja}

<div class="edit-history">
<div class="en">Last edit: 2025-12-05 by Dr.NULL (Severity reassessment)<br>Previous: 2025-06-26 by Unit_13 (New field observation added)</div>
<div class="ko">최종 편집: 2025-12-05 by Dr.NULL (위험도 재평가)<br>이전: 2025-06-26 by Unit_13 (현장 관찰 기록 추가)</div>
<div class="ja">最終編集: 2025-12-05 by Dr.NULL<br>前回: 2025-06-26 by Unit_13</div>
</div>
