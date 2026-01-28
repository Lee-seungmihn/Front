// 메인 하단 네비게이션 영역 이벤트
const FNBNavigations = document.querySelectorAll(".NavigationTab-container");


FNBNavigations.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        FNBNavigations.forEach(item => item.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const badge = tab.querySelector(".NotificationBadge");
        console.log(badge.classList);
        if(badge) badge.classList.remove("active");
    });
});


let defaultScroll = 0;
window.addEventListener('scroll', function() {
    const pageTop = document.querySelector(".quickButton-pageTop");
    let thisScroll = window.scrollY || document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);
    thisScroll > defaultScroll || window.scrollY <= 0  ? pageTop.classList.remove("active") : pageTop.classList.add("active");
    defaultScroll = thisScroll <= 0 ? 0 : thisScroll;
    // pageTop.classList[1] === "active"
}, false);