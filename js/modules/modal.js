const btnAdd = document.querySelector('.table__product');
const overlayModal = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');
const modalCheckbox = document.querySelector('.form__input--checkbox');
const modalCheckboxDisabled =
    document.querySelector('.form__input-disabled');
const modalTotalPrice = document.querySelector('.modal__price--total');
const modalInputCount = document.querySelector('.form__input--count');
const modalInputPrice = document.querySelector('.form__input--price');
const modalError = document.querySelector('.modal__error');
const modalCloseError = document.querySelector('.modal__close-error');


export const modalOpenClose = () => {
  modal.classList.toggle('modal-open');
};

modalInputCount.addEventListener('change', (e) => {
  modalTotalPrice.textContent = e.target.value * modalInputPrice.value;
});

modalInputPrice.addEventListener('change', (e) => {
  modalTotalPrice.textContent = e.target.value * modalInputCount.value;
});

modalCheckbox.addEventListener('click', () => {
  modalCheckboxDisabled.value = '';
  modalCheckboxDisabled.toggleAttribute('disabled');
  modalCheckboxDisabled.classList.toggle('form__input-disabled');
});
btnAdd.addEventListener('click', () => {
  modal.classList.add('modal-open');
});

overlayModal.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlayModal) {
    modal.classList.remove('modal-open');
    modalError.classList.remove('modal__error-flex');
  }
  if (target.closest('.modal__close')) {
    modal.classList.remove('modal-open');
  }
});

modalCloseError.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.modal__error-flex')) {
    modalError.classList.remove('modal__error-flex');
  }
});
// modalError.classList.remove('modal__error-flex');

export const openModalError = () => {
  modalError.classList.add('modal__error-flex');
};
