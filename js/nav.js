document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle'); // 햄버거 버튼
    const navMenu = document.querySelector('.nav-menu'); // menu item
    const hamburgerIcon = navToggle.querySelector('i'); // 햄버거 아이콘

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('toggleActive');
        hamburgerIcon.classList.toggle('bi-list');
        hamburgerIcon.classList.toggle('bi-x-lg');
    });
});

