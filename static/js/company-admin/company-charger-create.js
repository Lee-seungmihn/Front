// 충전소 등록 폼
// - 필수 입력 검증
// - 완료 버튼 클릭 시 실행
// - 필수 필드가 비어있을 경우 에러 문구 표시
// - 에러 없을 경우에만 submit 진행

document.addEventListener('DOMContentLoaded', () => {
    // 폼 요소
    const form = document.getElementById('new-request');

    // 필수 입력 필드
    const requiredFields = form.querySelectorAll('.form-field.required');

    // 폼 상단 공통 에러 메세지 (에러 없을 경우 null)
    const formError = document.querySelector('.form-error');

    // submit 이벤트 가로채기
    form.addEventListener('submit', (e) => {
        // 임시) 기능 콘솔 확인용, form 기본 submit 방지
        // 서버 구현시 submit 제거 여부 확인 필요
        e.preventDefault();

        // 상태: false(정상), true(에러)
        let hasError = false;

        // 이전 에러 상태 초기화
        requiredFields.forEach((field) => {
            field.classList.remove('is-error');

            const errorMsg = field.querySelector('.field-error');
            if (errorMsg) {
                errorMsg.hidden = true;
            }
        });

        // 공통 에러 메세지 숨김
        if (formError) {
            formError.hidden = true;
        }

        // 필수 입력 필드 검사하기
        requiredFields.forEach((field) => {
            // input 또는 textarea 찾기
            const input = field.querySelector('input, textarea');

            // 값이 없거나 공백인 경우
            if (!input || !input.value.trim()) {
                // 에러로 판단
                hasError = true;

                // 해당 부분 에러 상태로 변경
                field.classList.add('is-error');

                // 필드 안에 있는 에러 메세지 요소 선택
                const errorMsg = field.querySelector('.field-error');

                // 에러 메세지가 존재하면 화면에 표시
                if (errorMsg) {
                    errorMsg.hidden = false;
                }
            }
        });

        // 에러가 하나라도 있을 경우 제출 중단
        if (hasError) {
            if (formError) {
                formError.hidden = false;
            }
            return;
        }

        // 여기까지 왔을 경우 오류 없는 상태, 실제 submit 진행
        console.log('제출 가능 상태');
    });
});
