# 정적 페이지 로드 분석 시나리오

## 1. 시나리오 정보

- SCENARIO_NAME: default-static-scenario
- SCENARIO_TYPE: page-load
- URL: {{URL}}
- DESCRIPTION: 정적 페이지의 초기 로딩 성능 분석

## 2. 측정 조건

- CACHE_DISABLED: true
- NETWORK_THROTTLING: none
- CPU_THROTTLING: none

## 3. 액션 시퀀스

```
1. 브라우저 캐시 비활성화
2. {{URL}} 접속
3. 5초 대기 (완전한 로드)
4. 성능 Trace 중단
```

## 4. 측정 메트릭

**주요 메트릭:**

- LCP, FCP, CLS, TBT, INP, Long Tasks

**분석 초점:**

- LCP: 이미지 최적화, 리소스 우선순위
- FCP: SSR/SSG 효율, 초기 번들 크기
- CLS: 이미지 크기 예약, 폰트 로딩
- TBT: JavaScript 실행 시간
- Long Tasks: 50ms 이상 작업

## 5. 분석 포커스 (page-load 특화)

### Server-Side Rendering

- 데이터 페칭이 서버에서 수행되는가?
- useEffect 대신 Server Components 사용 여부

### Resource Loading

- 중요 이미지에 priority 속성 설정
- 폰트 로딩 전략 (font-display: swap)
- Critical CSS 인라인화

### JavaScript Bundle

- 초기 로드 시 불필요한 라이브러리 포함 여부
- Code splitting 적용 여부
- Dead code 제거

### Layout Stability

- 이미지/폰트 크기 명시
- 동적 콘텐츠 삽입 시 공간 예약

## 6. 예상 병목 패턴

1. **큰 이미지 로딩** → LCP 영향
2. **과도한 JavaScript 번들** → FCP, TBT 영향
3. **동기 데이터 페칭** → TBT 영향
4. **레이아웃 이동** → CLS 영향
5. **폰트 로딩 차단** → FCP 영향
