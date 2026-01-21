document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.Tab-module_tab');
    const actionButtons = document.querySelectorAll('.Button-module_button__d78c2 span span');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('Tab-module_active'));
            
            this.classList.add('Tab-module_active');

            const tabText = this.querySelector('p').childNodes[0].textContent.trim();
            
            actionButtons.forEach(btnSpan => {
                if (tabText === '차단 목록') {
                    btnSpan.textContent = '차단 해제';
                } else if (tabText === '신고 목록') {
                    btnSpan.textContent = '신고 취소';
                }
            });
            
        });
    });
});


