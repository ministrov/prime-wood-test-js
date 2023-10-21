const itemButton = document.querySelector('.table-wrapper-btn');
const modal = document.querySelector('.modal-overlay');

itemButton.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
});
