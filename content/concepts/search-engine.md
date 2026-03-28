---
title: "검색엔진 / Search Engine"
parent: "개념 / Concepts"
nav_order: 7
---

{% include lang_toggle.html %}

<a href="/kiwiki/" class="home-link">⌂</a>


| Key | Value |
|-----|-------|
| Category | <span class="pill pill-vector">전파 경로 / Vector</span> |
| Korean | 검색엔진 |
| Infection Method | Search results, snippets, cached pages, autocomplete |
| Known Viruses | 6 |
| Notable Feature | Infection possible without clicking any link |

## Overview

Search Engine is the third most common infection vector for Web Kiwi Viruses, but it is arguably the most insidious. With [SNS](sns.md) and [Messenger](messenger.md) vectors, the victim at least interacts with content -- viewing an image, reading a message. Search Engine-vector viruses can infect through the **search results page itself**, before the victim clicks on any link. The snippet text, the cached preview, the autocomplete suggestion -- all of these are sufficient transmission surfaces. [KiwiEcho](/kiwiki/viruses/kiwiecho.md) has been documented infecting users who merely typed a search query and read the results summary. [KiwiSpot](/kiwiki/viruses/kiwispot.md), one of the most severe viruses in the entire catalog, spreads through search result snippets that contain specific character sequences which trigger the infection upon being read. You don't need to visit the page. You just need to search for it.
{: .en}

검색엔진은 웹키위바이러스의 세 번째로 흔한 감염 경로이지만, 가장 교활한 경로라고 할 수 있다. [SNS](sns.md)와 [메신저](messenger.md) 경로에서는 감염자가 최소한 콘텐츠와 상호작용한다 -- 이미지를 보거나 메시지를 읽는다. 검색엔진 경로 바이러스는 감염자가 어떤 링크도 클릭하기 전에 **검색 결과 페이지 자체**를 통해 감염시킬 수 있다. 스니펫 텍스트, 캐시된 미리보기, 자동완성 제안 -- 이 모두가 충분한 전파 표면이다. [키위에코](/kiwiki/viruses/kiwiecho.md)는 단지 검색 쿼리를 입력하고 결과 요약을 읽은 사용자를 감염시킨 것으로 기록되었다. 전체 카탈로그에서 가장 심각한 바이러스 중 하나인 [키위스팟](/kiwiki/viruses/kiwispot.md)은 읽히면 감염을 촉발하는 특정 문자 서열을 포함한 검색 결과 스니펫을 통해 확산된다. 페이지를 방문할 필요가 없다. 검색만 하면 된다.
{: .ko}

検索エンジンはウェブキウイウイルスの3番目に一般的な感染経路だが、最も狡猾な経路と言える。[SNS](sns.md)や[メッセンジャー](messenger.md)経路では、感染者は少なくともコンテンツと相互作用する――画像を見る、メッセージを読む。検索エンジン経路ウイルスは、感染者がリンクをクリックする前に**検索結果ページ自体**を通じて感染させうる。スニペットテキスト、キャッシュされたプレビュー、オートコンプリートの提案――これらすべてが十分な伝播面となる。[エコループ](/kiwiki/viruses/kiwiecho.md)は検索クエリを入力して結果要約を読んだだけのユーザーを感染させたことが記録されている。カタログ全体で最も深刻なウイルスの1つである[ブラインドスポット](/kiwiki/viruses/kiwispot.md)は、読まれると感染を引き起こす特定の文字列を含む検索結果スニペットを通じて拡散する。ページを訪問する必要はない。検索するだけでよい。
{: .ja}

## How Search Results Become Infected

Search Engine-vector viruses exploit the way search engines process, index, and display web content. The infection chain typically works as follows:

1. A contaminated webpage exists somewhere on the internet -- often an abandoned page, a forgotten forum, a dead blog.
2. The search engine's crawler indexes the page, extracting text for snippets and caching the content.
3. The extraction process does not filter the viral payload. The infectious content is now embedded in the search engine's own database.
4. When a user's query matches the indexed content, the infected snippet is displayed on the results page.
5. Reading the snippet -- even without clicking through -- transmits the virus.

This means the original contaminated page doesn't even need to still exist. [KiwiAfter](/kiwiki/viruses/kiwiafter.md) is named for this exact phenomenon: it spreads through cached versions of pages that have already been deleted. The afterimage of a dead page, preserved in the search engine's memory, continues to infect.
{: .en}

검색엔진 경로 바이러스는 검색엔진이 웹 콘텐츠를 처리, 색인, 표시하는 방식을 악용한다. 감염 사슬은 일반적으로 다음과 같이 작동한다:

1. 오염된 웹페이지가 인터넷 어딘가에 존재한다 -- 종종 버려진 페이지, 잊혀진 포럼, 죽은 블로그.
2. 검색엔진의 크롤러가 페이지를 색인하며, 스니펫용 텍스트를 추출하고 콘텐츠를 캐시한다.
3. 추출 과정이 바이러스 페이로드를 필터링하지 않는다. 감염성 콘텐츠가 이제 검색엔진 자체의 데이터베이스에 내장된다.
4. 사용자의 쿼리가 색인된 콘텐츠와 일치하면, 감염된 스니펫이 결과 페이지에 표시된다.
5. 클릭하지 않고도 스니펫을 읽는 것만으로 바이러스가 전파된다.

이는 원래의 오염된 페이지가 더 이상 존재하지 않아도 된다는 뜻이다. [키위애프터](/kiwiki/viruses/kiwiafter.md)는 정확히 이 현상에서 이름이 붙여졌다: 이미 삭제된 페이지의 캐시된 버전을 통해 확산된다. 검색엔진의 기억에 보존된 죽은 페이지의 잔상이 계속 감염을 일으킨다.
{: .ko}

検索エンジン経路ウイルスは、検索エンジンがウェブコンテンツを処理、索引、表示する方式を悪用する。感染の連鎖は通常次のように機能する：

1. 汚染されたウェブページがインターネットのどこかに存在する――しばしば放棄されたページ、忘れられたフォーラム、死んだブログ。
2. 検索エンジンのクローラーがページを索引し、スニペット用テキストを抽出してコンテンツをキャッシュする。
3. 抽出過程がウイルスのペイロードをフィルタリングしない。感染性コンテンツが検索エンジン自体のデータベースに埋め込まれる。
4. ユーザーのクエリが索引されたコンテンツと一致すると、感染したスニペットが結果ページに表示される。
5. クリックせずともスニペットを読むだけでウイルスが伝播する。

これは元の汚染ページがもはや存在する必要すらないことを意味する。[アフターイメージ](/kiwiki/viruses/kiwiafter.md)はまさにこの現象にちなんで名付けられた：すでに削除されたページのキャッシュ版を通じて拡散する。検索エンジンの記憶に保存された死んだページの残像が、感染を続ける。
{: .ja}

## Known Search Engine-vector Viruses

| Virus | Type | Severity | Search Mechanism |
|-------|------|----------|------------------|
| [KiwiEcho](/kiwiki/viruses/kiwiecho.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-moderate">보통</span> | Query result loops |
| [KiwiSpot](/kiwiki/viruses/kiwispot.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-critical">치명적</span> | Snippet text sequences |
| [KiwiGhost](/kiwiki/viruses/kiwighost.md) | <span class="pill pill-type">로직형</span> | <span class="pill pill-severity-moderate">보통</span> | Search notifications |
| [KiwiAfter](/kiwiki/viruses/kiwiafter.md) | <span class="pill pill-type">감각형</span> | <span class="pill pill-severity-moderate">보통</span> | Cached dead pages |
| [KiwiTime](/kiwiki/viruses/kiwitime.md) | <span class="pill pill-type">인지형</span> | <span class="pill pill-severity-high">높음</span> | Date/time metadata in results |
| [KiwiRust](/kiwiki/viruses/kiwirust.md) | <span class="pill pill-type">환경형</span> | <span class="pill pill-severity-high">높음</span> | Image search thumbnails |

## Prevention Challenges

Search Engine-vector viruses are nearly impossible to prevent at the individual level. You cannot browse the modern internet without using a search engine. Content blockers and filters cannot detect viral payloads that are indistinguishable from normal text. The only documented risk reduction is to avoid searching for topics known to be associated with high contamination -- but the list of such topics grows constantly, and many infections occur from completely mundane searches. [KiwiTime](/kiwiki/viruses/kiwitime.md) has been transmitted through date-related search results. [KiwiGhost](/kiwiki/viruses/kiwighost.md) through notification-related queries. The search itself becomes the hazard.
{: .en}

검색엔진 경로 바이러스는 개인 수준에서 예방이 거의 불가능하다. 검색엔진을 사용하지 않고는 현대 인터넷을 탐색할 수 없다. 콘텐츠 차단기와 필터는 일반 텍스트와 구별할 수 없는 바이러스 페이로드를 감지할 수 없다. 유일하게 문서화된 위험 감소 방법은 높은 오염과 관련된 것으로 알려진 주제를 검색하지 않는 것이지만, 그러한 주제 목록은 끊임없이 늘어나며 많은 감염이 완전히 평범한 검색에서 발생한다. [키위타임](/kiwiki/viruses/kiwitime.md)는 날짜 관련 검색 결과를 통해 전파되었다. [키위고스트](/kiwiki/viruses/kiwighost.md)은 알림 관련 쿼리를 통해. 검색 자체가 위험이 되는 것이다.
{: .ko}

検索エンジン経路ウイルスは個人レベルでの予防がほぼ不可能である。検索エンジンを使用せずに現代のインターネットを閲覧することはできない。コンテンツブロッカーやフィルターは通常のテキストと区別できないウイルスペイロードを検出できない。唯一記録されたリスク低減策は、高汚染に関連すると知られたトピックの検索を避けることだが、そのようなトピックのリストは絶えず増加し、多くの感染は完全に日常的な検索から発生する。[タイムスタンプ](/kiwiki/viruses/kiwitime.md)は日付関連の検索結果を通じて伝播した。[ゴーストピング](/kiwiki/viruses/kiwighost.md)は通知関連のクエリを通じて。検索そのものが危険となるのだ。
{: .ja}

## Related Concepts

- [Direct Access](direct-access.md) -- both involve web browsing, but direct access requires intentional URL entry
- [Boundary Collapse](boundary-collapse.md) -- search engine vector enables rapid collapse through passive exposure
- [SNS](sns.md) -- SNS has higher volume, but search engine requires less user action
- [Manifestation](manifestation.md) -- search engine viruses often have delayed manifestation
