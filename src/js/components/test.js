const itemButton = document.querySelector('.table-wrapper-btn');
const modal = document.querySelector('.modal');

itemButton.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  document.body.classList.toggle('overlay');
});
