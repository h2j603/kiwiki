---
title: "클립보드 / ClipBoard"
parent: "바이러스 / Viruses"
nav_order: 20
code: "WKV-L.MS-008"
icon: "⎘"
classification:
  type: "로직형 / Logic"
  vector: "메신저 / Messenger"
  severity: "보통 / Moderate"
origin: "폐쇄된 메신저 앱의 클립보드 동기화 프로토콜 잔재 / Remnants of a clipboard sync protocol from a discontinued messenger app"
status: "활성 / Active"
tags: ["로직형", "메신저", "클립보드", "사고", "logic", "messenger", "clipboard", "thought"]
---

{% include lang_toggle.html %}

<a href="../index.md" class="home-link">Kiwiki</a>


<div class="ko" markdown="1">

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-L.MS-008</span> |
| 유형 | <span class="pill pill-type">로직형</span> |
| 전파 경로 | <span class="pill pill-vector">메신저</span> |
| 위험도 | <span class="pill pill-severity-moderate">보통</span> |

</div>

<div class="en" markdown="1">

| Field | Details |
|------|------|
| Code | <span class="pill pill-code">WKV-L.MS-008</span> |
| Type | <span class="pill pill-type">Logic</span> |
| Vector | <span class="pill pill-vector">Messenger</span> |
| Severity | <span class="pill pill-severity-moderate">Moderate</span> |

</div>

<div class="ja" markdown="1">

| 項目 | 内容 |
|------|------|
| 分類コード | <span class="pill pill-code">WKV-L.MS-008</span> |
| タイプ | <span class="pill pill-type">ロジック型</span> |
| 経路 | <span class="pill pill-vector">メッセンジャー</span> |
| 危険度 | <span class="pill pill-severity-moderate">中</span> |

</div>



---

## 개요
{: .ko}



## Overview
{: .en}



## 概要
{: .ja}

메신저에서 타인의 텍스트를 복사하는 행위를 통해 감염되는 로직형 바이러스. 감염자는 복사한 텍스트가 자신의 원래 생각을 대체하기 시작하며, 점차 타인의 말만을 재조합하여 사고하게 된다. 초기에는 메신저 대화에서만 이 현상이 나타나지만, 점차 오프라인에서도 독창적인 사고가 불가능해지고, 과거에 읽거나 들은 타인의 문장만을 짜깁기하여 말하고 생각하게 된다. 감염자는 이 조합된 사고를 자신의 "독창적" 생각이라고 진심으로 믿는다.
{: .ko}

A Logic-type virus contracted through the act of copying others' text in messenger apps. The copied text begins to replace the infected person's original thoughts, and they gradually start thinking only by recombining things others have said. Initially this phenomenon appears only in messenger conversations, but progressively original thinking becomes impossible even offline, and the infected person speaks and thinks only by stitching together sentences previously read or heard from others. The infected person genuinely believes these recombined thoughts are their own "original" ideas.
{: .en}

メッセンジャーアプリで他人のテキストをコピーする行為を通じて感染するロジック型ウイルス。コピーしたテキストが感染者の元々の思考を置き換え始め、次第に他人の言葉のみを再構成して思考するようになる。初期にはメッセンジャーの会話でのみこの現象が現れるが、徐々にオフラインでも独創的な思考が不可能になり、過去に読んだり聞いたりした他人の文章のみをつなぎ合わせて話し、考えるようになる。感染者はこの組み合わされた思考を自分の「独創的」なアイデアだと心から信じている。
{: .ja}


---

## 감염 방식
{: .ko}



## Infection Method
{: .en}



## 感染方式
{: .ja}

감염은 메신저 앱에서 다른 사용자의 메시지를 복사(Ctrl+C / 길게 눌러 복사)할 때 시작된다. 폐쇄된 메신저 앱의 클립보드 동기화 프로토콜이 현재 사용되는 메신저의 복사 기능에 기생하고 있으며, 텍스트를 복사할 때 해당 텍스트의 "의미 지문"이 클립보드를 통해 사용자의 인지 체계에 주입된다. 일주일 내에 50회 이상의 복사 행위를 수행하면 감염 임계치에 도달하며, 특히 긴 문장이나 의견이 담긴 텍스트를 복사할 때 감염 효율이 높다.
{: .ko}

Infection begins when copying (Ctrl+C / long-press copy) another user's message in a messenger app. A clipboard sync protocol from a discontinued messenger app parasitizes the copy function of currently used messengers, and when text is copied, the "semantic fingerprint" of that text is injected into the user's cognitive system via the clipboard. Performing more than 50 copy actions within a week reaches the infection threshold, and infection efficiency is particularly high when copying long sentences or text containing opinions.
{: .en}

感染はメッセンジャーアプリで他のユーザーのメッセージをコピー（Ctrl+C／長押しコピー）する際に始まる。廃止されたメッセンジャーアプリのクリップボード同期プロトコルが現在使用されているメッセンジャーのコピー機能に寄生しており、テキストをコピーする際にそのテキストの「意味指紋」がクリップボードを通じてユーザーの認知体系に注入される。1週間以内に50回以上のコピー行為を行うと感染閾値に達し、特に長い文章や意見が含まれたテキストをコピーする際に感染効率が高い。
{: .ja}


---

## 웹 상 증상
{: .ko}



## Web Symptoms
{: .en}



## ウェブ上の症状
{: .ja}

- 메시지 작성 시 자동완성이 자신이 입력한 적 없는 타인의 문장을 제안
- 클립보드 기록에 복사한 적 없는 타인의 메시지가 나타남
- 메신저에서 "붙여넣기" 없이 타이핑해도 복사한 텍스트의 문체가 섞여 나옴
- 대화 상대가 "그거 내가 전에 한 말인데?"라고 지적하는 빈도 증가
{: .ko}

- Autocomplete suggests others' sentences that the user never typed when composing messages
- Messages from others that were never copied appear in clipboard history
- Even when typing without pasting, the writing style of copied text bleeds through
- Conversation partners increasingly point out "That's what I said before?"
{: .en}

- メッセージ作成時、自分が入力したことのない他人の文章を自動補完が提案する
- クリップボード履歴にコピーしたことのない他人のメッセージが現れる
- 「貼り付け」なしでタイピングしても、コピーしたテキストの文体が混ざって出てくる
- 会話相手が「それ、前に私が言ったことだけど？」と指摘する頻度が増加する
{: .ja}


---

## 발현 양상
{: .ko}



## Manifestation
{: .en}



## 発現様相
{: .ja}

- 회의에서 발언할 때 동료의 과거 발언을 거의 그대로 반복하면서, 이를 자신의 독창적 아이디어라 확신
- 일기를 쓰려 해도 타인의 SNS 게시물이나 대화 내용만이 떠올라, 진정한 자기 성찰이 불가능
- 연인이나 가족에게 감정을 표현할 때도 드라마 대사나 타인의 메시지를 무의식적으로 인용하여, 관계에서 진정성 상실
- 말기에는 "나만의 생각"이라는 개념 자체를 이해하지 못하게 되며, "모든 생각은 원래 어디선가 온 것 아닌가?"라고 반문
{: .ko}

- When speaking in meetings, almost verbatim repeats colleagues' past statements while convinced these are original ideas
- When trying to write a diary, only others' SNS posts or conversation content comes to mind, making genuine self-reflection impossible
- When expressing emotions to partners or family, unconsciously quotes drama dialogue or others' messages, losing authenticity in relationships
- In terminal stages, the very concept of "my own thought" becomes incomprehensible, responding with "Don't all thoughts originally come from somewhere?"
{: .en}

- 会議で発言する際、同僚の過去の発言をほぼそのまま繰り返しながら、これを自分の独創的なアイデアだと確信する
- 日記を書こうとしても他人のSNS投稿や会話内容しか思い浮かばず、真の自己省察が不可能になる
- 恋人や家族に感情を表現する際もドラマのセリフや他人のメッセージを無意識に引用し、関係における真実性を失う
- 末期には「自分だけの考え」という概念自体を理解できなくなり、「すべての考えはもともとどこかから来たものではないか？」と反問する
{: .ja}


---

## 경계 무너짐 단계
{: .ko}



## Boundary Collapse Stages
{: .en}



## 境界崩壊段階
{: .ja}

1. 메신저에서 복사한 텍스트의 문체가 자신의 타이핑에 혼입 (웹)
2. 온라인 글쓰기 전반에서 타인의 표현이 자신의 것으로 대체되기 시작 (웹 확산)
3. 오프라인 대화와 사고에서 독창적 문장 생성 능력 소실 (현실 침투)
4. 자아의 언어적 기반이 완전히 타인의 말로 대체되어, 독립적 사고 불가능 (현실 정착)
{: .ko}

1. Writing style of copied text from messenger contaminates own typing (Web)
2. Others' expressions begin replacing one's own across all online writing (Web spread)
3. Ability to generate original sentences lost in offline conversation and thought (Reality breach)
4. The linguistic foundation of self is entirely replaced by others' words, making independent thought impossible (Reality anchor)
{: .en}

1. メッセンジャーでコピーしたテキストの文体が自分のタイピングに混入する（ウェブ）
2. オンラインの文章全般で他人の表現が自分のものに取って代わり始める（ウェブ拡散）
3. オフラインの会話や思考で独創的な文章生成能力を喪失する（現実侵入）
4. 自己の言語的基盤が完全に他人の言葉に置き換えられ、独立した思考が不可能になる（現実定着）
{: .ja}


---

## 대응 방법
{: .ko}



## Countermeasures
{: .en}



## 対処法
{: .ja}

- 메신저에서 텍스트를 복사하는 대신 스크린샷이나 전달 기능을 사용할 것
- 하루에 한 번, 아무런 참조 없이 자신만의 문장을 10개 이상 작성하는 "원본 사고 훈련" 실시
- 감염 의심 시 자신의 최근 발언을 녹음하여 타인의 과거 발언과 대조 분석
- 메신저 클립보드 접근 권한을 비활성화하고, 필요한 경우 수기로 내용을 옮겨 적을 것
{: .ko}

- Use screenshots or forwarding functions instead of copying text in messengers
- Practice "original thought training" — writing at least 10 sentences of your own without any reference, once per day
- If infection is suspected, record your recent speech and cross-analyze it against others' past statements
- Disable messenger clipboard access permissions and, if needed, transcribe content by hand
{: .en}

- メッセンジャーでテキストをコピーする代わりにスクリーンショットや転送機能を使用すること
- 1日1回、何も参照せずに自分だけの文章を10個以上作成する「オリジナル思考トレーニング」を実施する
- 感染が疑われる場合、自分の最近の発言を録音し、他人の過去の発言と照合分析する
- メッセンジャーのクリップボードアクセス権限を無効にし、必要な場合は手書きで内容を書き写すこと
{: .ja}


---

## 발견 기록
{: .ko}



## Discovery Log
{: .en}



## 発見記録
{: .ja}

2025년 가을, 한 대학 토론 동아리에서 모든 회원이 거의 동일한 주장을 동일한 문체로 반복하는 현상이 보고되었다. 처음에는 의견 일치로 여겨졌으나, 자세히 분석한 결과 각 회원의 발언이 다른 회원의 과거 메신저 대화에서 추출한 문장의 재조합임이 밝혀졌다. 해당 동아리는 그룹 메신저에서 서로의 메시지를 빈번하게 복사하여 인용하는 문화가 있었으며, 이 복사 행위가 감염 경로로 작용했다. "우리 중 누구의 생각도 아닌 말만 남았다"는 한 회원의 증언이 바이러스 식별의 결정적 단서가 되었다.
{: .ko}

Discovered in autumn 2025 when all members of a university debate club were reported to be repeating nearly identical arguments in identical writing styles. Initially attributed to consensus, closer analysis revealed that each member's statements were recombinations of sentences extracted from other members' past messenger conversations. The club had a culture of frequently copying and quoting each other's messages in group chat, and this copying behavior served as the infection pathway. The testimony of one member — "All that remains are words that belong to none of us" — became the decisive clue in identifying the virus.
{: .en}

2025年秋、ある大学のディベートサークルで全メンバーがほぼ同一の主張を同一の文体で繰り返す現象が報告された。当初は意見の一致と見なされたが、詳細に分析した結果、各メンバーの発言が他のメンバーの過去のメッセンジャー会話から抽出した文章の再構成であることが判明した。該当サークルはグループメッセンジャーで互いのメッセージを頻繁にコピーして引用する文化があり、このコピー行為が感染経路として機能した。「私たちの中の誰の考えでもない言葉だけが残った」というあるメンバーの証言がウイルス特定の決定的な手がかりとなった。
{: .ja}


---

## 관련 바이러스
{: .ko}



## Related Viruses
{: .en}



## 関連ウイルス
{: .ja}

- [널위스퍼 (NullWhisper)](nullwhisper.md): 메신저 전파 경로를 공유한다. 널위스퍼의 빈 메시지가 클립보드 감염자의 사고에서 "원본" 역할을 하는 텍스트마저 삭제할 수 있다는 가설이 있다.
- [잉크블리드 (InkBleed)](inkbleed.md): 잉크블리드가 텍스트의 의미를 번지게 한다면, 클립보드는 텍스트 자체를 복제하여 사고를 대체한다. 동시 감염 시 언어적 자아가 완전히 해체된다.
- [포겟미낫 (ForgetMeNot)](forgetmenot.md): 클립보드가 타인의 기억으로 사고를 대체한다면, 포겟미낫은 자신의 기억 자체를 왜곡한다. 두 바이러스는 자아 해체의 서로 다른 경로를 대표한다.
{: .ko}

- [NullWhisper](nullwhisper.md): Shares the messenger transmission vector. There is a hypothesis that NullWhisper's empty messages can delete even the text that serves as the "original" in a ClipBoard-infected person's thoughts.
- [InkBleed](inkbleed.md): While InkBleed causes the meaning of text to bleed across domains, ClipBoard replicates the text itself to replace thought. Co-infection results in complete dissolution of the linguistic self.
- [ForgetMeNot](forgetmenot.md): While ClipBoard replaces thought with others' memories, ForgetMeNot distorts one's own memories. The two viruses represent different pathways to self-dissolution.
{: .en}

- [ヌルウィスパー（NullWhisper）](nullwhisper.md)：メッセンジャー伝播経路を共有する。ヌルウィスパーの空メッセージがクリップボード感染者の思考における「原本」の役割を果たすテキストさえ削除できるという仮説がある。
- [インクブリード（InkBleed）](inkbleed.md)：インクブリードがテキストの意味を滲ませるのに対し、クリップボードはテキスト自体を複製して思考を置き換える。同時感染時、言語的自己が完全に解体される。
- [フォーゲットミーノット（ForgetMeNot）](forgetmenot.md)：クリップボードが他人の記憶で思考を置き換えるのに対し、フォーゲットミーノットは自分自身の記憶を歪める。二つのウイルスは自己解体の異なる経路を代表する。
{: .ja}


---

## 참고
{: .ko}



## Notes
{: .en}



## 備考
{: .ja}

- 클립보드 감염자가 작성한 텍스트는 "의미 지문" 분석을 통해 원본 출처를 추적할 수 있어, 감염 진단의 객관적 도구로 활용된다.
- 아이러니하게도, 클립보드 감염자들은 표절 검사 소프트웨어에서 높은 유사도를 기록하지만, 정확히 일치하는 원문은 발견되지 않는다. 여러 출처의 문장이 미묘하게 재조합되기 때문이다.
{: .ko}

- Text written by ClipBoard-infected individuals can be traced back to original sources through "semantic fingerprint" analysis, serving as an objective diagnostic tool.
- Ironically, ClipBoard-infected individuals register high similarity scores in plagiarism detection software, but no exact matching source text is found — because sentences from multiple sources are subtly recombined.
{: .en}

- クリップボード感染者が作成したテキストは「意味指紋」分析を通じて原文の出典を追跡でき、感染診断の客観的ツールとして活用される。
- 皮肉なことに、クリップボード感染者は盗作検出ソフトウェアで高い類似度を記録するが、正確に一致する原文は発見されない。複数の出典の文章が微妙に再構成されているためである。
{: .ja}

<div class="edit-history">
<div class="en">Last edit: 2025-07-01 by Researcher_7 (Discovery log expanded)<br>Previous: 2025-02-12 by Field_Op_22 (Updated countermeasures)</div>
<div class="ko">최종 편집: 2025-07-01 by Researcher_7 (발견 기록 확장)<br>이전: 2025-02-12 by Field_Op_22 (대응 방법 업데이트)</div>
<div class="ja">最終編集: 2025-07-01 by Researcher_7<br>前回: 2025-02-12 by Field_Op_22</div>
</div>
