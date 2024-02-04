const burgerIcon = document.querySelector('.burger_menu')
const navbarMenu = document.querySelector('.nav_bar_list');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is_active');
});


