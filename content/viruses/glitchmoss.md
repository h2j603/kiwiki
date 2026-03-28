---
title: "글리치모스 / GlitchMoss"
parent: "바이러스 / Viruses"
nav_order: 7
aliases: ["GlitchMoss", "오류이끼", "Glitch Moss"]
classification:
  type: "환경형 / Environmental"
  vector: "직접접근 / Direct Access"
  severity: "치명적 / Critical"
origin: "폐쇄된 웹호스팅 서버의 404 페이지 / 404 page of an abandoned web hosting server"
first_detected: "2024년 여름 / Summer 2024"
status: "활성 / Active"
tags: ["환경형", "직접접근", "물리", "부식", "이끼", "environmental", "direct access", "physical", "corrosion", "moss"]
---

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [환경형 / Environmental](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [직접접근 / Direct Access](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 치명적 / Critical |

## 개요 / Overview

폐쇄되었거나 버려진 웹페이지에 직접 접속하면 감염되는 [환경형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자의 주변 물리적 환경에 디지털 글리치와 유사한 패턴의 부식/변형이 나타나며, 마치 현실 공간에 이끼가 끼듯 번져나간다.

An [Environmental-type](../taxonomy/index.md#classification-by-type) virus contracted by directly accessing abandoned or defunct web pages. Digital glitch-like corrosion and deformation appear in the infected person's physical surroundings, spreading like moss across real-world spaces.

## 감염 방식 / Infection Method

더 이상 관리되지 않는 웹사이트의 404 페이지나 만료된 도메인에 직접 URL을 입력하여 접속할 때 감염된다. 특히 해당 페이지가 오래전에 마지막으로 업데이트된 상태에서 서버가 완전히 다운되지 않고 반쯤 살아있는 경우에 감염률이 높다.

Infection occurs when directly entering the URL of an unmanaged website's 404 page or an expired domain. Infection rates are especially high when the page was last updated long ago and the server remains in a half-alive state—not fully down but no longer maintained.

## 웹 상 증상 / Web Symptoms

- 방문한 웹페이지의 레이아웃이 서서히 깨져 보임 / Visited web page layouts gradually appear broken
- 텍스트에 의미 없는 유니코드 문자가 끼어들기 시작 / Meaningless Unicode characters begin intruding into text
- 이미지가 일부분씩 노이즈로 대체됨 / Images are partially replaced with noise
- 브라우저 자체가 간헐적으로 프리징됨 / The browser itself intermittently freezes

## 발현 양상 / Manifestation

- 감염자가 오래 머무는 공간(방, 사무실)의 벽면에 회녹색 얼룩이 서서히 나타남 / Gray-green stains gradually appear on walls of spaces where the infected person stays (rooms, offices)
- 전자기기 화면에 물리적 번인(burn-in)과 유사한 자국 발생 / Marks resembling physical burn-in appear on electronic device screens
- 가구, 문틀 등에 픽셀이 깨진 것 같은 패턴의 부식이 진행됨 / Pixel-corruption-like corrosion patterns develop on furniture and door frames
- 말기에는 공간 자체가 "로딩되지 않는" 것처럼 일부 영역이 인지에서 사라짐 / In terminal stages, parts of the space "fail to load," disappearing from perception entirely

## [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 브라우저에서 글리치 현상 발생 (웹) / Glitch phenomena appear in the browser (Web)
2. 사용 중인 기기 화면에 물리적 손상 발생 (기기 침투) / Physical damage appears on device screens (Device breach)
3. 감염자 주변 공간에 부식 패턴 출현 (공간 침투) / Corrosion patterns emerge in surrounding spaces (Spatial breach)
4. 부식이 자가 증식하며 공간을 잠식 (현실 정착) / Corrosion self-propagates and consumes the space (Reality anchor)
5. 해당 공간이 물리적으로 "접근 불가" 상태가 됨 (비가역적) / The space becomes physically "inaccessible" (Irreversible)

## 대응 방법 / Countermeasures

- 출처 불명의 오래된 URL에 직접 접속하지 않을 것 / Do not directly access old URLs of unknown origin
- 만료된 도메인 탐색 시 반드시 가상환경(VM) 사용 / Always use a virtual machine (VM) when exploring expired domains
- 초기 발견 시 해당 공간의 전자기기를 모두 제거하고 공간을 24시간 이상 비워두면 진행이 멈추는 사례 보고 / Early-stage cases report halting progression by removing all electronics and vacating the space for 24+ hours
- 부식이 시작된 물체는 즉시 해당 공간에서 격리 / Immediately isolate objects showing signs of corrosion
- 말기 단계에 도달한 공간은 복구 불가로 판정됨 / Spaces reaching terminal stage are classified as irrecoverable

## 발견 기록 / Discovery Log

2024년 여름, 한 도시탐험(어반 익스플로링) 커뮤니티에서 폐건물 내부 사진에 이상한 패턴이 찍힌다는 제보가 올라옴. 조사 결과 해당 건물에 남아있던 서버룸의 장비가 반쯤 작동 중이었으며, 탐험자들이 현장에서 해당 서버에 접속한 것이 감염 경로로 추정됨. 이후 서버를 물리적으로 파괴했으나, 이미 감염된 공간의 부식은 멈추지 않았다.

Discovered in summer 2024 when an urban exploration community reported strange patterns appearing in photos taken inside an abandoned building. Investigation revealed that server room equipment in the building was still partially operational, and explorers had connected to the server on-site—the suspected infection vector. The server was physically destroyed afterward, but corrosion in already-infected spaces did not stop.

## 관련 바이러스 / Related Viruses

- [캐시베인 (CacheVein)](cachevein.md): 같은 환경형 바이러스. 글리치모스가 공간을 부식시킨다면, 캐시베인은 공간에 데이터의 물리적 흔적을 새긴다. 두 바이러스가 동시에 존재하는 공간은 극도로 위험하다. / A fellow Environmental-type virus. While GlitchMoss corrodes spaces, CacheVein inscribes physical traces of data. Spaces where both viruses coexist are extremely dangerous.
- [신택스레이스 (SyntaxWraith)](syntaxwraith.md): 직접접근이라는 전파 경로를 공유. 글리치모스가 버려진 페이지에서 온다면, 신택스레이스는 방치된 코드 저장소에서 온다. / Shares the Direct Access transmission vector. While GlitchMoss comes from abandoned pages, SyntaxWraith originates from neglected code repositories.
- [미러링크 (MirrorLink)](mirrorlink.md): 미러링크 말기 환자 주변의 반사면에서 글리치모스와 유사한 부식이 관찰된 사례가 있다. / Corrosion similar to GlitchMoss has been observed on reflective surfaces near late-stage MirrorLink patients.

## 참고 / Notes

- 현재까지 발견된 [웹키위바이러스](../glossary/index.md#웹키위바이러스--web-kiwi-virus) 중 유일하게 물리적 환경을 비가역적으로 변형시키는 종 / The only known Web Kiwi Virus species that irreversibly transforms the physical environment
- 감염된 공간을 촬영한 사진을 웹에 업로드하면 해당 이미지를 통해 2차 감염이 발생할 수 있다는 비공식 보고가 있으나 미확인 / Unofficial reports suggest uploading photos of infected spaces may cause secondary infection through the images, but this remains unconfirmed
