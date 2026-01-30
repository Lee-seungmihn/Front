//  탭 
const tabsContainer = document.querySelector('.Tabs-module_tabs');
const panels = document.querySelectorAll('.TabPanels-module_tabPanels > div'); 

tabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.Tab-module_tab');

    // 모든 탭 비활성화
    document.querySelectorAll('.Tab-module_tab').forEach(t => t.classList.remove('Tab-module_active'));

    // 클릭한 탭 활성화
    tab.classList.add('Tab-module_active');

    const value = tab.dataset.value;
    panels.forEach(panel => {
        panel.style.display = (panel.dataset.value === value) ? 'block' : 'none';
    });
});

// 토스트
const toast = document.querySelector(".Toast-module_container");
const toastButtons = document.querySelectorAll(".close_button");

toastButtons.forEach(button => {
    button.addEventListener("click", () => {
        toast.classList.add("Toast-module_show");

        setTimeout(() => {
            toast.classList.remove("Toast-module_show");
        }, 2000);
    });
});

//  팔로잉 / 팔로우 토글 
const followButtons = document.querySelectorAll(".FollowingCard-module_right .Button-module_button");

followButtons.forEach(button => {
    button.addEventListener("click", () => {
        const spanText = button.querySelector("span:last-child");
        if (spanText.textContent === "팔로잉") {
            spanText.textContent = "팔로우";
            button.classList.remove("Button-module_gray");
            button.classList.add("Button-module_blue"); 
        } else {
            spanText.textContent = "팔로잉";
            button.classList.remove("Button-module_blue");
            button.classList.add("Button-module_gray");
        }
    });
});
