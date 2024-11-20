const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // search 안에서 input을 찾음

searchEl.addEventListener('click', function () {
  // Logic
  searchInputEl.focus();
} );

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();