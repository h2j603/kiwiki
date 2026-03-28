---
title: "와이어루트 / WireRoot"
parent: "바이러스 / Viruses"
nav_order: 30
code: "WKV-E.DA-006"
classification:
  type: "환경형 / Environmental"
  vector: "직접접근 / Direct Access"
  severity: "치명적 / Critical"
origin: "잊혀진 서버 인프라 관리 페이지의 방치된 네트워크 토폴로지 맵 / Abandoned network topology maps on forgotten server infrastructure pages"
first_detected: "2024년 가을 / Autumn 2024"
status: "활성 / Active"
tags: ["환경형", "직접접근", "케이블", "성장", "environmental", "direct access", "cables", "growth"]
---

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-E.DA-006</span> |
| 유형 | <span class="pill pill-type">환경형 / Environmental</span> |
| 전파 경로 | <span class="pill pill-vector">직접접근 / Direct Access</span> |
| 위험도 | <span class="pill pill-severity-critical">치명적 / Critical</span> |
| 최초 발견 | 2024년 가을 / Autumn 2024 |
| 상태 | <span class="pill pill-active">활성 / Active</span> |

## 개요 / Overview

잊혀진 서버 인프라 관리 페이지에 접속하면 감염되는 환경형 바이러스. 감염자의 공간에 있는 케이블, 전선, 코드류가 식물의 뿌리처럼 자라기 시작한다. 연장되고, 분기하고, 벽과 바닥 속으로 파고들며, 전원을 찾아 스스로 이동한다. 연결되어서는 안 되는 기기들을 서로 연결하고, 그 결과 예측 불가능한 전자적·물리적 현상을 일으킨다. 와이어루트는 가장 오래된 환경형 바이러스 중 하나로, 디지털 인프라가 물리적 생명체로 변이하는 최초의 사례로 기록된다.
{: .ko}

An Environmental-type virus contracted by accessing forgotten server infrastructure management pages. Cables, wires, and cords in the infected person's space begin growing like plant roots—extending, branching, and burrowing into walls and floors, moving autonomously to seek power sources. They connect devices that should never be connected, resulting in unpredictable electronic and physical phenomena. WireRoot is one of the oldest Environmental-type viruses and is recorded as the first case of digital infrastructure mutating into physical living organisms.
{: .en}

## 감염 방식 / Infection Method

더 이상 관리되지 않는 서버의 인프라 관리 페이지—네트워크 토폴로지 맵, 서버 상태 모니터링 대시보드, 하드웨어 인벤토리 페이지 등—에 직접 접속하면 감염된다. 특히 서버가 물리적으로 폐기되었으나 관리 페이지만 유령처럼 남아 있는 경우가 가장 위험하다. 페이지에 표시된 네트워크 연결 다이어그램을 열람하는 순간 바이러스가 활성화되며, 다이어그램의 복잡도가 높을수록 감염 강도가 강해진다. 한 번의 접속으로도 감염이 성립하며, 접속 시간이 길수록 초기 증상 발현이 빨라진다.
{: .ko}

Infection occurs by directly accessing infrastructure management pages of servers no longer maintained—network topology maps, server status monitoring dashboards, hardware inventory pages, and similar. The most dangerous scenario is when the server has been physically decommissioned but its management page remains like a ghost. The virus activates the moment the network connection diagram displayed on the page is viewed, and the more complex the diagram, the stronger the infection intensity. A single visit establishes infection, and longer access times accelerate initial symptom onset.
{: .en}

## 웹 상 증상 / Web Symptoms

- 브라우저에 방문한 적 없는 서버 관리 페이지들이 히스토리에 자동으로 추가됨
- 네트워크 설정에 인식할 수 없는 장치들이 연결된 것으로 표시됨
- 컴퓨터의 USB 포트가 아무것도 연결하지 않았는데도 "장치 연결됨" 알림을 반복적으로 표시함
{: .ko}

- Server management pages never visited are automatically added to browser history
- Unrecognizable devices appear as connected in network settings
- Computer USB ports repeatedly display "device connected" notifications despite nothing being plugged in
{: .en}

## 발현 양상 / Manifestation

- 충전 케이블, LAN 선, 오디오 잭 등이 밤사이 수십 센티미터 연장되어 있음
- 케이블이 분기하여 새로운 커넥터를 스스로 생성—USB-C에서 갈라진 가지가 HDMI 형태로 자라남
- 전선이 벽지 아래, 마루판 틈, 가구 뒤로 뿌리처럼 파고들어 공간 전체에 "혈관" 네트워크를 형성
- 말기에는 연결되어서는 안 되는 기기 간 연결이 발생—토스터와 TV가 연결되어 빵을 구울 때마다 채널이 변경되는 등 비논리적 상호작용 유발
{: .ko}

- Charging cables, LAN cables, audio jacks, and similar extend by dozens of centimeters overnight
- Cables branch and spontaneously generate new connectors—a branch splitting from USB-C grows into an HDMI form
- Wires burrow under wallpaper, through floorboard gaps, and behind furniture like roots, forming a "vascular" network throughout the space
- In terminal stages, connections form between devices that should never be linked—a toaster connects to a TV causing channel changes every time bread is toasted, and similar illogical interactions
{: .en}

## 경계 무너짐 단계 / Boundary Collapse Stages

1. 브라우저에서 유령 서버 페이지 자동 접속 흔적 발견—네트워크 설정에 미확인 장치 출현 (웹 침투)
2. 컴퓨터와 직접 연결된 케이블이 미세하게 연장·이동하기 시작 (웹-현실 경계)
3. 감염자 공간의 모든 케이블과 전선이 식물처럼 자율 성장하며, 벽과 바닥을 파고들어 인프라 네트워크를 형성 (현실 침투)
4. 케이블 네트워크가 자율적 의지를 가진 것처럼 행동—감염자가 잘라내도 재생하며, 새로운 기기를 능동적으로 "사냥"하여 연결 (현실 정착)
{: .ko}

1. Ghost server page auto-access traces found in browser—unidentified devices appear in network settings (Web infiltration)
2. Cables directly connected to the computer begin subtly extending and shifting (Web-reality boundary)
3. All cables and wires in the infected person's space grow autonomously like plants, burrowing into walls and floors to form an infrastructure network (Reality breach)
4. The cable network behaves as if possessing autonomous will—regenerating when cut and actively "hunting" new devices to connect (Reality anchor)
{: .en}

## 대응 방법 / Countermeasures

- 출처 불명의 서버 관리 페이지, 특히 관리자가 확인되지 않는 인프라 대시보드에 절대 접속하지 말 것
- 감염 초기에 불필요한 케이블을 모두 물리적으로 제거하고 무선 연결로 전환할 것
- 성장이 시작된 케이블은 일반 절단이 아닌 완전 소각으로 제거해야 함—절단면에서 재생이 일어남
- 감염 공간의 전원을 완전 차단하면 성장 속도가 현저히 감소하나, 완전 정지시키지는 못함—케이블이 외부 전원을 찾아 벽을 뚫고 이동하는 사례가 보고됨
{: .ko}

- Never access server management pages of unknown origin, especially infrastructure dashboards with unverified administrators
- In early infection stages, physically remove all unnecessary cables and switch to wireless connections
- Cables that have begun growing must be completely incinerated rather than simply cut—regeneration occurs from cut surfaces
- Completely cutting power to the infected space significantly reduces growth speed but cannot fully stop it—cases have been reported of cables boring through walls to seek external power sources
{: .en}

## 발견 기록 / Discovery Log

2024년 가을, 폐업한 호스팅 회사의 전 직원이 향수를 느끼며 옛 서버 관리 페이지에 접속한 것이 최초 감염 사례로 기록된다. 일주일 후, 그의 아파트에서 모든 전자기기의 케이블이 벽 속으로 사라져 있었고, 벽지를 뜯어내자 수백 개의 케이블이 혈관처럼 벽 전체에 퍼져 있었다. 가장 충격적이었던 것은 세탁기의 전원 코드가 이웃집 벽을 관통하여 이웃의 Wi-Fi 공유기에 연결되어 있었다는 사실이다. 이 사건을 계기로 환경형 바이러스의 물리적 위험성이 재평가되었다.
{: .ko}

The first recorded infection occurred in autumn 2024, when a former employee of a defunct hosting company nostalgically accessed old server management pages. One week later, all electronic device cables in his apartment had disappeared into the walls, and removing the wallpaper revealed hundreds of cables spread like blood vessels throughout the entire wall. The most shocking discovery was that the washing machine's power cord had penetrated the neighbor's wall and connected itself to their Wi-Fi router. This incident prompted a reassessment of the physical dangers posed by Environmental-type viruses.
{: .en}

## 관련 바이러스 / Related Viruses

- [캐시베인 (CacheVein)](cachevein.md): 캐시베인의 데이터 혈관과 와이어루트의 케이블 뿌리는 물리적 형태가 유사하며, 동시 감염 시 혈관과 케이블이 합쳐져 "데이터를 수송하는 살아있는 인프라"가 형성됨.
- [스태틱블룸 (StaticBloom)](staticbloom.md): 와이어루트의 케이블 네트워크가 형성된 공간에서 스태틱블룸이 발현되면, 정전기 방전이 케이블을 타고 전파되어 연결된 모든 기기에 영향을 미침.
- [널스페이스 (NullSpace)](nullspace.md): 널스페이스에 의해 보이지 않게 된 케이블은 제거가 불가능해져 와이어루트의 확산을 사실상 막을 수 없게 만듦.
{: .ko}

- [CacheVein](cachevein.md): CacheVein's data veins and WireRoot's cable roots are physically similar in form, and co-infection causes veins and cables to merge into "living infrastructure that transports data."
- [StaticBloom](staticbloom.md): When StaticBloom manifests in a space where WireRoot's cable network has formed, static discharges travel along the cables and affect all connected devices.
- [NullSpace](nullspace.md): Cables rendered invisible by NullSpace become impossible to remove, effectively making WireRoot's spread unstoppable.
{: .en}

## 참고 / Notes

- 와이어루트에 의해 성장한 케이블은 실제로 데이터를 전송할 수 있으며, 전송되는 데이터는 감염자가 접속했던 폐쇄 서버의 잔여 데이터인 것으로 확인됨—죽은 서버의 데이터가 물리적 케이블을 통해 "부활"하는 셈.
- 가장 오래된 감염 사례에서는 케이블 뿌리가 건물 지하까지 도달하여 도시 전력망에 직접 접속한 경우가 보고되었으며, 이는 해당 건물 전체의 전기 시스템에 심각한 불안정을 초래했다.
{: .ko}

- Cables grown by WireRoot can actually transmit data, and the transmitted data has been confirmed to be residual data from the defunct servers the infected person accessed—in effect, dead server data being "resurrected" through physical cables.
- In the oldest infection case, cable roots reached the building's basement and connected directly to the city power grid, causing severe instability in the entire building's electrical system.
{: .en}
