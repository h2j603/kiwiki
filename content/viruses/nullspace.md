---
title: "널스페이스 / NullSpace"
parent: "바이러스 / Viruses"
nav_order: 32
code: "WKV-E.MS-008"
icon: "☐"
classification:
  type: "환경형 / Environmental"
  vector: "메신저 / Messenger"
  severity: "높음 / High"
origin: "널 문자(\\0)가 삽입된 메신저 메시지의 비가시적 데이터 페이로드 / Invisible data payloads in messenger messages embedded with null characters (\\0)"
status: "활성 / Active"
tags: ["환경형", "메신저", "투명", "소실", "environmental", "messenger", "transparency", "disappearance"]
---

| 항목 | 내용 |
|------|------|
| 아이콘 | ☐ |
| 분류 코드 | <span class="pill pill-code">WKV-E.MS-008</span> |
| 유형 | <span class="pill pill-type">환경형 / Environmental</span> |
| 전파 경로 | <span class="pill pill-vector">메신저 / Messenger</span> |
| 위험도 | <span class="pill pill-severity-high">높음 / High</span> |
| 상태 | <span class="pill pill-active">활성 / Active</span> |

## 개요
{: .ko}

## Overview
{: .en}

## 概要
{: .ja}

널 문자(\0)가 숨겨진 채 삽입된 메신저 메시지를 수신하면 감염되는 환경형 바이러스. 감염자의 방에 있는 물체들이 점진적으로 반투명해지고, 이어서 완전히 투명해지며, 최종적으로는 보이지 않게 된다. 물체의 물리적 존재는 그대로 유지되어 만지거나 부딪힐 수 있지만 시각적으로는 완전히 소실된다. 보이지 않는 테이블에 부딪히고, 보이지 않는 의자에 앉으며, 보이지 않는 벽에 막히는 기이한 상황이 일상이 된다. 널 문자가 데이터에서 "보이지 않는 공백"을 만드는 것처럼, 바이러스가 현실에서 "보이지 않는 물질"을 만들어낸다.
{: .ko}

An Environmental-type virus contracted by receiving messenger messages with hidden null characters (\0) embedded within them. Objects in the infected person's room gradually become translucent, then fully transparent, and ultimately invisible. The physical existence of objects is fully preserved—they can be touched and bumped into—but they are completely lost visually. The bizarre reality of colliding with invisible tables, sitting in invisible chairs, and being blocked by invisible walls becomes everyday life. Just as null characters create "invisible blanks" in data, the virus creates "invisible matter" in reality.
{: .en}

ヌル文字（\0）が隠されて挿入されたメッセンジャーメッセージを受信すると感染する環境型ウイルス。感染者の部屋にある物体が段階的に半透明になり、続いて完全に透明になり、最終的には見えなくなる。物体の物理的存在はそのまま維持され、触ったりぶつかったりできるが、視覚的には完全に消失する。見えないテーブルにぶつかり、見えない椅子に座り、見えない壁に阻まれるという奇妙な状況が日常となる。ヌル文字がデータ内で「見えない空白」を作るように、ウイルスが現実で「見えない物質」を生み出す。
{: .ja}

## 감염 방식
{: .ko}

## Infection Method
{: .en}

## 感染方式
{: .ja}

메신저를 통해 수신한 메시지 내에 텍스트 사이에 널 문자(\0)가 삽입되어 있을 때 감염된다. 널 문자는 화면에 표시되지 않으므로 메시지는 정상적으로 보이지만, 메시지를 복사·붙여넣기하면 비정상적인 공백이 나타나거나 텍스트가 잘리는 현상으로 확인할 수 있다. 널 문자가 포함된 메시지를 3개 이상 수신하면 감염이 시작되며, 메시지 내 널 문자의 수가 많을수록 투명화 진행 속도가 빨라진다. 감염자가 다른 사람에게 메시지를 전달할 때 무의식적으로 널 문자가 삽입되어 전파가 이루어진다.
{: .ko}

Infection occurs when null characters (\0) are embedded between text within messages received via messenger. Since null characters are not displayed on screen, messages appear normal, but copying and pasting the message reveals abnormal spacing or text truncation. Infection begins after receiving three or more messages containing null characters, and the more null characters within messages, the faster the transparency progression. When the infected person forwards messages to others, null characters are unconsciously inserted, enabling propagation.
{: .en}

メッセンジャーを通じて受信したメッセージ内のテキストの間にヌル文字（\0）が挿入されている場合に感染する。ヌル文字は画面に表示されないためメッセージは正常に見えるが、メッセージをコピー＆ペーストすると異常なスペースが現れたりテキストが切れる現象で確認できる。ヌル文字が含まれたメッセージを3つ以上受信すると感染が始まり、メッセージ内のヌル文字の数が多いほど透明化の進行速度が速くなる。感染者が他の人にメッセージを転送する際、無意識にヌル文字が挿入され伝播が行われる。
{: .ja}

## 웹 상 증상
{: .ko}

## Web Symptoms
{: .en}

## ウェブ上の症状
{: .ja}

- 메신저 대화에서 특정 단어나 문장이 보였다가 사라지는 "깜빡임" 현상 발생
- 웹페이지의 이미지나 UI 요소가 간헐적으로 투명하게 렌더링됨
- 파일 탐색기에서 파일 아이콘이 점점 흐려지다가 보이지 않게 됨—파일은 존재하나 시각적으로 표시되지 않음
{: .ko}

- "Flickering" phenomenon where specific words or sentences appear and disappear in messenger conversations
- Images and UI elements on web pages are intermittently rendered as transparent
- File icons in the file explorer gradually fade and become invisible—files exist but are not visually displayed
{: .en}

- メッセンジャーの会話で特定の単語や文が見えたり消えたりする「ちらつき」現象が発生する
- ウェブページの画像やUI要素が断続的に透明にレンダリングされる
- ファイルエクスプローラーでファイルアイコンが徐々にぼやけて見えなくなる——ファイルは存在するが視覚的に表示されない
{: .ja}

## 발현 양상
{: .ko}

## Manifestation
{: .en}

## 発現様相
{: .ja}

- 감염자 방의 작은 물건(펜, 리모컨, 열쇠 등)부터 반투명해지기 시작하여, 유리처럼 투명하게 변함
- 투명화는 작은 물건에서 큰 물건으로 진행—책상, 의자, 침대, 가전제품 순서로 시각적 소실
- 물체의 물리적 속성(질량, 경도, 온도)은 완전히 유지되어, 보이지 않는 물체에 부딪혀 부상을 입는 사례가 다발
- 말기에는 방의 벽, 바닥, 천장까지 투명해져 감염자의 시야에 자신만 허공에 떠 있는 것처럼 보이며, 실제로는 방 안에 모든 것이 존재하지만 아무것도 보이지 않는 상태에 도달
{: .ko}

- Small objects in the infected person's room (pens, remotes, keys, etc.) begin turning translucent first, becoming glass-like in transparency
- Transparency progresses from small to large objects—desk, chair, bed, appliances disappear visually in sequence
- Physical properties of objects (mass, hardness, temperature) are fully preserved, leading to frequent injuries from colliding with invisible objects
- In terminal stages, the room's walls, floor, and ceiling also become transparent, making the infected person appear to be floating in empty air, when in reality everything in the room still exists but nothing is visible
{: .en}

- 感染者の部屋の小さな物（ペン、リモコン、鍵など）から半透明になり始め、ガラスのように透明に変わる
- 透明化は小さな物から大きな物へ進行する——デスク、椅子、ベッド、家電の順で視覚的に消失する
- 物体の物理的特性（質量、硬度、温度）は完全に維持されるため、見えない物体にぶつかって怪我をする事例が多発する
- 末期には部屋の壁、床、天井まで透明になり、感染者の視野には自分だけが虚空に浮いているように見えるが、実際には部屋にすべてが存在しているのに何も見えない状態に至る
{: .ja}

## 경계 무너짐 단계
{: .ko}

## Boundary Collapse Stages
{: .en}

## 境界崩壊段階
{: .ja}

1. 메신저 UI 요소와 디지털 파일이 간헐적으로 투명화—디지털 환경에서만 "보이지 않음" 발생 (웹 침투)
2. 모니터 화면의 일부 영역이 투명하게 표시됨—화면 너머의 책상이 비쳐 보이는 듯한 착시 (웹-현실 경계)
3. 감염자 공간의 물리적 물체들이 점진적으로 투명해져 시각적으로 소실 (현실 침투)
4. 감염자 자신의 신체 일부가 투명해지기 시작—거울에서 손가락 끝, 발끝이 보이지 않음 (현실 정착)
{: .ko}

1. Messenger UI elements and digital files intermittently become transparent—"invisibility" occurs only in the digital environment (Web infiltration)
2. Parts of the monitor screen display as transparent—an illusion as if the desk behind the screen is visible through it (Web-reality boundary)
3. Physical objects in the infected person's space gradually become transparent and are visually lost (Reality breach)
4. Parts of the infected person's own body begin turning transparent—fingertips and toes become invisible in mirrors (Reality anchor)
{: .en}

1. メッセンジャーのUI要素とデジタルファイルが断続的に透明化する——デジタル環境でのみ「見えない」が発生する（ウェブ浸透）
2. モニター画面の一部領域が透明に表示される——画面越しにデスクが透けて見えるような錯覚（ウェブ・現実境界）
3. 感染者空間の物理的物体が段階的に透明になり視覚的に消失する（現実侵入）
4. 感染者自身の身体の一部が透明になり始める——鏡で指先やつま先が見えなくなる（現実定着）
{: .ja}

## 대응 방법
{: .ko}

## Countermeasures
{: .en}

## 対処法
{: .ja}

- 출처가 불분명하거나 의심스러운 메시지를 수신하면, 텍스트를 복사하여 텍스트 에디터에 붙여넣기하고 널 문자 유무를 확인할 것
- 감염 초기에 중요한 물건에 형광 페인트나 촉각 표식(볼록 스티커 등)을 부착하면 투명화 후에도 위치를 파악할 수 있음
- 감염 공간에 적외선 감지 시스템을 설치하면 보이지 않는 물체의 위치를 추적할 수 있음—물체의 열적 특성은 보존되므로
- 메신저 앱에 널 문자 필터링 기능을 제공하는 보안 플러그인 사용이 예방에 효과적이나, 현재 모든 널 문자를 검출하는 완벽한 솔루션은 존재하지 않음
{: .ko}

- When receiving messages from unclear or suspicious sources, copy the text and paste into a text editor to check for null characters
- In early infection stages, attaching fluorescent paint or tactile markers (raised stickers, etc.) to important objects allows location identification even after transparency
- Installing infrared detection systems in the infected space can track the location of invisible objects—since thermal properties of objects are preserved
- Security plugins that provide null character filtering for messenger apps are effective for prevention, but no perfect solution currently exists that detects all null characters
{: .en}

- 出所が不明確または疑わしいメッセージを受信した場合、テキストをコピーしてテキストエディタに貼り付け、ヌル文字の有無を確認すること
- 感染初期に重要な物に蛍光ペイントや触覚マーカー（凸シールなど）を貼付すれば、透明化後も位置を把握できる
- 感染空間に赤外線検知システムを設置すれば見えない物体の位置を追跡できる——物体の熱的特性は保存されるため
- メッセンジャーアプリにヌル文字フィルタリング機能を提供するセキュリティプラグインの使用が予防に効果的だが、現在すべてのヌル文字を検出する完璧なソリューションは存在しない
{: .ja}

## 발견 기록
{: .ko}

## Discovery Log
{: .en}

## 発見記録
{: .ja}

2025년 겨울, 한 프로그래머가 익명의 메시지를 수신한 후 자신의 작업 공간에서 마우스가 "사라졌다"고 보고했다. 동료가 확인해보니 마우스는 제자리에 있었으나, 감염자에게는 보이지 않았다. 이후 키보드, 모니터 스탠드, 책상 위의 물건들이 순차적으로 투명해졌다. 감염자의 메신저 기록을 분석한 결과, 수신한 메시지 내에 대량의 널 문자가 삽입되어 있었음이 확인되었다. 결정적으로, 감염자가 "보이지 않는 의자"에 앉으려다 빗나가 바닥에 넘어진 사건이 동료에 의해 목격되면서 신종 바이러스의 존재가 공식 확인되었다.
{: .ko}

In winter 2025, a programmer reported that their mouse "disappeared" from their workspace after receiving anonymous messages. A colleague confirmed the mouse was in its place, but it was invisible to the infected person. Subsequently, the keyboard, monitor stand, and objects on the desk became transparent in sequence. Analysis of the infected person's messenger records confirmed that received messages contained massive amounts of embedded null characters. The existence of the new virus was officially confirmed when a colleague witnessed the infected person missing an "invisible chair" while trying to sit and falling to the floor.
{: .en}

2025年冬、あるプログラマーが匿名のメッセージを受信した後、自分のワークスペースからマウスが「消えた」と報告した。同僚が確認したところマウスは元の場所にあったが、感染者には見えなかった。その後、キーボード、モニタースタンド、デスク上の物が順次透明になった。感染者のメッセンジャー記録を分析した結果、受信したメッセージ内に大量のヌル文字が挿入されていたことが確認された。決定的に、感染者が「見えない椅子」に座ろうとして外れて床に倒れた事件が同僚に目撃されたことで、新種ウイルスの存在が公式に確認された。
{: .ja}

## 관련 바이러스
{: .ko}

## Related Viruses
{: .en}

## 関連ウイルス
{: .ja}

- [와이어루트 (WireRoot)](wireroot.md): 널스페이스에 의해 투명해진 케이블은 와이어루트의 성장을 시각적으로 추적할 수 없게 만들어, 대응을 사실상 불가능하게 함.
- [널위스퍼 (NullWhisper)](nullwhisper.md): 같은 "널(null)" 계열 바이러스. 널위스퍼가 인지의 빈 공간을 만든다면, 널스페이스는 물리적 시야의 빈 공간을 만듦—동시 감염 시 판단과 시각이 모두 "공백"으로 침식됨.
- [바이트쉐이드 (ByteShade)](byteshade.md): 바이트쉐이드가 그림자를 조작한다면, 널스페이스는 물체 자체를 시각에서 제거함—두 바이러스가 결합하면 "보이지 않는 물체의 그림자만 남는" 기이한 현상이 발생함.
{: .ko}

- [WireRoot](wireroot.md): Cables made transparent by NullSpace make it impossible to visually track WireRoot's growth, effectively preventing any countermeasures.
- [NullWhisper](nullwhisper.md): A fellow "null" family virus. If NullWhisper creates empty spaces in cognition, NullSpace creates empty spaces in physical vision—co-infection erodes both judgment and sight into "blanks."
- [ByteShade](byteshade.md): If ByteShade manipulates shadows, NullSpace removes objects themselves from sight—when the two viruses combine, the bizarre phenomenon of "only the shadows of invisible objects remaining" occurs.
{: .en}

- [ワイヤールート（WireRoot）](wireroot.md)：ヌルスペースによって透明になったケーブルはワイヤールートの成長を視覚的に追跡できなくなり、対処を事実上不可能にする。
- [ヌルウィスパー（NullWhisper）](nullwhisper.md)：同じ「ヌル（null）」系列のウイルス。ヌルウィスパーが認知の空白を作るのに対し、ヌルスペースは物理的視野の空白を作る——同時感染時、判断と視覚の両方が「空白」に侵食される。
- [バイトシェード（ByteShade）](byteshade.md)：バイトシェードが影を操作するのに対し、ヌルスペースは物体そのものを視覚から除去する——二つのウイルスが結合すると「見えない物体の影だけが残る」という奇妙な現象が発生する。
{: .ja}

## 참고
{: .ko}

## Notes
{: .en}

## 備考
{: .ja}

- 널스페이스의 투명화는 감염자의 시각에만 영향을 미치는 것이 아니라 카메라, CCTV 등 광학 장비에도 동일하게 적용됨—감염 공간을 촬영하면 실제로 물체가 찍히지 않음. 이는 단순한 인지 왜곡이 아닌 물리적 광학 현상임이 입증됨.
- 일부 감염자는 투명화된 물체를 만질 때 "데이터의 질감"을 느낀다고 보고함—매끄러운 금속이 미세한 격자 패턴의 요철로 느껴지며, 이는 널 문자의 이진 구조가 촉각으로 전사된 것이라는 가설이 제기됨.
{: .ko}

- NullSpace's transparency affects not only the infected person's vision but applies equally to optical equipment such as cameras and CCTV—photographing the infected space actually fails to capture objects. This proves it is a physical optical phenomenon, not mere cognitive distortion.
- Some infected individuals report feeling a "texture of data" when touching transparent objects—smooth metal feels like fine grid-patterned bumps, leading to the hypothesis that the binary structure of null characters is being transcribed into tactile sensation.
{: .en}

- ヌルスペースの透明化は感染者の視覚にのみ影響するのではなく、カメラやCCTVなどの光学機器にも同様に適用される——感染空間を撮影すると実際に物体が映らない。これは単なる認知の歪みではなく物理的な光学現象であることが証明されている。
- 一部の感染者は透明化された物体を触る際に「データの質感」を感じると報告している——滑らかな金属が微細な格子パターンの凹凸として感じられ、これはヌル文字のバイナリ構造が触覚に転写されたものだという仮説が提起されている。
{: .ja}
