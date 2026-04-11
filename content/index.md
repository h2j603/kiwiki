---
title: "Kiwiki"
nav_order: 1
permalink: /
---

{% include lang_toggle.html %}

Web Kiwi Virus Wiki
{: .en}

웹키위바이러스 위키
{: .ko}

ウェブキウイウイルス ウィキ
{: .ja}

<div class="stats-bar en"><span>33 documented</span> <span>1 primordial</span> <span>4 types</span> <span>5 vectors</span></div>

<div class="stats-bar ko"><span>33종 문서화</span> <span>1종 원형</span> <span>4개 유형</span> <span>5개 경로</span></div>

<div class="stats-bar ja"><span>33種 文書化</span> <span>1種 原型</span> <span>4タイプ</span> <span>5経路</span></div>

{%- assign primordial = site.data.viruses | where: "primordial", true | first -%}

<div class="en">
  <div class="lineage" role="tree" aria-label="Web Kiwi Virus phylogeny">
    <div class="lineage-root">
      <a class="strain-node strain-root is-{{ primordial.severity }}" href="{{ primordial.file | relative_url }}">
        <span class="strain-code">{{ primordial.code }}</span>
        <span class="strain-name">✢{{ primordial.en }}✢</span>
      </a>
      <div class="primordial-label">PRIMORDIAL STRAIN</div>
    </div>

    <div class="lineage-trunk" aria-hidden="true"></div>

    <div class="lineage-branches">
      {%- for t in site.data.types -%}
        <div class="lineage-branch" data-type="{{ t.key }}">
          <div class="branch-head">
            <div class="branch-code">WKV-{{ t.key }}.**</div>
            <div class="branch-label">{{ t.en }}</div>
          </div>
          <ul class="branch-strains">
            {%- assign strains = site.data.viruses | where: "type", t.key -%}
            {%- for s in strains -%}
              <li>
                <a class="strain-node is-{{ s.severity }}" href="{{ s.file | relative_url }}">
                  <span class="strain-code">{{ s.code | remove_first: "WKV-" }}</span>
                  <span class="strain-name">✢{{ s.en }}✢</span>
                </a>
              </li>
            {%- endfor -%}
          </ul>
        </div>
      {%- endfor -%}
    </div>
  </div>

  <div class="ref-grid">
    <a class="ref-link" href="{{ '/taxonomy/' | relative_url }}">Taxonomy</a>
    <a class="ref-link" href="{{ '/glossary/' | relative_url }}">Glossary</a>
    <a class="ref-link" href="{{ '/concepts/' | relative_url }}">Concepts</a>
  </div>
</div>

<div class="ko">
  <div class="lineage" role="tree" aria-label="웹키위바이러스 계통수">
    <div class="lineage-root">
      <a class="strain-node strain-root is-{{ primordial.severity }}" href="{{ primordial.file | relative_url }}">
        <span class="strain-code">{{ primordial.code }}</span>
        <span class="strain-name">✢{{ primordial.ko }}✢</span>
      </a>
      <div class="primordial-label">원형 변이주 / PRIMORDIAL STRAIN</div>
    </div>

    <div class="lineage-trunk" aria-hidden="true"></div>

    <div class="lineage-branches">
      {%- for t in site.data.types -%}
        <div class="lineage-branch" data-type="{{ t.key }}">
          <div class="branch-head">
            <div class="branch-code">WKV-{{ t.key }}.**</div>
            <div class="branch-label">{{ t.ko }}</div>
          </div>
          <ul class="branch-strains">
            {%- assign strains = site.data.viruses | where: "type", t.key -%}
            {%- for s in strains -%}
              <li>
                <a class="strain-node is-{{ s.severity }}" href="{{ s.file | relative_url }}">
                  <span class="strain-code">{{ s.code | remove_first: "WKV-" }}</span>
                  <span class="strain-name">✢{{ s.ko }}✢</span>
                </a>
              </li>
            {%- endfor -%}
          </ul>
        </div>
      {%- endfor -%}
    </div>
  </div>

  <div class="ref-grid">
    <a class="ref-link" href="{{ '/taxonomy/' | relative_url }}">분류 체계</a>
    <a class="ref-link" href="{{ '/glossary/' | relative_url }}">용어 사전</a>
    <a class="ref-link" href="{{ '/concepts/' | relative_url }}">개념</a>
  </div>
</div>

<div class="ja">
  <div class="lineage" role="tree" aria-label="ウェブキウイウイルス系統樹">
    <div class="lineage-root">
      <a class="strain-node strain-root is-{{ primordial.severity }}" href="{{ primordial.file | relative_url }}">
        <span class="strain-code">{{ primordial.code }}</span>
        <span class="strain-name">✢{{ primordial.ja }}✢</span>
      </a>
      <div class="primordial-label">原型変異株 / PRIMORDIAL STRAIN</div>
    </div>

    <div class="lineage-trunk" aria-hidden="true"></div>

    <div class="lineage-branches">
      {%- for t in site.data.types -%}
        <div class="lineage-branch" data-type="{{ t.key }}">
          <div class="branch-head">
            <div class="branch-code">WKV-{{ t.key }}.**</div>
            <div class="branch-label">{{ t.ja }}</div>
          </div>
          <ul class="branch-strains">
            {%- assign strains = site.data.viruses | where: "type", t.key -%}
            {%- for s in strains -%}
              <li>
                <a class="strain-node is-{{ s.severity }}" href="{{ s.file | relative_url }}">
                  <span class="strain-code">{{ s.code | remove_first: "WKV-" }}</span>
                  <span class="strain-name">✢{{ s.ja }}✢</span>
                </a>
              </li>
            {%- endfor -%}
          </ul>
        </div>
      {%- endfor -%}
    </div>
  </div>

  <div class="ref-grid">
    <a class="ref-link" href="{{ '/taxonomy/' | relative_url }}">分類体系</a>
    <a class="ref-link" href="{{ '/glossary/' | relative_url }}">用語辞典</a>
    <a class="ref-link" href="{{ '/concepts/' | relative_url }}">概念</a>
  </div>
</div>
