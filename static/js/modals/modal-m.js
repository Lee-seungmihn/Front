// 
const body = document.querySelector("body");
const modal = document.getElementById("modal");
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

// 확인
confirms.forEach(confirm => {
    confirm.addEventListener("click", () =>{
        body.classList.toggle("hidden")
        modal.classList.toggle('active')
        // setTimeout(() => {
        //     modal.classList.toggle('none')
        // }, 500);
    })
});

// 닫기
closes.forEach(close => {
    close.addEventListener("click", () =>{
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