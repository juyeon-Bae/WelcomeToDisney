document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle'); // 햄버거 버튼
    const navSide = document.querySelector('.nav-side'); // 사이드 메뉴
    const hamburgerIcon = navToggle.querySelector('i'); // 햄버거 아이콘

    navToggle.addEventListener('click', () => {
        // 사이드 메뉴와 아이콘 상태 토글
        navSide.classList.toggle('toggleActive');
        hamburgerIcon.classList.toggle('bi-list');
        hamburgerIcon.classList.toggle('bi-x-lg');
    });
});

