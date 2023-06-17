import {createRow} from './createElements.js';
import {allDelBtns} from './deleteItems.js';
import {modalOpenClose} from './modal.js';
import {win} from './openImage.js';
import {httpRequest} from './api.js';
import {openModalError} from './modal.js';

const tbody = document.querySelector('table__body');

export const renderGoods = (err, arr) => {
  if (err) {
    tbody.textContent = err;
    return;
  }
  arr.map((el) => {
    createRow(el);
  });
  allDelBtns(arr, httpRequest);
  win();
};

const modalIdNumber = document.querySelector('.modal__id--number');
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newItem = Object.fromEntries(formData);
  newItem.id = modalIdNumber.textContent;
  const status = async () => {
    await httpRequest('https://juvenile-protective-paddleboat.glitch.me/api/goods', {method: 'POST',
      body: {title: newItem.title,
        description: newItem.decription,
        category: newItem.category,
        price: newItem.price, discount: newItem.discount,
        count: newItem.count, units: newItem.units, images: [newItem.images]},
      callback(err) {
        if (err) {
          openModalError();
          return;
        }
      },
      headers: {'Content-Type': 'application/json'},
    });
  };

  console.log(status());

  // if (status >= 200 && status < 300) {
  createRow(newItem);
  modalOpenClose();
  form.reset();
  // allDelBtns([newItem], httpRequest);
},
);

const allTableTotal = document.querySelector('.modal__price--total-table');
const itemTotal = document.querySelectorAll('td:nth-child(7)');
let num = 0;
itemTotal.forEach((i) => {
  num += Number(i.textContent.substring(1));
});
allTableTotal.textContent = num;
