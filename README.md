# Frontend Performance Analyzer

Chrome DevTools MCP를 활용한 프론트엔드 성능 병목 자동 분석 도구

## 특징

- Chrome DevTools MCP 기반 자동 성능 측정
- 코드 레벨 병목 지점 정확한 식별
- 실무 적용 가능한 개선 코드 제안
- HTML 보고서 자동 생성

## 사용 방법

## 설치

```bash
npm install @seonjiwon/frontend-perf-analyzer
```

### 2단계: 설정 수정

```markdown
## 1. 분석 환경 설정

- SCENARIO: page-load
- URL: http://localhost:5173
- DETAILED_ANALYSIS: true
```

### 3단계: AI에 입력

1. Gemini Code Assist (또는 Claude) 에 init.md 에 따른 분석 수행 분석
2. Chrome DevTools MCP 활성화 상태 확인
3. 분석 시작

## 출력 결과

- `result/result.txt`: 텍스트 보고서
- `result/result.html`: 웹 페이지 보고서

## 시나리오

### page-load

페이지 초기 로드 성능 분석

- LCP, FCP, TBT 측정
- 렌더링 차단 리소스 분석

### interaction

사용자 인터랙션 성능 분석

- INP, Event Handler Duration 측정
- 재렌더링 최적화

## 라이선스

MIT

## 기여

이슈와 PR은 언제나 환영합니다!

## 문의

- GitHub: https://github.com/seonjiwon/frontend-perf-analyzer
- Email: tommys915@gmail.com
