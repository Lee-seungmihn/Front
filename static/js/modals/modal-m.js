// layout
const body = document.querySelector("body");
const modals = document.querySelectorAll(".modal");

// buttons
const zz1Btn = document.getElementById("QuickV2G");
const confirms = document.querySelectorAll(".button-confirm");
const closes = document.querySelectorAll(".button-close");

// const inputContainers = document.querySelectorAll(".currentPassword-wrap");
const inputFields = document.querySelectorAll(".inputField");
// 


// 포커스
inputFields.forEach(inputField => {
    const input = inputField.querySelector(".input");
    const button = inputField.querySelector(".button-inInput");

    inputField.addEventListener("focusin", () => {
        inputField.classList.add("focus");
    });
    inputField.addEventListener("focusout", () => {
        inputField.classList.remove("focus");
    });
    if(button) {
        button.addEventListener("mousedown", (e) => {e.preventDefault();});
        button.addEventListener("mousedown", (e) => {
            const isPassword = input.type === "password";
            input.type = isPassword ? "text" : "password";
        });
    }
})

// 모달 영역
// ※사용 시 최상단 부모 태그의 id를 적어주셔야 합니다.
// onclikc="modalOpen([닫을 모달아이디]);"
const modalOpen = (thisModal) => {
    const OpenModalName = document.getElementById(thisModal);
    body.classList.add("hidden");
    OpenModalName.classList.add('active');
}

// ※닫기 버튼에 넣어주세요.
// onclikc="modalCloses()"
const modalCloses = () => {
    const modals = document.querySelectorAll(".modal.active");
    body.classList.remove("hidden");
    modals.forEach(modal => {
        console.log(modal);
        modal.classList.remove('active');
    })
}
// ※닫기 버튼에 넣어주세요.
// onclikc="onlyeClose([닫을 모달아이디]);"
const onlyClose = (onlyOne) => {
    const modal = document.getElementById(onlyOne);
    body.classList.remove("hidden");
    modal.classList.remove('active');
}

// 쇼 이벤트
const showToast = (showId) => {
    const showContainer = document.getElementById(showId);

    showContainer.classList.remove('none', 'toast_hide');
    showContainer.classList.add('toast_show');

    setTimeout(() => {
        hideToast(showContainer);
    }, 2000);
};
// 하이드 이벤트
const hideToast = (targetEl) => {
    targetEl.classList.remove('toast_show');
    targetEl.classList.add('toast_hide');
    setTimeout(() => {
        if (targetEl.classList.contains('toast_hide')) {
            targetEl.classList.add('none');
        }
    }, 550);
};