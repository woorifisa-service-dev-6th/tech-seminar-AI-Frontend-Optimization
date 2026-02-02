## 1. 분석 환경 설정

- SCENARIO: default-static-scenario # scenarios 이름 (확장자 제외)
- URL: http://localhost:3000/rendering/cls # 분석 대상 URL
- DETAILED_ANALYSIS: true # 코드레벨 분석 여부 (true/false)

## 2. 실행 프로세스

1. **[필수] 계획 수립**: `WriteTodos` 도구를 사용하여 이 분석의 전체 단계(Phase 1~5)를 할 일 목록으로 작성합니다.
2. `perf-analyzer/scenarios/{{SCENARIO}}.md`의 측정 기준을 확인합니다.
3. `perf-analyzer/modules/process.md`에 따라 Chrome DevTools MCP로 성능 데이터를 수집합니다.
4. 수집된 데이터와 실제 소스 코드를 분석합니다.
5. 최종 결과는 `perf-analyzer/modules/output-format.md` 형식으로 출력합니다.

## 3. 실행

준비가 되었다면 위 설정값을 확인하고 분석을 시작해 주세요.
