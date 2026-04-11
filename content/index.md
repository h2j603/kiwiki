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

<div class="en">
  <div class="virus-field">
    {%- for v in site.data.viruses -%}
    <a class="virus-node{% if v.primordial %} is-primordial{% endif %}" href="{{ v.file | relative_url }}">
      <span class="virus-code">{{ v.code }}</span>
      <span class="virus-name">✢{{ v.en }}✢</span>
    </a>
    {%- endfor -%}
  </div>

  <div class="ref-grid">
    <a class="ref-link" href="{{ '/taxonomy/' | relative_url }}">Taxonomy</a>
    <a class="ref-link" href="{{ '/glossary/' | relative_url }}">Glossary</a>
    <a class="ref-link" href="{{ '/concepts/' | relative_url }}">Concepts</a>
  </div>
</div>

<div class="ko">
  <div class="virus-field">
    {%- for v in site.data.viruses -%}
    <a class="virus-node{% if v.primordial %} is-primordial{% endif %}" href="{{ v.file | relative_url }}">
      <span class="virus-code">{{ v.code }}</span>
      <span class="virus-name">✢{{ v.ko }}✢</span>
    </a>
    {%- endfor -%}
  </div>

  <div class="ref-grid">
    <a class="ref-link" href="{{ '/taxonomy/' | relative_url }}">분류 체계</a>
    <a class="ref-link" href="{{ '/glossary/' | relative_url }}">용어 사전</a>
    <a class="ref-link" href="{{ '/concepts/' | relative_url }}">개념</a>
  </div>
</div>

<div class="ja">
  <div class="virus-field">
    {%- for v in site.data.viruses -%}
    <a class="virus-node{% if v.primordial %} is-primordial{% endif %}" href="{{ v.file | relative_url }}">
      <span class="virus-code">{{ v.code }}</span>
      <span class="virus-name">✢{{ v.ja }}✢</span>
    </a>
    {%- endfor -%}
  </div>

  <div class="ref-grid">
    <a class="ref-link" href="{{ '/taxonomy/' | relative_url }}">分類体系</a>
    <a class="ref-link" href="{{ '/glossary/' | relative_url }}">用語辞典</a>
    <a class="ref-link" href="{{ '/concepts/' | relative_url }}">概念</a>
  </div>
</div>
