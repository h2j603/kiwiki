---
title: "픽셀롯 / PixelRot"
aliases: ["PixelRot", "화소부패", "Pixel Rot"]
classification:
  type: "감각형 / Sensory"
  vector: "이메일 / Email"
  severity: "보통 / Moderate"
origin: "대량 발송된 스팸 메일의 첨부 이미지 / Attached image from mass-distributed spam email"
first_detected: "2025년 여름 / Summer 2025"
status: "활성 / Active"
tags: ["감각형", "이메일", "시각", "부패", "sensory", "email", "visual", "decay"]
---

# 픽셀롯 (PixelRot)

## 개요 / Overview

이메일 첨부 이미지를 열면 감염되는 [감각형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자의 시야에 서서히 "화소 부패"가 번져, 현실 세계가 점점 저해상도로 보이기 시작한다.

A [Sensory-type](../taxonomy/index.md#classification-by-type) virus contracted by opening image attachments in emails. "Pixel decay" gradually spreads across the infected person's visual field, causing the real world to appear in progressively lower resolution.

## 분류 / Classification

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [감각형 / Sensory](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [이메일 / Email](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 보통 / Moderate |

## 웹 상 특성 / Web Characteristics

### 감염 방식 / Infection Method

"계정 확인 필요", "배송 사진 첨부" 등 일상적 제목의 이메일에 첨부된 .png 이미지를 열 때 감염된다. 이미지 자체는 평범한 사진처럼 보이나, 확대하면 특정 영역의 픽셀이 불규칙하게 배열되어 있다. 이 배열 패턴을 뇌가 처리하는 순간 감염이 시작된다.

Infection occurs when opening .png images attached to emails with mundane subjects like "Account verification required" or "Delivery photo attached." The image looks like an ordinary photo, but zooming in reveals irregularly arranged pixels in specific areas. Infection begins the moment the brain processes this arrangement pattern.

### 웹 상 증상 / Web Symptoms

- 웹 브라우저에서 이미지가 점진적으로 모자이크 처리된 것처럼 보임 / Images in web browsers gradually appear mosaic-filtered
- 텍스트의 안티앨리어싱이 사라져 글자가 거칠게 보임 / Text anti-aliasing disappears, making characters look jagged
- 동영상 시청 시 해상도가 자동으로 낮아지는 느낌 / Videos feel like their resolution is automatically degrading

## 현실 영향 / Real-World Effects

### 발현 양상 / Manifestation

- 시야 주변부에서 시작해 사물이 픽셀화되어 보임 / Objects begin to appear pixelated, starting from the peripheral vision
- 먼 거리의 사물이 먼저 영향받고, 점차 가까운 사물도 저해상도로 보임 / Distant objects are affected first, gradually extending to nearby objects
- 세밀한 텍스처(나뭇잎, 직물 패턴 등)를 구별하지 못하게 됨 / Inability to distinguish fine textures (leaves, fabric patterns, etc.)
- 말기에는 사람 얼굴이 흐릿하게 보여 개인 식별이 어려워짐 / In terminal stages, faces appear blurred, making individual identification difficult

### [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 이메일 이미지 열람 (웹) / Email image viewed (Web)
2. 모든 화면 콘텐츠의 해상도 저하 (웹 확산) / Resolution degradation across all screen content (Web spread)
3. 현실 시야 주변부에서 픽셀화 시작 (현실 침투) / Pixelation begins in peripheral real-world vision (Reality breach)
4. 시야 전체가 저해상도로 전환 (현실 정착) / Entire visual field converts to low resolution (Reality anchor)

## 대응 방법 / Countermeasures

- 출처 불명의 이메일 첨부 이미지를 열지 않을 것 / Do not open image attachments from unknown email sources
- 이미지를 열기 전 메타데이터를 확인하여 비정상적 픽셀 배열 패턴 검사 / Check image metadata for abnormal pixel arrangement patterns before opening
- 감염 초기에 고해상도 자연 환경(숲, 해변 등)에 72시간 이상 노출되면 시야 해상도가 회복되는 사례 있음 / In early stages, 72+ hours of exposure to high-resolution natural environments (forests, beaches) has restored visual resolution
- 화면 밝기와 대비를 최대로 높이면 증상 진행이 일시적으로 둔화됨 / Maximizing screen brightness and contrast temporarily slows symptom progression

## 발견 기록 / Discovery Log

2025년 여름, 한 디자이너가 "모니터가 고장난 줄 알았는데 모니터를 바꿔도 똑같다"는 게시글을 올림. 이후 같은 증상을 호소하는 사람들이 모두 동일한 발신자로부터 이메일을 받았음이 확인됨. 해당 이메일의 발신 서버는 추적 결과 존재하지 않는 IP 대역이었다.

Discovered in summer 2025 when a designer posted "I thought my monitor was broken, but it's the same after replacing it." All people reporting the same symptoms were confirmed to have received emails from the same sender. The sending server was traced to a non-existent IP range.

## 관련 바이러스 / Related Viruses

- [[mirrorlink|미러링크 (MirrorLink)]]: 같은 감각형 바이러스. 미러링크가 반사 이미지만을 왜곡한다면, 픽셀롯은 시야 전체를 침식한다. 두 바이러스에 동시 감염되면 시각 기능이 급격히 저하된다. / A fellow Sensory-type virus. While MirrorLink distorts only reflections, PixelRot erodes the entire visual field. Co-infection drastically degrades visual function.
- [[glitchmoss|글리치모스 (GlitchMoss)]]: 글리치모스의 환경 부식이 픽셀롯 감염자에게는 더 일찍 인지된다—이미 시야가 픽셀화되어 있어 부식 패턴이 더 두드러져 보이기 때문. / GlitchMoss environmental corrosion is perceived earlier by PixelRot-infected individuals—because their already-pixelated vision makes corrosion patterns more conspicuous.
- [[deadscroll|데드스크롤 (DeadScroll)]]: 픽셀롯 감염자가 SNS를 무한 스크롤하면, 저해상도 시야로 인해 데드스크롤의 "시간 빈틈"을 인지하지 못해 더 쉽게 동시 감염된다. / PixelRot-infected individuals scrolling endlessly on social media fail to perceive DeadScroll's "time gaps" due to low-resolution vision, making co-infection easier.

## 참고 / Notes

- 픽셀롯은 감각형 바이러스 중 유일하게 감염 경로가 이메일인 종으로, 표적 감염이 가능하다는 점에서 다른 감각형과 구별됨 / PixelRot is the only Sensory-type virus transmitted via email, distinguishing it from others by enabling targeted infection.
- 감염자가 촬영한 사진에도 픽셀 열화가 나타난다는 보고가 있으나, 이것이 바이러스의 직접 효과인지 감염자의 인지 왜곡인지는 논쟁 중 / Reports indicate pixel degradation in photos taken by infected individuals, but whether this is a direct viral effect or perceptual distortion remains debated.
