---
title: "스레드컷 / ThreadCut"
parent: "바이러스 / Viruses"
nav_order: 28
code: "WKV-C.MS-008"
classification:
  type: "인지형 / Cognitive"
  vector: "메신저 / Messenger"
  severity: "치명적 / Critical"
origin: "비정상 종료된 메신저 앱의 끊어진 대화 스레드 / Severed conversation threads from abnormally terminated messenger apps"
first_detected: "2026년 초 / Early 2026"
status: "활성 / Active"
tags: ["인지형", "메신저", "맥락", "연속성", "cognitive", "messenger", "context", "continuity"]
---

| 항목 | 내용 |
|------|------|
| 분류 코드 | <span class="pill pill-code">WKV-C.MS-008</span> |
| 유형 | <span class="pill pill-type">인지형 / Cognitive</span> |
| 전파 경로 | <span class="pill pill-vector">메신저 / Messenger</span> |
| 위험도 | <span class="pill pill-severity-critical">치명적 / Critical</span> |
| 최초 발견 | 2026년 초 / Early 2026 |
| 상태 | <span class="pill pill-active">활성 / Active</span> |

## 개요 / Overview

메신저 앱에서 대화가 중간에 끊기는 경험—앱 충돌, 신호 손실, 서버 오류 등—을 통해 감염되는 인지형 바이러스. 감염자는 대화의 맥락을 따라가는 능력을 상실하여, 듣는 모든 문장이 이전 문장과 단절된 독립적 발화로 인식된다. 스토리, 지시사항, 설명 등 어떤 순차적 정보도 연결하지 못하며, 세계가 맥락 없는 단편 문장들의 나열로 분해된다. 치명적 등급이 부여된 이유는 이 바이러스가 인간의 가장 기본적인 인지 능력—순차적 이해—를 파괴하기 때문이다.
{: .ko}

A Cognitive-type virus contracted through the experience of conversations being cut mid-stream on messenger apps—app crashes, signal loss, server errors, and similar interruptions. The infected person loses the ability to follow conversational context, perceiving every sentence heard as an independent utterance disconnected from the previous one. Stories, instructions, explanations—no sequential information can be linked together, and the world decomposes into a series of contextless sentence fragments. It is classified as Critical because it destroys the most fundamental cognitive ability of humans—sequential comprehension.
{: .en}

## 감염 방식 / Infection Method

메신저 대화 중 앱이 비정상 종료되거나, 네트워크 불안정으로 메시지가 중간에 끊기는 상황이 반복적으로 발생하면 감염된다. 특히 감정적으로 중요한 대화(고백, 다툼, 중대 발표 등)가 핵심 순간에 끊길 때 감염 확률이 극적으로 상승한다. 끊어진 대화의 "빈 공간"이 감염 매개체 역할을 하며, 그 빈 공간에 담겼을 메시지를 상상하려는 인지적 시도가 바이러스의 침투 경로가 된다. 3회 이상 연속으로 대화 단절을 경험하면 감염이 거의 확실시된다.
{: .ko}

Infection occurs when messenger conversations are repeatedly interrupted by abnormal app termination or network instability causing messages to cut off mid-stream. Infection probability rises dramatically when emotionally significant conversations (confessions, arguments, major announcements, etc.) are severed at critical moments. The "empty space" of the severed conversation serves as the infection medium, and the cognitive attempt to imagine what message would have filled that space becomes the virus's infiltration pathway. Experiencing conversation severance three or more consecutive times makes infection nearly certain.
{: .en}

## 웹 상 증상 / Web Symptoms

- 메신저 대화에서 이전 메시지와의 연결을 파악하지 못해 매번 "무슨 얘기하고 있었지?"라고 질문함
- 긴 메시지를 읽을 때 첫 문장과 마지막 문장이 전혀 다른 주제로 느껴짐
- 이메일, 게시글 등 긴 텍스트의 논리적 흐름을 추적하지 못하고 개별 문장만 인식함
{: .ko}

- Unable to grasp connections to previous messages in messenger conversations, repeatedly asking "What were we talking about?"
- When reading long messages, the first and last sentences feel like completely different topics
- Cannot track the logical flow of long texts such as emails and posts, perceiving only individual sentences
{: .en}

## 발현 양상 / Manifestation

- 상대방의 말을 한 문장 단위로만 이해하며, 문장 간의 인과 관계를 파악하지 못함—"회의가 취소되었으니 오후에 만나자"를 "회의 취소"와 "오후에 만남"이라는 무관한 두 정보로 인식
- 영화, 드라마, 소설의 서사를 전혀 따라가지 못하며, 각 장면을 독립된 이미지로만 경험함
- 요리 레시피, 조립 설명서 등 순서가 있는 지시를 수행하지 못함—각 단계를 별개의 행위로 인식
- 말기에는 자기 자신의 발화조차 이전 문장과 연결하지 못하여, 말하다 중간에 완전히 다른 주제로 전환됨
{: .ko}

- Comprehends the other person's speech only one sentence at a time, unable to grasp causal relationships between sentences—"The meeting was canceled so let's meet in the afternoon" is perceived as two unrelated pieces of information: "meeting canceled" and "afternoon meeting"
- Completely unable to follow narratives in movies, dramas, or novels, experiencing each scene only as an isolated image
- Cannot execute sequential instructions such as cooking recipes or assembly manuals—each step is perceived as a separate action
- In terminal stages, even one's own speech cannot be connected to previous sentences, causing mid-sentence topic switches to entirely unrelated subjects
{: .en}

## 경계 무너짐 단계 / Boundary Collapse Stages

1. 메신저에서 긴 대화의 흐름을 놓치기 시작—"아까 무슨 얘기했더라?" 빈도 증가 (웹 침투)
2. 온라인 텍스트 전반에서 문단 간 연결을 인식하지 못함—글을 읽어도 요약하지 못함 (웹 확산)
3. 오프라인 대화와 서사 전체에서 맥락 추적 불가—모든 발화가 고립된 단편으로 들림 (현실 침투)
4. 순차적 사고 능력 완전 상실—인과관계, 시간 순서, 논리적 연결이 모두 해체되어 의식이 영원한 "현재 한 문장"에 갇힘 (현실 정착)
{: .ko}

1. Begin losing the thread of long messenger conversations—increasing frequency of "What were we talking about?" (Web infiltration)
2. Cannot recognize connections between paragraphs across all online text—unable to summarize after reading (Web spread)
3. Context tracking fails across all offline conversations and narratives—every utterance is heard as an isolated fragment (Reality breach)
4. Complete loss of sequential thinking—causality, temporal order, and logical connections all dissolve, trapping consciousness in an eternal "current single sentence" (Reality anchor)
{: .en}

## 대응 방법 / Countermeasures

- 메신저 앱의 안정성을 확보하고, 대화 중 비정상 종료가 발생하면 반드시 처음부터 맥락을 재구성한 후 대화를 이어갈 것
- 감염 초기에 매일 "이야기 요약하기" 훈련을 수행할 것—뉴스 기사, 짧은 이야기 등을 읽고 전체 흐름을 요약하는 연습
- 중요한 대화는 메신저가 아닌 안정적인 환경(대면, 유선 전화 등)에서 수행할 것
- 감염자 주변인은 대화 시 매 문장 앞에 이전 맥락을 간단히 요약해주는 "맥락 보조" 방식을 사용할 것
{: .ko}

- Ensure messenger app stability, and if abnormal termination occurs during conversation, always reconstruct context from the beginning before continuing
- In early infection stages, perform daily "story summarization" training—practice reading news articles, short stories, etc. and summarizing the overall flow
- Conduct important conversations in stable environments (face-to-face, landline phone, etc.) rather than via messenger
- People around the infected should use a "context assist" method, briefly summarizing previous context before each sentence during conversation
{: .en}

## 발견 기록 / Discovery Log

2026년 초, 통신 품질이 불안정한 지역에 거주하는 원격 근무자 그룹에서 집단 감염이 발견되었다. 해당 지역은 잦은 네트워크 끊김으로 인해 메신저 대화가 하루에도 수십 번 중단되었고, 근무자들은 점차 업무 지시를 이해하지 못하게 되었다. 초기에는 단순한 스트레스성 집중력 저하로 진단되었으나, 한 근무자가 "각 문장은 이해하는데 문장들이 서로 연결이 안 된다"고 정확히 증상을 묘사하면서 신종 바이러스의 존재가 확인되었다. 현재까지 발견된 인지형 바이러스 중 가장 치명적으로 분류된다.
{: .ko}

In early 2026, a mass infection was discovered among a group of remote workers living in an area with unstable telecommunications quality. The region's frequent network disconnections caused messenger conversations to be interrupted dozens of times daily, and workers gradually became unable to understand work instructions. Initially diagnosed as simple stress-related concentration impairment, the existence of a new virus was confirmed when one worker precisely described the symptom: "I understand each sentence, but the sentences don't connect to each other." It is classified as the most critical Cognitive-type virus discovered to date.
{: .en}

## 관련 바이러스 / Related Viruses

- [널위스퍼 (NullWhisper)](nullwhisper.md): 같은 메신저 벡터 바이러스. 널위스퍼가 판단을 왜곡한다면, 스레드컷은 판단의 전제가 되는 맥락 파악 자체를 불가능하게 만듦—동시 감염 시 의사결정 능력이 완전히 와해됨.
- [네임이터 (NameEater)](nameeater.md): 네임이터가 "이름"을 지운다면 스레드컷은 "연결"을 지움—두 바이러스가 결합하면 이름 없는 단편들만 남아 세계가 완전한 혼돈이 됨.
- [고스트핑 (GhostPing)](ghostping.md): 고스트핑의 허위 알림이 스레드컷 감염자에게는 모든 알림이 맥락 없이 도착하므로, 진짜 메시지와 유령 알림의 구분이 더욱 불가능해짐.
{: .ko}

- [NullWhisper](nullwhisper.md): A fellow messenger-vector virus. If NullWhisper distorts judgment, ThreadCut makes it impossible to grasp the context that is prerequisite to judgment—co-infection completely collapses decision-making ability.
- [NameEater](nameeater.md): If NameEater erases "names," ThreadCut erases "connections"—when the two viruses combine, only nameless fragments remain and the world becomes total chaos.
- [GhostPing](ghostping.md): GhostPing's false notifications arrive without context for ThreadCut-infected individuals, making it even more impossible to distinguish real messages from phantom alerts.
{: .en}

## 참고 / Notes

- 스레드컷은 텍스트뿐 아니라 음악 감상에도 영향을 미침—감염자는 멜로디의 진행을 따라가지 못하고, 각 음을 독립된 소리로 인식함. 음악이 "소음의 연속"으로 들린다는 보고가 다수.
- 일부 연구자는 스레드컷이 인간 의식의 "서사적 자아"를 해체한다고 주장하며, 이 바이러스가 "자아는 이야기로 구성된다"는 심리학적 가설을 역설적으로 입증한다고 제안함.
{: .ko}

- ThreadCut affects not only text but also music listening—infected individuals cannot follow melodic progression and perceive each note as an independent sound. Multiple reports describe music sounding like "a series of noise."
- Some researchers argue that ThreadCut dismantles the "narrative self" of human consciousness, paradoxically proving the psychological hypothesis that "the self is composed of stories."
{: .en}
