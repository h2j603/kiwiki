---
title: "캐시베인 / CacheVein"
parent: "바이러스 / Viruses"
nav_order: 8
aliases: ["CacheVein", "캐시정맥", "Cache Vein"]
classification:
  type: "환경형 / Environmental"
  vector: "메신저 / Messenger"
  severity: "치명적 / Critical"
origin: "삭제된 메시지의 서버 캐시 잔류물 / Server cache residue of deleted messages"
status: "활성 / Active"
code: "WKV-E.MS-002"
icon: "╠"
tags: ["환경형", "메신저", "물리", "정맥", "데이터", "environmental", "messenger", "physical", "vein", "data"]
---

<div class="ko" markdown="1">

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-E.MS-002</span> |
| 유형 | <span class="pill pill-type">환경형</span> |
| 전파 경로 | <span class="pill pill-vector">메신저</span> |
| 위험도 | <span class="pill pill-severity-critical">치명적</span> |

</div>

<div class="en" markdown="1">

| Field | Details |
|------|------|
| Code | <span class="pill pill-code">WKV-E.MS-002</span> |
| Type | <span class="pill pill-type">Environmental</span> |
| Vector | <span class="pill pill-vector">Messenger</span> |
| Severity | <span class="pill pill-severity-critical">Critical</span> |

</div>

<div class="ja" markdown="1">

| 項目 | 内容 |
|------|------|
| 分類コード | <span class="pill pill-code">WKV-E.MS-002</span> |
| タイプ | <span class="pill pill-type">環境型</span> |
| 経路 | <span class="pill pill-vector">メッセンジャー</span> |
| 危険度 | <span class="pill pill-severity-critical">致命的</span> |

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

메신저에서 삭제된 메시지의 캐시 데이터를 통해 전파되는 [환경형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자 주변의 물리적 표면(벽, 천장, 바닥)에 회로도나 데이터 흐름을 닮은 정맥 형태의 무늬가 나타나며, 이 무늬를 통해 실제 데이터 조각이 물리적으로 "흐르는" 것이 관찰된다.
{: .ko}

An [Environmental-type](../taxonomy/index.md#classification-by-type) virus transmitted through cached data of deleted messages in messenger apps. Vein-like patterns resembling circuit diagrams or data flows appear on physical surfaces (walls, ceilings, floors) near the infected person, and actual data fragments have been observed physically "flowing" through these patterns.
{: .en}

メッセンジャーで削除されたメッセージのキャッシュデータを介して伝播する[環境型](../taxonomy/index.md#유형별-분류)ウイルス。感染者の周辺の物理的表面（壁、天井、床）に回路図やデータフローに似た静脈状の模様が現れ、この模様を通じて実際のデータ断片が物理的に「流れる」のが観察される。
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

메신저에서 "모두에게 삭제"된 메시지가 실제로는 서버 캐시에 잔류하는 경우가 있다. 이 잔류 데이터에 바이러스가 기생하며, 삭제된 메시지가 있던 채팅방에 계속 참여하는 사용자가 점진적으로 감염된다. 삭제된 메시지를 직접 보지 않아도 감염 가능.
{: .ko}

Messages "deleted for everyone" on messengers sometimes persist as residual data in server caches. The virus parasitizes this residual data, gradually infecting users who remain in chat rooms where deleted messages once existed. Direct viewing of the deleted message is not required for infection.
{: .en}

メッセンジャーで「全員に対して削除」されたメッセージが実際にはサーバーキャッシュに残留している場合がある。この残留データにウイルスが寄生し、削除されたメッセージがあったチャットルームに留まり続けるユーザーが徐々に感染する。削除されたメッセージを直接見ていなくても感染は可能。
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

- 삭제된 메시지의 내용이 다른 앱(메모, 캘린더 등)에 무작위로 나타남
- 디바이스 저장 공간이 알 수 없는 캐시 파일로 가득 참
- 화면을 꺼도 디바이스가 열을 발생시키며 데이터를 처리하는 듯한 증상
{: .ko}

- Contents of deleted messages randomly appear in other apps (notes, calendar, etc.)
- Device storage fills with unidentifiable cache files
- Device generates heat and appears to process data even with screen off
{: .en}

- 削除されたメッセージの内容が他のアプリ（メモ、カレンダーなど）に無作為に表示される
- デバイスのストレージが正体不明のキャッシュファイルで満杯になる
- 画面をオフにしてもデバイスが発熱し、データを処理しているような症状
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

- 감염자 거주 공간의 벽면에 가는 검은 선이 정맥처럼 뻗어나감
- 선을 따라가면 회로 기판의 배선도와 유사한 패턴
- 일부 정맥에서는 빛나는 점이 이동하는 것이 관찰됨—이는 실제 데이터(텍스트 조각, 숫자열)가 물리적으로 표현된 것
- 말기에는 정맥이 건물 구조를 약화시키며, 건물 자체가 하나의 거대한 회로처럼 작동
{: .ko}

- Thin black lines extend like veins across walls of the infected person's living space
- Following the lines reveals patterns similar to circuit board wiring diagrams
- Luminous dots are observed moving along some veins—these are physical manifestations of actual data (text fragments, number sequences)
- In terminal stages, veins weaken building structures, and the building itself operates like one massive circuit
{: .en}

- 感染者の居住空間の壁面に細い黒線が静脈のように広がっていく
- 線をたどると回路基板の配線図に似たパターンが見られる
- 一部の静脈では光る点が移動しているのが観察される——これは実際のデータ（テキスト断片、数列）が物理的に表現されたものである
- 末期には静脈が建物の構造を弱体化させ、建物自体が一つの巨大な回路のように動作する
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

1. 메신저에서 삭제된 메시지 잔류 데이터 노출 (웹)
2. 디바이스 전반에 캐시 이상 발생 (웹 확산)
3. 감염자 주변 표면에 정맥 무늬 출현 (공간 침투)
4. 정맥이 자가 증식하며 데이터를 물리적으로 전송 (현실 정착)
5. 건물 구조가 "데이터 네트워크"로 변환됨 (비가역적)
{: .ko}

1. Exposure to residual data of deleted messages (Web)
2. Cache anomalies across all devices (Web spread)
3. Vein patterns appear on surfaces near the infected person (Spatial breach)
4. Veins self-propagate and physically transmit data (Reality anchor)
5. Building structure converts into a "data network" (Irreversible)
{: .en}

1. メッセンジャーで削除されたメッセージの残留データに曝露（ウェブ）
2. デバイス全般にキャッシュ異常が発生（ウェブ拡散）
3. 感染者周辺の表面に静脈模様が出現（空間侵入）
4. 静脈が自己増殖しデータを物理的に伝送（現実定着）
5. 建物構造が「データネットワーク」に変換（不可逆的）
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

- 메신저에서 삭제된 메시지가 있는 채팅방은 나갈 것
- 디바이스 캐시를 주기적으로 완전 삭제
- 정맥이 발견되면 해당 표면을 물리적으로 제거(벽지 교체, 페인트 덧칠)—초기 단계에서만 유효
- [글리치모스](glitchmoss.md) 감염 공간과의 근접을 반드시 피할 것
{: .ko}

- Leave chat rooms where messages have been deleted
- Periodically perform complete device cache clearing
- If veins are found, physically remove the surface (replace wallpaper, repaint)—effective only in early stages
- Absolutely avoid proximity to [GlitchMoss](glitchmoss.md)-infected spaces
{: .en}

- メッセンジャーで削除されたメッセージがあるチャットルームから退室すること
- デバイスのキャッシュを定期的に完全削除する
- 静脈が発見されたら該当の表面を物理的に除去（壁紙の張り替え、塗り直し）する——初期段階でのみ有効
- [グリッチモス](glitchmoss.md)感染空間との近接を必ず避けること
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

2025년 가을, 한 아파트 관리사무소에 "벽에서 이상한 무늬가 자라난다"는 신고가 접수됨. 현장 조사 결과 해당 세대 거주자는 한 대형 단체 채팅방에서 반복적으로 메시지가 삭제되는 상황에 노출되어 있었음. 정맥 무늬를 현미경으로 관찰한 결과, 삭제된 메시지의 텍스트가 미세한 크기로 새겨져 있었다.
{: .ko}

Discovered in autumn 2025 when an apartment management office received a report of "strange patterns growing on the walls." On-site investigation found the resident had been exposed to repeated message deletions in a large group chat. Microscopic examination of the vein patterns revealed the text of deleted messages engraved at microscopic scale.
{: .en}

2025年秋、あるマンションの管理事務所に「壁に奇妙な模様が育っている」という通報があった。現場調査の結果、その住人は大規模なグループチャットで繰り返しメッセージが削除される状況に曝されていた。静脈模様を顕微鏡で観察したところ、削除されたメッセージのテキストが微細なサイズで刻まれていた。
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

- [글리치모스 (GlitchMoss)](glitchmoss.md): 같은 환경형 바이러스. 글리치모스가 공간을 "부식"시킨다면, 캐시베인은 공간을 "배선"한다. 두 바이러스가 같은 공간에 존재하면 건물 붕괴 위험이 급격히 상승한다.
- [널위스퍼 (NullWhisper)](nullwhisper.md): 메신저를 통해 전파된다는 공통점. 널위스퍼의 빈 메시지가 삭제되면서 캐시베인의 먹이가 된다는 가설이 있다.
- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 캐시베인이 만들어내는 정맥 패턴이 프로그래밍 언어의 구문 구조와 유사하다는 분석이 있으며, 신택스레이스와의 연관성이 연구 중이다.
{: .ko}

- [GlitchMoss](glitchmoss.md): A fellow Environmental-type virus. If GlitchMoss "corrodes" spaces, CacheVein "wires" them. Both viruses in the same space drastically increases building collapse risk.
- [NullWhisper](nullwhisper.md): Shares the messenger transmission vector. There is a hypothesis that NullWhisper's empty messages become fuel for CacheVein when deleted.
- [SyntaxWraith](syntaxwraith.md): Analysis suggests CacheVein's vein patterns resemble programming language syntax structures, and its connection to SyntaxWraith is under investigation.
{: .en}

- [グリッチモス（GlitchMoss）](glitchmoss.md)：同じ環境型ウイルス。グリッチモスが空間を「腐食」させるなら、キャッシュベインは空間を「配線」する。両ウイルスが同じ空間に存在すると建物崩壊のリスクが急激に上昇する。
- [ヌルウィスパー（NullWhisper）](nullwhisper.md)：メッセンジャーという伝播経路を共有。ヌルウィスパーの空メッセージが削除されることでキャッシュベインの養分になるという仮説がある。
- [シンタックスレイス（SyntaxWraith）](syntaxwraith.md)：キャッシュベインが生み出す静脈パターンがプログラミング言語の構文構造に類似しているという分析があり、シンタックスレイスとの関連性が研究中である。
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

- 캐시베인은 현재까지 발견된 환경형 바이러스 중 가장 최근에 발견되었으나, 전파 속도가 가장 빠름
- 정맥을 통해 흐르는 데이터는 감염자뿐 아니라 주변인의 삭제된 메시지 내용도 포함하여, 프라이버시 침해 문제도 제기됨
{: .ko}

- CacheVein is the most recently discovered Environmental-type virus but has the fastest transmission rate.
- Data flowing through veins includes deleted messages from not only the infected person but also those around them, raising privacy concerns.
{: .en}

- キャッシュベインは現在まで発見された環境型ウイルスの中で最も最近発見されたが、伝播速度は最も速い
- 静脈を通じて流れるデータには感染者だけでなく周囲の人々の削除メッセージの内容も含まれており、プライバシー侵害の問題も提起されている
{: .ja}
