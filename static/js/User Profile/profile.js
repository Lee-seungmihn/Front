const banner = document.querySelector("div.RollingBannerCard_bannerWrapper");
const firstBanner = document.createElement("a");
const lastBanner = document.createElement("a");

firstBanner.className = "RollingBannerCard_banner RollingBannerCard_rollingFirst";
lastBanner.className = "RollingBannerCard_banner RollingBannerCard_hide";

firstBanner.innerHTML = `
    <div class="RollingBannerCard_contentWrapper RollingBannerCard_contentWrapperWithImg">
        <div class="RollingBannerCard_subCopy">글로벌 서비스 오픈</div>
        <div class="RollingBannerCard_mainCopy">라이라이차차차</div>
    </div>
    <img src="/static/image/User Profile/39984391-earth.jpg" loading="lazy"
        style="width: 48px; height: 48px; margin-top: auto; margin-bottom: auto; margin-left: 8px;">`;

lastBanner.innerHTML = `
    <div class="RollingBannerCard_contentWrapper RollingBannerCard_contentWrapperWithImg">
        <div class="RollingBannerCard_subCopy">ㅡㅡㅡㅡ</div>
        <div class="RollingBannerCard_mainCopy">ㅡㅡㅡㅡㅡ</div>
    </div>
    <img src="/static/image/User Profile/178407772-electric-plug-icon-vector-illustration-eps-10.jpg" loading="lazy"
        style="width: 48px; height: 48px; margin-top: auto; margin-bottom: auto; margin-left: 8px;">`;

banner.appendChild(firstBanner);
banner.prepend(lastBanner);


let count = 1;
banner.style.transform = `translateX(-370px)`;

setInterval(() => {
    count++;
    banner.style.transform = `translateX(-${370 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    if (count === 4) {
        setTimeout(() => {
            banner.style.transition = `0s`;
            banner.style.transform = `translateX(-370px)`;
        }, 500);
        count = 1;
    }
}, 2000);

// const WishIconButtons = document.querySelectorAll("button[type=cbutton]");

// document.addEventListener("click", (e) => {
//     const button = e.target.closest(".WishIconButton_container");

//     with (button) {
//         e.preventDefault();
//         e.stopPropagation();
//         svg = button.querySelector("svg");
//         svg && svg.classList.toggle("WishIconButton_isActive");
//     }
// });


// 북마크 등록
// const buttonBookMark = document.querySelector(
//     ".btnBookmark.qnaSpB.devQnaDetailBookmark",
// );
// const bookMarkLayer = document.querySelector(
//     ".book-mark-layer.tooltip-layer.qnaSpA",
// );

// buttonBookMark.addEventListener("click", (e) => {
//     if (!buttonBookMark.classList.contains("on")) {
//         bookMarkLayer.style.opacity = "1";
//         setTimeout(() => {
//             bookMarkLayer.style.opacity = "0";
//         }, 975);
//     } else {
//         bookMarkLayer.style.opacity = "0";
//     }
//     buttonBookMark.classList.toggle("on");
// });



function showToast(toast) {
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

const wishButtons = document.querySelectorAll(".WishIconButton_container");
const toastAdd = document.querySelector(".Toast_container.toast-add");
const toastRemove = document.querySelector(".Toast_container.toast-remove");


wishButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const svg = button.querySelector("svg");
        const isActive = svg.classList.toggle("WishIconButton_isActive");

        showToast(isActive ? toastAdd : toastRemove);
    });
});


const closes = document.querySelectorAll(".button_close");
const modal = document.querySelector(".ReactModalPortal");
const wishOpens = document.querySelectorAll(".wish_modalOpen");

wishOpens.forEach(wishOpen => {
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

