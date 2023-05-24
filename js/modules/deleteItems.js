import {items} from './items.js';

export const allDelBtns = () => {
  const btn = document.querySelectorAll('.table__img');
  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.table__btn-pic--del')) {
        target.closest('.item').remove();
        items.filter((i) => {
          i !== target;
        });
      }
    });
  });
};
