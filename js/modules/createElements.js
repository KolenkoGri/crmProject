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
  tr.insertAdjacentHTML('beforeend', `<td>$${item.price}</td>`);
  tr.insertAdjacentHTML('beforeend', `<td>$${item.count * item.price}</td>`);

  const ic1 = createTd1();
  const ic2 = createTd2();
  const ic3 = createTd3();
  tr.append(ic1, ic2, ic3);
  const tableBody = document.querySelector('.table__body');
  tableBody.append(tr);
};

export {
  createTd1,
  createTd2,
  createTd3,
  createRow,
};
