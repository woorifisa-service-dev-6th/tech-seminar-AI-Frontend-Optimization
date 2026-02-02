const fs = require("fs");
const path = require("path");

// 1. 사용자 프로젝트 루트 파악 (npm install 실행 위치)
const projectRoot = process.env.INIT_CWD || process.cwd();

// 2. 패키지 내 소스 폴더(perf-analyzer)와 루트에 생길 대상 폴더 설정
const sourceFolder = path.resolve(__dirname, "..", "perf-analyzer");
const targetFolder = path.join(projectRoot, "perf-analyzer");

try {
    // 소스 존재 여부 검증
    if (!fs.existsSync(sourceFolder)) {
        throw new Error(
            `패키지 내 소스 폴더를 찾을 수 없습니다: ${sourceFolder}`,
        );
    }

    // 대상 폴더가 이미 있으면 덮어쓰지 않음 (사용자 데이터 보호)
    if (!fs.existsSync(targetFolder)) {
        // 폴더 전체를 재귀적으로 복사
        fs.cpSync(sourceFolder, targetFolder, { recursive: true });
        console.log(
            `\n✅ [Success] 'perf-analyzer' 폴더가 프로젝트 루트에 생성되었습니다.`,
        );
    } else {
        console.log(
            `\nℹ️ [Info] 이미 'perf-analyzer' 폴더가 존재하여 복사를 건너뜁니다.`,
        );
    }
} catch (err) {
    console.error("\n❌ [Error] 폴더 생성 실패:", err.message);
}
