const buttons = document.querySelectorAll(
    ".CommentNavigation_naviArea__2s32l button"
);

const sections = {
    btnSatisfaction: "satisfaction",
    btnSupport: "support",
    btnSignature: "signature",
};

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        //   active 클래스 제거
        buttons.forEach((b) => b.classList.remove("Tab_active__-dPX3"));

        //   클릭한 버튼에 active 추가
        btn.classList.add("Tab_active__-dPX3");

        //   해당 섹션으로 스크롤 이동
        const targetId = sections[btn.id];
        if (targetId) {
            document
                .getElementById(targetId)
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});
