const toggle = document.querySelector('.nav__toggle');
const items = document.querySelectorAll('.nav__item');

toggle.addEventListener('click', () => {
   items.forEach(item => {
      item.classList.toggle('active');
   });
});
