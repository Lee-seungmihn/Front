const overlay = document.querySelector(".ConfirmModal_overlay");
const modals = document.querySelectorAll(".ConfirmModal_confirmModal");
const menuItems = document.querySelectorAll(".menuItem_container");

const nicknameModal = modals[0];
const emailModal = modals[1];
const privateModal = modals[2];


menuItems.forEach(item => {
    const title = item.querySelector(".menuItem_title").textContent.trim();

    item.addEventListener("click", () => {
        modals.forEach(m => m.style.display = "none");

        overlay.style.display = "flex";

        if (title === "닉네임") {
            nicknameModal.style.display = "flex";
        }
        else if (title === "이메일") {
            emailModal.style.display = "flex";
        }
    });
});


const closeButtons = document.querySelectorAll(".button_close");
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        overlay.style.display = "none";
        modals.forEach(m => m.style.display = "none");
    });
});
const emailOkaymodal = emailModal.querySelector(".buttonEmail_okay");

emailOkaymodal.addEventListener("click", () => {
    console.log()
    emailModal.style.display = "none";
    privateModal.style.display = "flex";
});





// layout
const body = document.querySelector("body");
const modal = document.getElementById("modal");

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
    if (button) {
        button.addEventListener("mousedown", (e) => { e.preventDefault(); });
        button.addEventListener("mousedown", (e) => {
            const isPassword = input.type === "password";
            input.type = isPassword ? "text" : "password";
        });
    }
})

// 확인
// const modalOpen = () => {
//     body.classList.add("hidden");
//     modal.classList.add('active');
// }
// const modalClose = () => {
//     body.classList.remove("hidden");
//     modal.classList.remove('active');
// }

confirms.forEach(confirm => {
    confirm.addEventListener("click", () => {
        body.classList.toggle("hidden")
        modal.classList.toggle('active')
        // setTimeout(() => {
        //     modal.classList.toggle('none')
        // }, 500);
    })
});

const passwordmodals = document.querySelectorAll(".settingItem_container");
passwordmodals.forEach(passwordmodal => {
    passwordmodal.addEventListener("click", () => {
        body.classList.toggle("hidden")
        modal.classList.toggle('active')
    })
});


// 닫기
closes.forEach(close => {
    close.addEventListener("click", () => {
        modal.classList.remove('active')
        body.classList.remove("hidden")
        // setTimeout(() => {
        //     modal.classList.toggle('none')
        // }, 500);
    })
})
// overlay.addEventListener("click", (e) => {
//     if(e.target.classList.contains)
// })



document.addEventListener('click', (e) => {
    if (e.target.closest('.ButtonNickName')) {
        const toast = document.querySelector('.Toast_container');
        if (!toast) return;

        console.log("토스트 작동 시작");

        toast.classList.add('Toast_showMobile');

        setTimeout(() => {
            toast.classList.remove('Toast_showMobile');
            console.log("토스트 종료");
        }, 3000);
    }
});