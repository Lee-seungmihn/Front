// 충전소 수정 폼
// - 설치주소 필수 입력 검증
// - 주소 입력 창 비어있을 경우 에러 문구/스타일 적용
// - 입력 값이 들어오면 에러 상태 해제

document.addEventListener('DOMContentLoaded', () => {
    // 폼 요소 (수정 완료 버튼 포함)
    const form = document.getElementById('new-request');
    if (!form) return;

    // 설치주소 input (필수 입력 대상)
    const addressInput = document.getElementById('install-address');
    if (!addressInput) return;

    // 설치주소 필드 전체 영역 (에러 스타일 적용)
    const addressField = addressInput.closest('.form-field');

    // 설치주소 하단 에러 문구
    const addressError = addressField?.querySelector('.field-error');

    // 폼 제출 시 필수값 검증
    form.addEventListener('submit', (e) => {
        // 화면 확인 단계이므로 실제 submit 방지(새로고침 방지)
        e.preventDefault();

        // 적용되었던 에러 스타일 제거
        if (addressField) addressField.classList.remove('is-error');
        // 설치주소 하단에 에러문구 제거
        if (addressError) addressError.hidden = true;

        // 설치주소 값이 비어 있는지 검사
        // 설치주소가 비어 있으면 에러 표시
        if (!addressInput.value.trim()) {
            // 설치주소 영역에 에러 스타일 적용
            if (addressField) addressField.classList.add('is-error');
            // 설치주소 하단 에러 문구 표시
            if (addressError) addressError.hidden = false;

            // 에러 발생 시 설치주소 입력창으로 커서 위치
            addressInput.focus();
            return;
        }

        // 필수 입력 통과 (화면 단계)
        console.log('필수 입력 통과');
    });

    // 설치주소 input에 값이 입력될 때마다 실행되는 이벤트
    addressInput.addEventListener('input', () => {
        // 현재 입력 값이 공백이 아닌 경우
        if (addressInput.value.trim()) {
            // 설치주소 영역에 적용된 에러 스타일 제거
            if (addressField) addressField.classList.remove('is-error');
            // 설치 주소 하단에 표시된 에러 문구 숨김 처리
            if (addressError) addressError.hidden = true;
        }
    });
});
