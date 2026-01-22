const closes = document.querySelectorAll(".button_close");
const modals = document.querySelectorAll(".ConfirmModal_confirmModal");
const nameOpens = document.querySelectorAll(".menuItem_container_modals");

nameOpens.forEach(wishOpen => {
    wishOpen.addEventListener("click", (e) => {
        e.preventDefault();
        modals.style.display = "flex";
    })
})

closes.forEach(close => {
    close.addEventListener("click", (e) => {
        modals.style.display = "none";
    })
})
