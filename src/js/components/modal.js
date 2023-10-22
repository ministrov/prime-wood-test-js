// 1. открыть\закрыть окно
// 2. клик вне окна закрывает окно
// 3. сайт не скроллится, пока окно открыто
// 4. не должно прыжка сайта
// 5. фокус внутри окна при его открытии
// 6. когда мы заходим в окно, выделялся первым элемент(фокус).когда выходим - выделялся тот же, на котором мы были ранее
// 7. анимации

class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.main__container');
    this.isOpen = false;
    this.modalContainer = false;
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function(e) {
        let clickedElement = e.target.closest('[data-path]')

        if (clickedElement) {
          let target = clickedElement.dataset.path;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.modal__close')) {
          this.close();
          return;
        }
      }.bind(this));

      this.modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal') && !e.target.closest('.modal') && this.isOpen) {
          this.close();
        }
      }.bind(this));
    }
  }

  open() {
    this.modal.classList.add('is-open');
    this.modalContainer.classList.add('modal-open');
  }

  close() {
    if (this.modalContainer) {
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');
      this.options.isClose(this);
      this.isOpen = false;
    }
  }
}

const modal = new Modal({
  isOpen: (modal) => {
    console.log(modal);
    console.log('opened');
  },
  isClose: () => {
    console.log('closed');
  },
});
