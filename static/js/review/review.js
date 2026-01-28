document.querySelectorAll(".Buttonremove").forEach(removebtn => {
    removebtn.addEventListener("click", () => {
         removebtn.remove(".Buttonremove");
    });
});

document.querySelectorAll(".PopMenu_toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const menu = btn.closest(".PopMenu_wrap")
                        .querySelector(".PopMenu_box");

        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
});

document.querySelectorAll(".PopMenu_menu_r").forEach(btn => {
    btn.addEventListener("click", () => {

        document.getElementById("modal").style.display = "flex";
        document.querySelector(".PopMenu_box").style.display = "none";
    });
});



document.querySelectorAll(".closebutton").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    });
});
