'use strict';

const items = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем  с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const createTd1 = () => {
  const td = document.createElement('td');
  td.classList.add('table-pic');
  const btn = document.createElement('button');
  btn.classList.add('table__btn-pic');
  td.append(btn);
  const img = document.createElement('img');
  img.classList.add('table__img');
  img.setAttribute('src', 'css/table/icons/image.svg');
  img.setAttribute('alt', 'Есть картинка');
  btn.append(img);
  return td;
};

const createTd2 = () => {
  const td = document.createElement('td');
  td.classList.add('table-pic');
  const btn = document.createElement('button');
  btn.classList.add('table__btn-pic');
  td.append(btn);
  const img = document.createElement('img');
  img.classList.add('table__img');
  img.setAttribute('src', 'css/table/icons/edit.svg');
  img.setAttribute('alt', 'Редактировать');
  btn.append(img);
  return td;
};

const createTd3 = () => {
  const td = document.createElement('td');
  td.classList.add('table-pic');
  const btn = document.createElement('button');
  btn.classList.add('table__btn-pic');
  btn.classList.add('table__btn-pic--del');
  td.append(btn);
  const img = document.createElement('img');
  img.classList.add('table__img');
  img.setAttribute('src', 'css/table/icons/garbage.svg');
  img.setAttribute('alt', 'Удалить');
  btn.append(img);
  return td;
};

const createRow = (item) => {
  const tr = document.createElement('tr');
  tr.classList.add('item');
  tr.insertAdjacentHTML('beforeend', `<td>${item.id}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>${item.title}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>${item.category}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>${item.units}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>${item.count}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>${item.price}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>${item.count * item.price}</td>`);

  const ic1 = createTd1();
  const ic2 = createTd2();
  const ic3 = createTd3();
  tr.append(ic1, ic2, ic3);

  const tableBody = document.querySelector('.table__body');
  tableBody.append(tr);
};

const renderGoods = (arr) => {
  arr.map((el) => {
    createRow(el);
  });
};


const btnAdd = document.querySelector('.table__product');
const overlayModal = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');

renderGoods(items);

btnAdd.addEventListener('click', () => {
  modal.classList.add('modal-open');
});

overlayModal.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlayModal || target.closest('.modal__close')) {
    modal.classList.remove('modal-open');
  }
});

const btn = document.querySelectorAll('.table__img');
btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn-pic--del')) {
      target.closest('.item').remove();
      items.filter((i) => {
        i !== target;
      });
      console.log(document.querySelectorAll('.item'));
    }
  });
});

