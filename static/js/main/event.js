const wishbtns = document.querySelectorAll('.wishbtn');

// 찜(위시리스트) 이벤트
wishbtns.forEach(wishbtn => {
    wishbtn.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active");
        const showToastId = e.currentTarget.classList[1] === 'active' ? 'wishAdd' : "wishRemove";
        console.log(e.currentTarget.classList[1] === 'active');
        showToast(showToastId);
    })
});