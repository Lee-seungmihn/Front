document.addEventListener("DOMContentLoaded", () => {
    const followButtons = document.querySelectorAll(
        ".FollowingCard-module_right button"
    );

    followButtons.forEach((btn) => {
        const textSpan = btn.querySelector("span span"); 
        btn.addEventListener("click", () => {
            if (textSpan.textContent === "팔로잉") {
                textSpan.textContent = "팔로우";
                btn.classList.remove("Button-module_gray");
                btn.classList.add("Button-module_mint");
            } else {
                textSpan.textContent = "팔로잉";
                btn.classList.remove("Button-module_mint");
                btn.classList.add("Button-module_gray");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const followingTab = document.querySelector('[data-value="1"]');
    const followerTab = document.querySelector('[data-value="3"]');

    const followingPanel = document.querySelector(".FollowingSupporter-module_container");
    const followerPanel = document.querySelector(".FollowerSupporter-module_container");


    followerTab.addEventListener("click", () => {
        followingPanel.style.display = "none";
        followerPanel.style.display = "block";

        followingTab.classList.remove("Tab-module_active");
        followerTab.classList.add("Tab-module_active");
    });

    followingTab.addEventListener("click", () => {
        followerPanel.style.display = "none";
        followingPanel.style.display = "block";

        followerTab.classList.remove("Tab-module_active");
        followingTab.classList.add("Tab-module_active");
    });
});
