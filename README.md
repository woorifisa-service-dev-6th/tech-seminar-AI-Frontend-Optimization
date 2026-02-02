# Frontend Performance Analyzer

Chrome DevTools MCP를 활용한 프론트엔드 성능 병목 자동 분석 도구

## 데모 영상
![demo-lcp](https://github.com/user-attachments/assets/96f92745-9782-4f4a-b883-36ab732a0016)
<img width="1023" height="465" alt="demo-code-optimization" src="https://github.com/user-attachments/assets/fe7f8a4d-cd8f-4a8f-916a-ea757b2ca2ac" />
<img width="1079" height="425" alt="demo-optim-report" src="https://github.com/user-attachments/assets/1071e790-4d98-4dff-b89a-559604496142" />



## 특징

- Chrome DevTools MCP 기반 자동 성능 측정
- 코드 레벨 병목 지점 정확한 식별
- 실무 적용 가능한 개선 코드 제안
- HTML 보고서 자동 생성

## 구조

```
perf-analyzer/
├── init.md                               # 분석 설정
├── scenarios/
│   ├── default-static-scenario.md        # 정적 페이지 분석 템플릿
│   └── default-interaction-scenario.md   # 상호작용 분석 템플릿
├── modules/
│   ├── process.md                        # 분석 프로세스
│   └── output-format.md                  # 출력 형식
└── result/
    ├── result.txt                        # 텍스트 보고서
    └── result.html                       # HTML 보고서
```

## 설치

```bash
npm install @seonjiwon/frontend-perf-analyzer
```

## 사용 방법

### 0. MCP 설정

MCP 설정 파일에 다음 추가:

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

**설정 확인:**
AI CLI에서 `/mcp` 입력 시 다음 함수들이 표시되면 준비 완료:

- `performance_analyze_insight`
- `performance_start_trace`
- `performance_stop_trace`

### 1. 시나리오 작성 (선택사항)

기본 시나리오를 사용하거나, `scenarios/` 폴더의 템플릿을 참고하여 커스텀 시나리오 작성

**기본 제공 시나리오:**

- `default-static-scenario.md` - 정적 페이지 로드 분석
- `default-interaction-scenario.md` - 상호작용 분석 참고 템플릿

**커스텀 시나리오 작성 시:**

```markdown
# my-custom-scenario.md

## 1. 시나리오 정보

- SCENARIO_NAME: my-custom-scenario
- SCENARIO_TYPE: [page-load | interaction]
- URL: {{URL}}

## 3. 액션 시퀀스

[원하는 측정 시나리오 정의]
```

### 2. init.md 설정

```markdown
- SCENARIO: default-static-scenario # scenarios/ 폴더의 시나리오 파일명 (확장자 제외)
- URL: http://localhost:3000 # 분석 대상 URL
- DETAILED_ANALYSIS: true # 코드 분석 여부 (true/false)
```

### 3. AI에 입력

1. Gemini Code Assist (또는 Claude) 에 init.md 에 따른 분석 수행 분석
2. Chrome DevTools MCP 활성화 상태 확인
3. 분석 시작

다음 명령 입력:

```
perf-analyzer/init.md의 설정대로 분석을 시작해 주세요.
```

### 4. 결과 확인

- `result/result.txt` - 텍스트 보고서
- `result/result.html` - 웹 페이지 보고서

## 시나리오

### page-load

페이지 초기 로드 성능 분석

- LCP 측정

### interaction

사용자 인터랙션 성능 분석

- INP, CLS 측정

## DETAILED_ANALYSIS 옵션

- `true`: 코드 레벨 분석 + 개선안 제시 (Phase 1-5)
    - 실제 소스 코드 분석
    - 복사-붙여넣기 가능한 개선 코드 제공
    - 적용 방법 및 주의사항 포함

- `false`: 병목 식별까지만 (Phase 1-3)
    - 성능 메트릭 측정
    - 병목 현상 및 근본 원인 파악
    - 코드 분석 생략

## 성능 지표 판정 기준

| 메트릭 | 양호   | 개선필요  | 문제   |
| ------ | ------ | --------- | ------ |
| LCP    | <2.5s  | 2.5-4s    | >4s    |
| CLS    | <0.1   | 0.1-0.25  | >0.25  |
| INP    | <200ms | 200-500ms | >500ms |

## 분석 프로세스

1. **Phase 1**: 설정 검증 (시나리오 로드, 서버 접속 확인)
2. **Phase 2**: 성능 데이터 수집 (Chrome DevTools MCP)
3. **Phase 3**: 병목 식별 및 근본 원인 분석
4. **Phase 4**: 코드 레벨 분석 (DETAILED_ANALYSIS=true 시)
5. **Phase 5**: 개선안 작성 및 로드맵 제시 (DETAILED_ANALYSIS=true 시)

## 보고서 출력

- 증거 기반 분석 (실제 측정 데이터 근거)
- 실무 적용 가능한 코드 제안
- 우선순위별 개선 로드맵 (CRITICAL/HIGH/MEDIUM)
- 예상 개선 효과 수치화
- 의존성 및 리스크 분석

## 요구사항

- Chrome DevTools MCP 도구 지원
- MCP 지원 AI CLI
- 분석 대상 서버 실행 중

## 문의

- Email: tommys915@gmail.com
