// 
const body = document.querySelector("body");
const modal = document.getElementById("modal");
const confirms = document.querySelectorAll(".button-confirm");
const closes = document.querySelectorAll(".button-close");
// 

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