# 출력 형식

=== 성능 분석 결과 ===

[Phase 1: 설정 검증]

- SCENARIO: {{SCENARIO}}
- URL: {{URL}}
- DETAILED_ANALYSIS: {{DETAILED_ANALYSIS}}
- 시나리오 파일: perf-analyzer/scenarios/{{SCENARIO}}.md
- 일시: [현재 날짜/시간]

[Phase 2: 측정 데이터 수집]

- 데이터 수집 방법: Chrome DevTools MCP
- 수집된 항목:
    - 핵심 메트릭 (LCP, CLS, INP)
    - Call Stack 정보
    - Network Waterfall

[성능 지표]

- LCP: [값]ms ([상태: 양호/개선필요/문제])
- CLS: [값] ([상태])
- INP: [값]ms ([상태])
- TTFB: [값]ms (서버 응답 지연 확인용)

판정 기준:

- LCP: <2.5s 양호 / 2.5-4s 개선필요 / >4s 문제
- CLS: <0.1 양호 / 0.1-0.25 개선필요 / >0.25 문제
- INP: <200ms 양호 / 200-500ms 개선필요 / >500ms 문제
- TTFB: <800ms 양호 / >800ms 지연 의심 (서버 응답 품질 지표)

[Phase 3: 병목 식별 및 분석]
총 [N]개의 성능 병목이 발견되었습니다.

| 순위 | 병목 현상   | 우선순위 | 소요시간 | 예상개선 | 근본 원인   |
| ---- | ----------- | -------- | -------- | -------- | ----------- |
| 1    | [병목 설명] | CRITICAL | [N]ms    | [수치]   | [원인 요약] |
| 2    | [병목 설명] | HIGH     | [N]ms    | [수치]   | [원인 요약] |
| 3    | [병목 설명] | MEDIUM   | [N]ms    | [수치]   | [원인 요약] |

---

**⚠️ DETAILED_ANALYSIS={{DETAILED_ANALYSIS}} 분기 처리:**

**DETAILED_ANALYSIS=false인 경우:**

```
※ 코드 레벨 분석이 비활성화되어 있습니다.
※ Phase 4, 5는 수행되지 않았습니다.
※ 병목 식별 및 근본 원인 분석까지만 제공됩니다.

코드 레벨 분석이 필요한 경우:
1. DETAILED_ANALYSIS=true로 설정
2. 분석을 다시 실행

이하 Phase 4, 5는 생략됩니다.
```

**DETAILED_ANALYSIS=true인 경우:**
Phase 4, 5를 아래와 같이 계속 진행합니다.

---

[Phase 4: 코드 레벨 분석]
※ DETAILED_ANALYSIS=true 시에만 표시됩니다.

---

## [1] [병목 현상 명확한 설명] ([소요시간]ms)

우선순위: [CRITICAL/HIGH/MEDIUM]
파일: [실제 소스코드 경로]
영향 범위: [LCP/CLS/INP/렌더링 등]

### 문제 분석

**증상 (측정 데이터 기반):**

- [Performance trace에서 관찰된 구체적 증상]
- [Call Stack 정보]

**중간 원인:**

- [직접적으로 관찰되는 문제점]

**근본 원인:**

- [왜 이 문제가 발생했는지 근본적인 원인 상세 분석]
- [코드 구조/아키텍처 레벨의 원인]

### 현재 코드

```[언어]
// ❌ 문제 코드
// 파일: [파일 경로]
// 라인: [시작]-[끝]

[병목을 유발하는 실제 소스 코드]

// 문제점: [이 코드의 문제를 한 줄로 설명]
```

### 개선 코드 (제안)

```[언어]
// ✅ 제안 코드 (이 코드를 복사하여 적용하세요)
// 파일: [파일 경로]
// 라인: [시작]-[끝]

[문제를 해결하는 구체적인 코드 제안]

// 개선점: [이 코드가 문제를 어떻게 해결하는지 설명]
```

### 의존성 및 컨텍스트 분석

**관련 파일:**

- [import된 파일들]
- [이 코드를 사용하는 다른 파일들]

**의존성 체크:**

- [ ] 다른 파일에서 이 함수를 사용하는가?
- [ ] props/state 변경 시 영향은?
- [ ] 상태 관리에 영향이 있는가?
- [ ] 수정 시 기능이 깨질 가능성은?

**위험 요소:**

- [파악된 리스크 1]
- [파악된 리스크 2]

### 적용 방법

1. 파일 열기: [파일 경로]
2. [N]-[M]줄 찾기 ([함수/컴포넌트명])
3. 위의 개선 코드로 교체 제안
4. 저장 후 테스트 수행:
    - [테스트 시나리오 1]
    - [테스트 시나리오 2]

### 예상 효과

**정량적 효과:**

- [측정 메트릭]: [현재값]ms → [예상값]ms ([비율]% 개선)
- [다른 영향받는 메트릭]: [수치]

**정성적 효과:**

- [사용자 체감 개선 설명]
- [시스템 안정성 개선 등]

### 주의사항

**반드시 확인:**

- [의존성 확인 사항]
- [테스트 필수 항목]

**리스크:**

- [잠재적 리스크 1]
- [잠재적 리스크 2]

**권장 사항:**

- [추가 권장사항]

---

[Phase 5: 개선 우선순위 및 로드맵]
※ DETAILED_ANALYSIS=true 시에만 표시됩니다.

### 즉시 적용 (CRITICAL)

1. [병목 #1] - 예상 효과: [수치]
2. [병목 #2] - 예상 효과: [수치]

### 단기 적용 (HIGH)

1. [병목 #3] - 예상 효과: [수치]
2. [병목 #4] - 예상 효과: [수치]

### 중장기 적용 (MEDIUM)

1. [병목 #5] - 예상 효과: [수치]

### 전체 예상 개선 효과

- LCP: [현재] → [예상] ([개선율]%)
- 총 로딩 시간: [현재] → [예상] ([개선율]%)

---

[토큰 사용량]

- Performance trace 분석: [N] 토큰
- 소스 코드 분석: [N] 토큰 (DETAILED_ANALYSIS=false 시 0)
- Call Stack 추적: [N] 토큰
- 총 사용량: [N] 토큰

---

## 마지막 단계: 보고서 저장

**중요**: AI가 직접 bash 명령을 실행하여 파일을 생성합니다.

### 0. 디렉토리 생성 (필수)

- 명령: `mkdir -p perf-analyzer/result`

### 저장할 파일

1. **텍스트 보고서**: `perf-analyzer/result/result.txt`
2. **HTML 보고서**: `perf-analyzer/result/result.html`

---

## HTML 보고서 템플릿

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>성능 분석 보고서</title>
        <style>
            body {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                background-color: #f5f7fa;
            }
            h1 {
                color: #2c3e50;
                border-bottom: 3px solid #3498db;
                padding-bottom: 10px;
                margin-bottom: 30px;
            }
            h2 {
                color: #34495e;
                border-bottom: 2px solid #ecf0f1;
                margin-top: 40px;
                padding-bottom: 8px;
            }
            h3 {
                color: #34495e;
                margin-top: 25px;
                margin-bottom: 15px;
            }
            .phase-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                margin: 30px 0 20px 0;
                font-size: 1.2em;
                font-weight: bold;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                background-color: white;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            th,
            td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }
            th {
                background-color: #3498db;
                color: white;
                font-weight: 600;
            }
            tr:nth-child(even) {
                background-color: #f8f9fa;
            }
            .status-good {
                color: #27ae60;
                font-weight: bold;
            }
            .status-ok {
                color: #f39c12;
                font-weight: bold;
            }
            .status-bad {
                color: #e74c3c;
                font-weight: bold;
            }
            .priority-critical {
                color: #e74c3c;
                font-weight: bold;
                background-color: #fadbd8;
                padding: 3px 8px;
                border-radius: 4px;
            }
            .priority-high {
                color: #f39c12;
                font-weight: bold;
                background-color: #fef5e7;
                padding: 3px 8px;
                border-radius: 4px;
            }
            .priority-medium {
                color: #3498db;
                font-weight: bold;
                background-color: #ebf5fb;
                padding: 3px 8px;
                border-radius: 4px;
            }
            .summary {
                background-color: #e8f8f5;
                border-left: 5px solid #2ecc71;
                padding: 20px;
                margin-bottom: 25px;
                border-radius: 5px;
            }
            .info-box {
                background-color: #ebf5fb;
                border-left: 5px solid #3498db;
                padding: 20px;
                margin-bottom: 25px;
                border-radius: 5px;
            }
            .warning-box {
                background-color: #fef5e7;
                border-left: 5px solid #f39c12;
                padding: 20px;
                margin-bottom: 25px;
                border-radius: 5px;
            }
            .danger-box {
                background-color: #fadbd8;
                border-left: 5px solid #e74c3c;
                padding: 20px;
                margin-bottom: 25px;
                border-radius: 5px;
            }
            .criteria-box {
                background-color: #f8f9fa;
                border: 1px solid #dee2e6;
                padding: 20px;
                margin-bottom: 25px;
                border-radius: 5px;
                font-size: 0.95em;
            }
            .code-block {
                background-color: #2c3e50;
                color: #ecf0f1;
                padding: 20px;
                border-radius: 5px;
                font-family: "Courier New", "Consolas", monospace;
                margin: 15px 0;
                overflow-x: auto;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            .code-good {
                border-left: 5px solid #2ecc71;
            }
            .code-bad {
                border-left: 5px solid #e74c3c;
            }
            pre {
                white-space: pre-wrap;
                word-wrap: break-word;
                margin: 0;
                font-size: 0.9em;
                line-height: 1.5;
            }
            ul {
                margin: 10px 0;
                padding-left: 25px;
            }
            li {
                margin: 8px 0;
            }
            .checklist {
                list-style: none;
                padding-left: 0;
            }
            .checklist li:before {
                content: "☐ ";
                margin-right: 8px;
                color: #3498db;
                font-weight: bold;
            }
            .metric-card {
                background: white;
                padding: 15px;
                margin: 10px 0;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .improvement-badge {
                display: inline-block;
                background-color: #2ecc71;
                color: white;
                padding: 5px 12px;
                border-radius: 15px;
                font-size: 0.9em;
                font-weight: bold;
                margin-left: 10px;
            }
            .roadmap-section {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .disabled-notice {
                background-color: #fff3cd;
                border-left: 5px solid #ffc107;
                padding: 20px;
                margin: 25px 0;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <h1>🔍 성능 분석 보고서</h1>

        <div class="phase-header">Phase 1: 설정 검증</div>
        <div class="info-box">
            <h3>분석 대상</h3>
            <ul>
                <li><strong>SCENARIO:</strong> {{SCENARIO}}</li>
                <li><strong>URL:</strong> {{URL}}</li>
                <li>
                    <strong>DETAILED_ANALYSIS:</strong> {{DETAILED_ANALYSIS}}
                </li>
                <li>
                    <strong>시나리오 파일:</strong>
                    perf-analyzer/scenarios/{{SCENARIO}}.md
                </li>
                <li><strong>분석 일시:</strong> {{DATETIME}}</li>
            </ul>
        </div>

        <div class="phase-header">Phase 2: 측정 데이터 수집</div>
        <div class="info-box">
            <h3>데이터 수집 정보</h3>
            <ul>
                <li><strong>수집 방법:</strong> Chrome DevTools MCP</li>
                <li>
                    <strong>수집 항목:</strong>
                    <ul>
                        <li>핵심 메트릭 (LCP, CLS, INP, TTFB)</li>
                        <li>Call Stack 정보</li>
                        <li>Network Waterfall</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="summary">
            <h3>📊 종합 의견</h3>
            <p>{{OVERALL_SUMMARY}}</p>
        </div>

        <h2>성능 지표</h2>
        <table>
            <thead>
                <tr>
                    <th>메트릭</th>
                    <th>측정값</th>
                    <th>상태</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                {{METRIC_TABLE_ROWS}}
            </tbody>
        </table>

        <div class="criteria-box">
            <h3>📏 판정 기준</h3>
            <ul>
                <li>
                    <strong>LCP (Largest Contentful Paint):</strong> &lt;2.5s
                    양호 / 2.5-4s 개선필요 / &gt;4s 문제
                </li>
                <li>
                    <strong>CLS (Cumulative Layout Shift):</strong> &lt;0.1 양호
                    / 0.1-0.25 개선필요 / &gt;0.25 문제
                </li>
                <li>
                    <strong>INP (Interaction to Next Paint):</strong> &lt;200ms
                    양호 / 200-500ms 개선필요 / &gt;500ms 문제
                </li>
                <li>
                    <strong>TTFB (Time to First Byte):</strong> &lt;800ms 양호 /
                    &gt;800ms 지연 의심 (서버 응답 품질 기준)
                </li>
            </ul>
        </div>

        <div class="phase-header">Phase 3: 병목 식별 및 분석</div>

        <div class="warning-box">
            <h3>⚠️ 발견된 병목 요약</h3>
            <p>
                총 <strong>{{BOTTLENECK_COUNT}}</strong>개의 성능 병목이
                발견되었습니다.
            </p>
        </div>

        <table>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>병목 현상</th>
                    <th>우선순위</th>
                    <th>소요시간</th>
                    <th>예상개선</th>
                    <th>근본 원인</th>
                </tr>
            </thead>
            <tbody>
                {{BOTTLENECK_SUMMARY_TABLE}}
            </tbody>
        </table>

        <!-- DETAILED_ANALYSIS 분기 처리: AI가 DETAILED_ANALYSIS 값에 따라 아래 내용을 동적으로 생성 -->
        {{DETAILED_ANALYSIS_CONTENT}}

        <div class="info-box">
            <h3>💾 토큰 사용량</h3>
            <ul>
                <li>
                    <strong>Performance trace 분석:</strong> {{TOKEN_TRACE}}
                    토큰
                </li>
                <li><strong>소스 코드 분석:</strong> {{TOKEN_CODE}} 토큰</li>
                <li><strong>Call Stack 추적:</strong> {{TOKEN_STACK}} 토큰</li>
                <li><strong>총 사용량:</strong> {{TOKEN_TOTAL}} 토큰</li>
            </ul>
        </div>

        <div
            style="margin-top: 50px; padding-top: 20px; border-top: 2px solid #ecf0f1; text-align: center; color: #7f8c8d; font-size: 0.9em;"
        >
            <p>본 보고서는 AI 기반 성능 분석 도구로 생성되었습니다.</p>
            <p>제안된 코드는 검토 후 적용하시기 바랍니다.</p>
        </div>
    </body>
</html>
```

모든 작업 완료 후 출력: "✅ 분석 보고서 저장 및 HTML 제작 완료"

---

## 서버 접속 실패 시 출력 형식

```
❌ 서버 접속 실패

URL: {{URL}}
상태: 접속 불가

다음을 확인해주세요:
1. 개발 서버가 실행 중인지 확인
2. URL이 올바른지 확인 (예: http://localhost:5173)
3. 방화벽이나 포트 충돌 확인

서버를 실행한 후 다시 분석을 시작해주세요.
```
