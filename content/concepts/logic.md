---
title: "로직형 / Logic Type"
parent: "개념 / Concepts"
nav_order: 1
---

{% include lang_toggle.html %}

<a href="../index.md" class="home-link">Kiwiki</a>


| Key | Value |
|-----|-------|
| Category | <span class="pill pill-type">유형 / Type</span> |
| Classification Code | <span class="pill pill-code">WKV-L</span> |
| Affected Domain | Reasoning, judgment, decision-making |
| Known Viruses | 8 |
| Avg. Severity | High |

## Overview

Logic-type viruses are one of four primary classifications of Web Kiwi Virus. They target the victim's reasoning processes, judgment, and decision-making ability. Unlike [Cognitive-type](cognitive.md) viruses, which distort *how* a person perceives information, Logic-type viruses distort *how* a person acts on information. The infected individual's capacity to process facts remains intact -- but the conclusions they draw, the choices they make, and the priorities they set are systematically corrupted. This makes Logic-type infections notoriously difficult to self-diagnose: the victim believes they are thinking clearly, because they are. The logic itself is sound. It is the premises that have been poisoned.
{: .en}

로직형 바이러스는 웹키위바이러스의 4가지 주요 유형 중 하나로, 감염자의 추론 과정, 판단력, 의사결정 능력을 표적으로 삼는다. 정보를 *인식하는 방식*을 왜곡하는 [인지형](cognitive.md) 바이러스와 달리, 로직형 바이러스는 정보에 *대응하는 방식*을 왜곡한다. 감염자의 사실 처리 능력 자체는 온전히 유지되지만, 도출하는 결론, 내리는 선택, 설정하는 우선순위가 체계적으로 오염된다. 이 때문에 로직형 감염은 자가 진단이 극히 어렵다. 감염자는 자신이 명확히 사고하고 있다고 믿는데, 실제로 그러하기 때문이다. 논리 자체는 건전하다. 오염된 것은 전제다.
{: .ko}

ロジック型ウイルスは、ウェブキウイウイルスの4つの主要分類の1つであり、感染者の推論過程、判断力、意思決定能力を標的とする。情報の*認識方法*を歪める[認知型](cognitive.md)ウイルスとは異なり、ロジック型ウイルスは情報への*対応方法*を歪める。感染者の事実処理能力自体は完全に維持されるが、導き出す結論、下す選択、設定する優先順位が体系的に汚染される。このためロジック型感染は自己診断が極めて困難である。感染者は自分が明確に思考していると信じているが、実際にその通りだからだ。論理そのものは健全である。汚染されているのは前提なのだ。
{: .ja}

## Common Patterns

Logic-type viruses share several operational patterns that distinguish them from other types. First, they tend to operate through **suggestion rather than compulsion**. The victim is never forced to act; instead, corrupted reasoning makes the harmful choice appear to be the optimal one. Second, they frequently employ **escalating stakes** -- early decisions seem trivial (choosing a different route to work, skipping a meal), but each corrupted choice narrows the victim's options until they are locked into catastrophic outcomes. Third, most Logic-type viruses exhibit a **mimicry of rationality**: symptoms present as reasonable thought rather than intrusive or alien impulses, which is why third-party intervention is often the only path to diagnosis.
{: .en}

로직형 바이러스는 다른 유형과 구별되는 여러 공통 작동 패턴을 공유한다. 첫째, **강제가 아닌 암시**를 통해 작동하는 경향이 있다. 감염자는 행동을 강요받지 않으며, 대신 오염된 추론이 해로운 선택을 최적의 선택처럼 보이게 만든다. 둘째, **점진적 위험 상승**을 자주 활용한다 -- 초기 결정은 사소해 보이지만(출근 경로 변경, 한 끼 건너뛰기), 각각의 오염된 선택이 감염자의 선택지를 좁혀 결국 파국적 결과에 이르게 한다. 셋째, 대부분의 로직형 바이러스는 **합리성의 모방**을 보인다: 증상이 침입적이거나 이질적인 충동이 아닌 합리적 사고로 나타나기 때문에, 제3자의 개입이 종종 유일한 진단 경로가 된다.
{: .ko}

ロジック型ウイルスは、他の型と区別される共通の動作パターンを持つ。第一に、**強制ではなく暗示**を通じて作動する傾向がある。感染者は行動を強制されず、代わりに汚染された推論が有害な選択を最適に見せる。第二に、**段階的なリスク上昇**を頻繁に用いる――初期の決定は些細に見えるが（通勤ルートの変更、食事の抜き）、汚染された選択のたびに選択肢が狭まり、最終的に壊滅的な結果へ至る。第三に、ほとんどのロジック型ウイルスは**合理性の模倣**を示す：症状が侵入的あるいは異質な衝動ではなく合理的思考として現れるため、第三者の介入が唯一の診断経路となることが多い。
{: .ja}

## Known Logic-type Viruses

| Virus | Vector | Severity | Key Characteristic |
|-------|--------|----------|--------------------|
| [NullWhisper](../viruses/nullwhisper.md) | <span class="pill pill-vector">메신저</span> | <span class="pill pill-severity-high">높음</span> | Whispered suggestions at decision points |
| [SyntaxWraith](../viruses/syntaxwraith.md) | <span class="pill pill-vector">직접접근</span> | <span class="pill pill-severity-moderate">보통</span> | Corrupts grammatical logic in written communication |
| [PhantomTab](../viruses/phantomtab.md) | <span class="pill pill-vector">SNS</span> | <span class="pill pill-severity-moderate">보통</span> | Creates phantom browser tabs that influence choices |
| [ByteShade](../viruses/byteshade.md) | <span class="pill pill-vector">이메일</span> | <span class="pill pill-severity-high">높음</span> | Shades numerical reasoning toward wrong conclusions |
| [GhostPing](../viruses/ghostping.md) | <span class="pill pill-vector">검색엔진</span> | <span class="pill pill-severity-moderate">보통</span> | Phantom notifications that redirect attention and priority |
| [ParadoxFeed](../viruses/paradoxfeed.md) | <span class="pill pill-vector">직접접근</span> | <span class="pill pill-severity-high">높음</span> | Feeds contradictory premises that both seem true |
| [InkBleed](../viruses/inkbleed.md) | <span class="pill pill-vector">SNS</span> | <span class="pill pill-severity-high">높음</span> | Written words bleed new meaning, altering intent |
| [ClipBoard](../viruses/clipboard.md) | <span class="pill pill-vector">메신저</span> | <span class="pill pill-severity-moderate">보통</span> | Clipboard contents subtly alter pasted decisions |

## Why Logic-type is Dangerous

The greatest threat posed by Logic-type viruses is their **invisibility to the infected**. A person suffering from [Sensory-type](sensory.md) distortion knows something is wrong when they see colors that shouldn't exist. A person experiencing [Cognitive-type](cognitive.md) memory loss notices the gaps. But a Logic-type victim experiences perfect clarity -- a clarity that is entirely manufactured. This is why Logic-type viruses have the highest rate of late-stage detection among all four types. By the time the infection is identified, the victim has often already made a chain of decisions whose consequences are difficult or impossible to reverse. The concept of [Boundary Collapse](boundary-collapse.md) applies uniquely here: it is not the environment or senses that cross from web to reality, but the *reasoning framework itself*.
{: .en}

로직형 바이러스가 가장 위험한 이유는 **감염자에게 보이지 않는다**는 점이다. [감각형](sensory.md) 왜곡을 겪는 사람은 존재해서는 안 되는 색을 볼 때 무언가 잘못됐음을 안다. [인지형](cognitive.md) 기억 상실을 겪는 사람은 공백을 알아차린다. 그러나 로직형 감염자는 완벽한 명료함을 경험한다 -- 완전히 조작된 명료함을. 이것이 로직형 바이러스가 4가지 유형 중 후기 단계 발견율이 가장 높은 이유다. 감염이 확인될 때쯤이면, 감염자는 이미 되돌리기 어렵거나 불가능한 일련의 결정을 내린 후인 경우가 많다. [경계 무너짐](boundary-collapse.md)의 개념이 여기서 독특하게 적용된다: 웹에서 현실로 넘어오는 것은 환경이나 감각이 아니라 *추론 체계 자체*다.
{: .ko}

ロジック型ウイルスの最大の脅威は、**感染者にとって不可視**であることだ。[感覚型](sensory.md)の歪みに苦しむ人は、存在しないはずの色が見えた時に異常を察知する。[認知型](cognitive.md)の記憶喪失を経験する人は空白に気づく。しかしロジック型の感染者は完璧な明晰さを経験する――完全に作られた明晰さを。これが、ロジック型ウイルスが4類型の中で後期段階での発見率が最も高い理由である。感染が特定される頃には、感染者はすでに取り返しのつかない一連の決定を下していることが多い。[境界崩壊](boundary-collapse.md)の概念がここで独自に適用される：ウェブから現実に越境するのは環境や感覚ではなく、*推論体系そのもの*なのだ。
{: .ja}

## Related Concepts

- [Cognitive Type](cognitive.md) -- frequently confused with Logic-type; see key differences above
- [Boundary Collapse](boundary-collapse.md) -- Logic-type collapse manifests as corrupted reasoning frameworks
- [Co-infection](co-infection.md) -- Logic + Cognitive co-infection is considered one of the most dangerous combinations
- [Manifestation](manifestation.md) -- Logic-type manifestation is the hardest to detect externally
