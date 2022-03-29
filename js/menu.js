const menu = document.querySelector('.sidebar');
const svg = document.querySelector('.menu');
const ulko = document.querySelector('.ulko');
menu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
  svg.classList.toggle('svg-active');
  ulko.classList.toggle('ulko-active');
});
