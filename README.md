# 🥝 Kiwiki

**웹키위바이러스(Web Kiwi Virus)**의 종류를 정리한 위키입니다.

웹키위바이러스는 웹을 통해 퍼지며, 현실과 가상의 경계를 무너뜨려 현실에도 영향을 미치는 바이러스입니다.

## 구조

```
kiwiki/
├── content/
│   ├── index.md                 # 메인 페이지
│   ├── viruses/                 # 바이러스 종류별 문서
│   │   ├── _template.md         # 문서 작성 템플릿
│   │   └── (바이러스명).md
│   ├── taxonomy/                # 분류 체계
│   │   └── index.md
│   └── glossary/                # 용어 사전
│       └── index.md
├── data/
│   └── virus-index.json         # 바이러스 목록 인덱스
└── config/
    └── site.json                # 사이트 설정
```

## 콘텐츠 작성 방법

1. `content/viruses/_template.md`를 복사하여 새 바이러스 문서 작성
2. `data/virus-index.json`에 해당 바이러스 항목 추가
3. 필요시 `content/glossary/index.md`에 용어 추가

## 데이터 형식

- **문서**: Markdown (`.md`)
- **인덱스/메타데이터**: JSON (`.json`)
