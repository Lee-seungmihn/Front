const closes = document.querySelectorAll(".button_close");
const modal = document.querySelector(".ReactModalPortal");
const nameOpens = document.querySelectorAll(".menuItem_container_modals");

nameOpens.forEach(wishOpen => {
    wishOpen.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    })
})

closes.forEach(close => {
    close.addEventListener("click", (e) => {
        modal.style.display = "none";
    })
})
