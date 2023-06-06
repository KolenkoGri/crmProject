const btnAdd = document.querySelector('.table__product');
const overlayModal = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');
const modalCheckbox = document.querySelector('.form__input--checkbox');
const modalCheckboxDisabled =
    document.querySelector('.form__input-disabled');
const modalTotalPrice = document.querySelector('.modal__price--total');
const modalInputCount = document.querySelector('.form__input--count');
const modalInputPrice = document.querySelector('.form__input--price');

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
  if (target === overlayModal || target.closest('.modal__close')) {
    modal.classList.remove('modal-open');
  }
});
