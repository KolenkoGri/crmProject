import {createRow} from './createElements.js';
import {allDelBtns} from './deleteItems.js';
import {modalOpenClose} from './modal.js';
import {win} from './openImage.js';
import {sendGoods} from './api.js';

export const renderGoods = (arr) => {
  arr.map((el) => {
    createRow(el);
  });
  allDelBtns();
  win();
};

const modalIdNumber = document.querySelector('.modal__id--number');
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newItem = Object.fromEntries(formData);
  console.log(newItem);
  newItem.id = modalIdNumber.textContent;
  const status = sendGoods({title: newItem.title,
    description: newItem.decription,
    category: newItem.category,
    price: newItem.price, discount: newItem.discount,
    count: newItem.count, units: newItem.units, images: [newItem.images]});
  // , (newItem) => {
  //   form.textContent = `Заявка номер ${newItem.id} сделана`;
  // })
  // ;
  if (status >= 200 || status < 300) {
    createRow(newItem);
    modalOpenClose();
    form.reset();
    allDelBtns();
  }
});

const allTableTotal = document.querySelector('.modal__price--total-table');
const itemTotal = document.querySelectorAll('td:nth-child(7)');
let num = 0;
itemTotal.forEach((i) => {
  num += Number(i.textContent.substring(1));
});
allTableTotal.textContent = num;
