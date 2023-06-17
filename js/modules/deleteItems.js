// import {httpRequest} from './api';

export const allDelBtns = (arr, httpRequest) => {
  const btn = document.querySelectorAll('.table__img');
  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.table__btn-pic--del')) {
        target.closest('.item').remove();
        httpRequest(`https://juvenile-protective-paddleboat.glitch.me/api/goods/${target.closest('.item').firstElementChild.textContent}`, {
          method: 'DELETE',
        });
        arr.filter((i) => {
          i !== target;
        });
      }
    });
  });
};
