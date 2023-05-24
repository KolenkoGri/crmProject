import {createRow} from './createElements.js';
import {allDelBtns} from './deleteItems.js';
import {modalOpenClose} from './modal.js';

export const renderGoods = (arr) => {
  arr.map((el) => {
    createRow(el);
  });
  allDelBtns();
};

const modalIdNumber = document.querySelector('.modal__id--number');
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newItem = Object.fromEntries(formData);
  newItem.id = modalIdNumber.textContent;
  createRow(newItem);
  modalOpenClose();
  form.reset();
  allDelBtns();
});

const allTableTotal = document.querySelector('.modal__price--total-table');
const itemTotal = document.querySelectorAll('td:nth-child(7)');
let num = 0;
itemTotal.forEach((i) => {
  num += Number(i.textContent.substring(1));
});
allTableTotal.textContent = num;

