---
title: "하울링크 / HowlLink"
parent: "바이러스 / Viruses"
nav_order: 11
classification:
  type: "감각형 / Sensory"
  vector: "메신저 / Messenger"
  severity: "높음 / High"
origin: "출처 불명의 음성 메시지 파일 / Voice message file of unknown origin"
first_detected: "2025년 가을 / Autumn 2025"
status: "활성 / Active"
tags: ["감각형", "메신저", "청각", "울음", "sensory", "messenger", "auditory", "howl"]
---

# 하울링크 (HowlLink)

## 개요 / Overview

메신저의 음성 메시지를 통해 전파되는 [감각형](../taxonomy/index.md#유형별-분류) 바이러스. 감염자는 현실에서 존재하지 않는 소리—멀리서 들리는 울음, 기계적 속삭임, 주파수 이탈된 윙윙거림—를 지속적으로 듣게 된다.

A [Sensory-type](../taxonomy/index.md#classification-by-type) virus transmitted through voice messages on messenger apps. Infected individuals continuously hear non-existent sounds in reality—distant howling, mechanical whispers, frequency-shifted humming.

## 분류 / Classification

| 항목 / Field | 내용 / Details |
|------|------|
| 유형 / Type | [감각형 / Sensory](../taxonomy/index.md#유형별-분류) |
| 전파 경로 / Vector | [메신저 / Messenger](../taxonomy/index.md#전파-경로별-분류) |
| 위험도 / Severity | 높음 / High |

## 웹 상 특성 / Web Characteristics

### 감염 방식 / Infection Method

메신저에서 수신한 음성 메시지 중, 녹음 시간과 실제 재생 시간이 미세하게 다른(0.3~0.7초 차이) 것이 감염 매체이다. 이 "여분의 시간"에는 인간 가청 범위 경계(18~22kHz)의 초고주파가 포함되어 있으며, 이 주파수를 이어폰이나 스피커로 재생하면 감염된다.

Among voice messages received on messengers, those where recorded duration subtly differs from actual playback duration (0.3-0.7 second discrepancy) are the infection medium. This "extra time" contains ultrahigh frequencies at the boundary of human hearing (18-22kHz), and playing these frequencies through earphones or speakers triggers infection.

### 웹 상 증상 / Web Symptoms

- 음성 메시지 재생 중 들리지 않았던 배경 소리가 나중에 기억남 / Background sounds not heard during playback are remembered afterward
- 음악이나 팟캐스트에서 존재하지 않는 레이어의 소리가 들림 / Non-existent layers of sound are heard in music and podcasts
- 알림 소리가 실제보다 자주 들리는 것 같은 느낌 / Notification sounds seem to ring more frequently than they actually do

## 현실 영향 / Real-World Effects

### 발현 양상 / Manifestation

- 조용한 공간에서 먼 곳의 울음소리나 기계음이 들림 / Distant howling or mechanical sounds heard in quiet spaces
- 다른 사람은 듣지 못하는 저주파 진동을 감지 / Detecting low-frequency vibrations others cannot hear
- 감염이 진행되면 실제 대화에 "없는 목소리"가 섞여 들림 / As infection progresses, "non-existent voices" blend into real conversations
- 말기에는 실제 소리와 환청의 구별이 불가능해짐 / In terminal stages, distinguishing real sounds from hallucinated ones becomes impossible

### [경계 무너짐](../glossary/index.md#경계-무너짐--boundary-collapse) 단계 / Boundary Collapse Stages

1. 메신저 음성 메시지에서 이상 주파수 노출 (웹) / Exposure to abnormal frequencies in messenger voice messages (Web)
2. 모든 디지털 오디오에서 없는 소리 감지 (웹 확산) / Detecting non-existent sounds in all digital audio (Web spread)
3. 오프라인 환경에서 환청 시작 (현실 침투) / Auditory hallucinations begin offline (Reality breach)
4. 실제 소리와 환청의 경계 소멸 (현실 정착) / Boundary between real sounds and hallucinations dissolves (Reality anchor)

## 대응 방법 / Countermeasures

- 음성 메시지는 이어폰 대신 스피커폰으로 재생 (거리 감쇠로 초고주파 무력화) / Play voice messages on speakerphone instead of earphones (distance attenuation neutralizes ultrahigh frequencies)
- 음성 메시지 수신 전 파일 길이와 표시 시간 비교 / Compare file length with displayed duration before listening to voice messages
- 감염 초기에 72시간 동안 백색소음 환경에 노출되면 청각이 재보정됨 / In early stages, 72-hour exposure to white noise environments recalibrates hearing
- 감염자 주변에서 음성 녹음을 하면 환청이 실제로 녹음되는 사례가 있어, 이를 통한 진단이 가능 / Hallucinated sounds have been recorded near infected individuals, enabling diagnosis through audio recording

## 발견 기록 / Discovery Log

2025년 가을, 한 음향 엔지니어가 "녹음실에서 존재할 수 없는 주파수가 잡힌다"고 보고. 분석 결과 해당 엔지니어가 받은 음성 메시지들에서 가청 한계 부근의 일관된 주파수 패턴이 발견됨. 이 패턴은 자연계에 존재하지 않는 파형이었다.

Discovered in autumn 2025 when a sound engineer reported "impossible frequencies appearing in the recording studio." Analysis revealed consistent frequency patterns near the hearing threshold in voice messages the engineer had received. The waveform was one that does not exist in nature.

## 관련 바이러스 / Related Viruses

- [미러링크 (MirrorLink)](mirrorlink.md): 같은 감각형이나, 미러링크는 시각, 하울링크는 청각을 왜곡. 동시 감염 시 "보이지 않는 것이 소리를 내는" 공감각적 현상이 보고됨. / Both Sensory-type, but MirrorLink distorts vision while HowlLink distorts hearing. Co-infection produces synesthetic phenomena where "invisible things make sounds."
- [캐시베인 (CacheVein)](cachevein.md): 메신저 전파 경로 공유. 캐시베인의 정맥 패턴에서 미약한 전자기파가 방출되며, 하울링크 감염자만이 이를 "소리"로 감지한다. / Shares messenger vector. CacheVein's vein patterns emit faint electromagnetic waves that only HowlLink-infected individuals perceive as "sound."
- [널위스퍼 (NullWhisper)](nullwhisper.md): 널위스퍼의 "속삭임"이 하울링크의 환청과 결합하면 속삭임의 설득력이 극대화됨. / When NullWhisper's "whisper" combines with HowlLink's hallucinations, the whisper's persuasiveness is maximized.

## 참고 / Notes

- 현재까지 발견된 감각형 바이러스 중 유일하게 청각을 표적으로 하는 종 / The only Sensory-type virus discovered so far that targets hearing.
- 감염자 주변의 동물(특히 개)이 비정상적 반응을 보인다는 보고가 다수 있음 / Numerous reports of animals (especially dogs) near infected individuals displaying abnormal reactions.
