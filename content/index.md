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

{%- comment -%}
  Pseudo-random layout for the floating virus field.
  Each node gets --x / --y (percent within the field) and --r (deg rotation)
  computed from its zero-based index via prime-modular arithmetic.
  - 7-col x 5-row jittered grid (7*5 = 35 cells, 33 used)
  - Jitter: ±5% horizontal, ±7% vertical so cells break ruler-straight lines
  - Rotation: ±8° for organic drift orientation
{%- endcomment -%}

<div class="en">
  <div class="virus-field">
    {%- for v in site.data.viruses -%}
      {%- assign idx = forloop.index0 -%}
      {%- if v.primordial -%}
        {%- assign x = 50 -%}
        {%- assign y = 5 -%}
        {%- assign rot = 0 -%}
      {%- else -%}
        {%- assign col = idx | modulo: 7 -%}
        {%- assign row = idx | divided_by: 7 -%}
        {%- assign x_base = col | times: 13 | plus: 10 -%}
        {%- assign y_base = row | times: 16 | plus: 18 -%}
        {%- assign jxm = idx | times: 37 | modulo: 11 -%}
        {%- assign jx = jxm | minus: 5 -%}
        {%- assign jym = idx | times: 53 | modulo: 15 -%}
        {%- assign jy = jym | minus: 7 -%}
        {%- assign rm = idx | times: 29 | modulo: 17 -%}
        {%- assign rot = rm | minus: 8 -%}
        {%- assign x = x_base | plus: jx -%}
        {%- assign y = y_base | plus: jy -%}
      {%- endif -%}
      <a class="virus-node{% if v.primordial %} is-primordial{% endif %}" href="{{ v.file | relative_url }}" style="--x:{{ x }}%;--y:{{ y }}%;--r:{{ rot }}deg;">
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
      {%- assign idx = forloop.index0 -%}
      {%- if v.primordial -%}
        {%- assign x = 50 -%}
        {%- assign y = 5 -%}
        {%- assign rot = 0 -%}
      {%- else -%}
        {%- assign col = idx | modulo: 7 -%}
        {%- assign row = idx | divided_by: 7 -%}
        {%- assign x_base = col | times: 13 | plus: 10 -%}
        {%- assign y_base = row | times: 16 | plus: 18 -%}
        {%- assign jxm = idx | times: 37 | modulo: 11 -%}
        {%- assign jx = jxm | minus: 5 -%}
        {%- assign jym = idx | times: 53 | modulo: 15 -%}
        {%- assign jy = jym | minus: 7 -%}
        {%- assign rm = idx | times: 29 | modulo: 17 -%}
        {%- assign rot = rm | minus: 8 -%}
        {%- assign x = x_base | plus: jx -%}
        {%- assign y = y_base | plus: jy -%}
      {%- endif -%}
      <a class="virus-node{% if v.primordial %} is-primordial{% endif %}" href="{{ v.file | relative_url }}" style="--x:{{ x }}%;--y:{{ y }}%;--r:{{ rot }}deg;">
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
      {%- assign idx = forloop.index0 -%}
      {%- if v.primordial -%}
        {%- assign x = 50 -%}
        {%- assign y = 5 -%}
        {%- assign rot = 0 -%}
      {%- else -%}
        {%- assign col = idx | modulo: 7 -%}
        {%- assign row = idx | divided_by: 7 -%}
        {%- assign x_base = col | times: 13 | plus: 10 -%}
        {%- assign y_base = row | times: 16 | plus: 18 -%}
        {%- assign jxm = idx | times: 37 | modulo: 11 -%}
        {%- assign jx = jxm | minus: 5 -%}
        {%- assign jym = idx | times: 53 | modulo: 15 -%}
        {%- assign jy = jym | minus: 7 -%}
        {%- assign rm = idx | times: 29 | modulo: 17 -%}
        {%- assign rot = rm | minus: 8 -%}
        {%- assign x = x_base | plus: jx -%}
        {%- assign y = y_base | plus: jy -%}
      {%- endif -%}
      <a class="virus-node{% if v.primordial %} is-primordial{% endif %}" href="{{ v.file | relative_url }}" style="--x:{{ x }}%;--y:{{ y }}%;--r:{{ rot }}deg;">
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
