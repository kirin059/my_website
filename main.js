const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');

toggleBtn.addEventListner('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    }
);