# 상호작용 분석 시나리오

## 1. 시나리오 정보

- SCENARIO_NAME: default-interaction-scenario
- SCENARIO_TYPE: interaction
- URL: {{URL}}
- DESCRIPTION: 버튼 클릭 등 사용자 상호작용의 응답 성능 분석

## 2. 측정 조건

- CACHE_DISABLED: false # 실제 사용 환경 시뮬레이션
- NETWORK_THROTTLING: none
- CPU_THROTTLING: none

## 3. 액션 시퀀스

**작성 가이드:**
각 단계에 실제 셀렉터와 값을 입력하세요.

```
1. {{URL}} 접속
2. [N]초 대기  # 예: 3초
3. [셀렉터]에 "[값]" 입력  # 예: #input-field에 "test-data" 입력 (선택사항)
4. [셀렉터] 클릭  # 예: #submit-button 클릭
5. [N]초 대기 또는 [조건] 확인  # 예: 2초 대기
6. 성능 Trace 중단
```

**예시:**

```
1. http://localhost:3000/form 접속
2. 2초 대기
3. #email-input에 "test@example.com" 입력
4. #submit-button 클릭
5. .success-message 표시 확인
6. 성능 Trace 중단
```

**셀렉터 작성:**

- ID: `#element-id`
- Class: `.class-name`
- 속성: `[data-testid="submit"]`

## 4. 측정 메트릭

**주요 메트릭:**

- INP (핵심), Event Handler Duration, CLS, TBT

**분석 초점:**

- INP: 클릭 후 화면 업데이트까지 시간
- Event Handler: 핸들러 실행 시간
- CLS: 상호작용 후 레이아웃 변화
- TBT: JavaScript 차단 시간

## 5. 분석 포커스 (interaction 특화)

### Event Handler 최적화

- 핸들러 내부의 무거운 계산
- 불필요한 setState 호출
- 비동기 작업 처리

### State Updates

- 불필요한 리렌더링
- 상태 업데이트 배치 처리
- 메모이제이션 활용 (useMemo, useCallback)

### Layout Stability

- 클릭 후 예기치 않은 레이아웃 이동
- 동적 콘텐츠 삽입 시 공간 예약

## 6. 예상 병목 패턴

1. **느린 이벤트 핸들러** → INP 영향
2. **과도한 상태 업데이트** → INP, TBT 영향
3. **동기 API 호출** → INP, TBT 영향
4. **대규모 DOM 조작** → INP, CLS 영향
