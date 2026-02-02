# Frontend Performance Analyzer

Chrome DevTools MCP를 활용한 프론트엔드 성능 병목 자동 분석 도구

---

## 프로젝트 개요

Chrome DevTools MCP를 기반으로 프론트엔드 성능을 자동 분석하고, 코드 레벨 병목 지점을 식별하여 실무 적용 가능한 개선안을 제시하는 도구입니다. 실제 브라우저 환경에서 성능 데이터를 수집하고, 복사-붙여넣기 가능한 개선 코드와 함께 HTML 보고서를 자동 생성합니다.

<h3 align="center"> 실행 데모</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/96f92745-9782-4f4a-b883-36ab732a0016" width="60%" />
</p>

<h3 align="center"> 최적화 결과 분석</h3>
<p align="center">
  <img src="https://github.com/user-attachments/assets/fe7f8a4d-cd8f-4a8f-916a-ea757b2ca2ac" width="48%" />
  <img src="https://github.com/user-attachments/assets/1071e790-4d98-4dff-b89a-559604496142" width="48%" />
</p>

---

## 프로젝트 구조

```
perf-analyzer/
├── init.md                               # 분석 설정
├── scenarios/
│   ├── default-static-scenario.md        # 정적 페이지 분석
│   └── default-interaction-scenario.md   # 상호작용 분석
├── modules/
│   ├── process.md                        # 분석 프로세스
│   └── output-format.md                  # 출력 형식
└── result/
    ├── result.txt                        # 텍스트 보고서
    └── result.html                       # HTML 보고서
```

---
## 실행 방법

### 1. 설치

```bash
npm install @seonjiwon/frontend-perf-analyzer
```

MCP 설정 파일에 Chrome DevTools MCP 추가:

```json
{
    "mcpServers": {
        "chrome-devtools": {
            "command": "npx",
            "args": ["-y", "chrome-devtools-mcp@latest"]
        }
    }
}
```

AI CLI에서 `/mcp` 입력 시 다음 함수 확인:
- `performance_analyze_insight`
- `performance_start_trace`
- `performance_stop_trace`

### 2. 설정 파일 수정

`init.md` 파일에서 분석 옵션 설정:

```markdown
- SCENARIO: default-static-scenario
- URL: http://localhost:3000
- DETAILED_ANALYSIS: true
```

| 옵션 | 설명 | 예시 |
|------|------|------|
| SCENARIO | 시나리오 파일명 (확장자 제외) | `default-static-scenario` |
| URL | 분석 대상 URL | `http://localhost:3000` |
| DETAILED_ANALYSIS | 코드 분석 포함 여부 | `true` / `false` |

### 3. AI에게 분석 요청

```
perf-analyzer/init.md의 설정대로 분석을 시작해 주세요.
```

### 4. 결과 확인

- `result/result.txt` - 텍스트 보고서
- `result/result.html` - HTML 보고서
---


## 시나리오 설정 방법

### 기본 시나리오

**default-static-scenario**  
정적 페이지 로드 성능 분석 (LCP 측정)

**default-interaction-scenario**  
사용자 인터랙션 성능 분석 (INP, CLS 측정)

### 커스텀 시나리오 작성

`scenarios/` 폴더에 새 파일 생성:

```markdown
# my-scenario.md

## 1. 시나리오 정보
- SCENARIO_NAME: my-scenario
- SCENARIO_TYPE: [page-load | interaction]
- URL: {{URL}}

## 3. 액션 시퀀스
[측정할 사용자 액션 정의]
```

### DETAILED_ANALYSIS 옵션

**true** - Phase 1-5 전체 분석
- 성능 측정 + 병목 식별 + 코드 분석 + 개선안 제시

**false** - Phase 1-3 기본 분석
- 성능 측정 + 병목 식별

---

## 성능 지표 기준

### [Core Web Vitals](https://web.dev/articles/vitals?hl=ko)

| 메트릭 | 양호 | 개선 필요 | 문제 |
|--------|------|-----------|------|
| **LCP** | < 2.5s | 2.5s ~ 4s | > 4s |
| **CLS** | < 0.1 | 0.1 ~ 0.25 | > 0.25 |
| **INP** | < 200ms | 200ms ~ 500ms | > 500ms |

**LCP (Largest Contentful Paint)**: 가장 큰 콘텐츠 요소 렌더링 시간  
**CLS (Cumulative Layout Shift)**: 예기치 않은 레이아웃 이동 점수  
**INP (Interaction to Next Paint)**: 사용자 입력 응답 시간

---

## 시스템 요구사항

- Chrome DevTools MCP 도구
- MCP 지원 AI CLI (Claude, Gemini Code Assist 등)
- Node.js v18.0.0 이상
- 분석 대상 서버 실행 중

---

## 문의

Email: tommys915@gmail.com

---

## 라이선스

MIT License
