const menu = document.querySelector(".ContextMenu_container");

document.getElementById("backbodal").addEventListener("click", () => {
    document.getElementById("backbodal").style.display = "none";
    document.querySelector(".ContextMenu_container").style.display = "none";
});
document.querySelectorAll(".SupporterProfileContextMenu_contextMenuButton").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});



document.querySelector(".ContextMenu_container").addEventListener("click", (e) => {
    e.stopPropagation(); 
});

document.body.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
});



const btn = document.querySelector(".SupporterProfileInfoCTAButton_button"); 
const path = btn.querySelector("svg path"); 
const text = btn.querySelector("span span"); 

btn.addEventListener("click", () => {
    if (text.textContent === "팔로우") {
        text.textContent = "팔로잉";
        btn.classList.remove("Button_mint");
        btn.classList.add("Button_gray");
    } else {
        text.textContent = "팔로우";
        btn.classList.remove("Button_gray");
        btn.classList.add("Button_mint");
    }
});



const closebuttons = document.querySelectorAll(".closeButton");

document.querySelector(".ContextMenubt").addEventListener("click", () => {
    document.querySelector(".ConfirmModal_overlay").style.display ="flex";
})


document.querySelector(".ContextMenu_warning").addEventListener("click", () => {
    document.getElementById("modal2").style.display ="flex";
})


document.querySelector(".PopMenu_menu").addEventListener("click", () => {
    document.getElementById("modal2").style.display ="flex";
})


document.querySelectorAll(".PopMenu_menu").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        PopMenu.style.display = "none";
    });
});



document.querySelectorAll(".closebutton").forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".ConfirmModal_overlay");
        if (modal) {
            modal.style.display = "none";
        }
    });
});


const blockBtn = document.querySelector(".blockButton");
const mainBtn = document.getElementById("followBtn");
const contextBtn = document.querySelector(".ContextMenubt");

const defaultState = {
    mainHTML: mainBtn.innerHTML,
    mainClass: mainBtn.className,
    contextHTML: contextBtn ? contextBtn.innerHTML : "",
    contextClass: contextBtn ? contextBtn.className : ""
};

function toggleBlock() {
    const toastContainer = document.querySelector(".Toast_container");
    const toast1 = document.getElementById("toast1");
    const toast2 = document.getElementById("toast2");

    const isBlocked = mainBtn.textContent === "차단 해제하기";

   
    toastContainer.querySelectorAll(".Toast_content").forEach(t => t.style.display = "none");
    if (!isBlocked) {
        toast1.style.display = "block";  
    } else {
        toast2.style.display = "block";  
    }
    toastContainer.classList.add('Toast_showMobile');
    setTimeout(() => toastContainer.classList.remove('Toast_showMobile'), 2000);

    if (!isBlocked) {
        mainBtn.innerHTML = '<span><span>차단 해제하기</span></span>';
        mainBtn.className = "Button_button Button_contained Button_md SupporterProfileInfoCTAButton_button";

        if (contextBtn) {
            contextBtn.innerHTML = '<span><span>차단 해제하기</span></span>';
            contextBtn.className = "Button_button Button_contained Button_md Button_block SupporterProfileInfoCTAButton_button";
        }
    } else {
        mainBtn.innerHTML = defaultState.mainHTML;
        mainBtn.className = defaultState.mainClass;

        if (contextBtn) {
            contextBtn.innerHTML = defaultState.contextHTML;
            contextBtn.className = defaultState.contextClass;
        }
    }
}
blockBtn.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll(".ConfirmModal_overlay").forEach(modal => {
        modal.style.display = "none";
    });

    toggleBlock();
});

mainBtn.addEventListener("click", () => {
    if (mainBtn.textContent === "차단 해제하기") {
        toggleBlock();
    }
});

if (contextBtn) {
    contextBtn.addEventListener("click", () => {
        if (contextBtn.textContent === "차단 해제하기") {
            toggleBlock();
        }
    });
}







document.addEventListener('DOMContentLoaded', () => {
    const tabsWrapper = document.querySelector('.Tabs_tabs');

    const tabs = document.querySelectorAll('.Tab_tab');
    const postPanel = document.querySelector('.SupporterProfilePostt_table');
    const reviewPanel = document.querySelector('.SupporterProfileReviewList_table');

    postPanel.style.display = 'grid';
    reviewPanel.style.display = 'none';

    tabsWrapper.addEventListener('click', (e) => {
        const tab = e.target.closest('.Tab_tab');

        tabs.forEach(t => t.classList.remove('Tab_active'));
        tab.classList.add('Tab_active');

        const value = tab.dataset.value;

        if (value === '0') {
            postPanel.style.display = 'grid';
            reviewPanel.style.display = 'none';
        } else if (value === '1') {
            postPanel.style.display = 'none';
            reviewPanel.style.display = 'grid';
        }
    });
});


document.querySelectorAll(".Buttonremove").forEach(removebtn => {
    removebtn.addEventListener("click", () => {
         removebtn.remove(".Buttonremove");
    });
});



document.querySelectorAll(".Buttonremove").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

document.querySelectorAll(".Buttonremove").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const toastContainer = document.querySelector(".Toast_container");
        const toast3 = document.getElementById("toast3");

        toastContainer.querySelectorAll(".Toast_content").forEach(t => t.style.display = "none");
        toast3.style.display = "block";

        toastContainer.classList.add('Toast_showMobile');
        setTimeout(() => {
            toastContainer.classList.remove('Toast_showMobile');
        }, 3000);

        document.querySelectorAll(".ConfirmModal_overlay").forEach(modal => {
            modal.style.display = "none";
        });
    });
});


const PopMenu = document.querySelector(".PopMenu_box");

document.querySelectorAll(".PopMenu_toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        PopMenu.style.display = "flex";
    });
});