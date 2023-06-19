const body = document.querySelector('body');

const createModal = () => {
  body.insertAdjacentHTML('afterbegin', `
    <section class="modal">
        <div class="modal__overlay">
            <div class="container modal__container">
                <div class="modal__head-block">
                    <h2 class="modal__title">Добавить товар</h2>
                    <div class="modal__p">
                        <p class="modal__id">id: </p>
                        <p class="modal__id modal__id--number">
                        </p>
                    </div>
                </div>
                <div class="modal__line"></div>
                <form class="form" action="https://jsonplaceholder.typicode.com/posts" id="myform">
                    <fieldset class="form__fieldset-all">
                        <fieldset class="form__fieldset">
                            <label class="form__name">Наименование
                                <input class=
                                "form__input form__input--title"
                                type="text" 
                                name = "title" required 
                                value = >
                            </label>
                        </fieldset>
                        <fieldset 
                        class="form__fieldset form__fieldset--descrip">
                            <label class="form__name">Описание
                                <input 
                                class="form__input form__input--description"
                                name = "decription" type="text" required>
                            </label>
                        </fieldset>
                        <fieldset class="form__fieldset">
                            <label class="form__name">Категория
                                <input 
                                class="form__input form__input--category" 
                                type="text" name = "category" required>
                            </label>
                        </fieldset>
                        <fieldset class="form__fieldset">
                            <label class="form__name">Единицы измерения
                                <input class="form__input form__input--units" 
                                type="text" name = "units" required>
                            </label>
                        </fieldset>
                        <fieldset class="form__fieldset">
                            <label class="form__name">Количество
                                <input class="form__input form__input--count" 
                                type="number" name = "count" required>
                            </label>
                        </fieldset>
                        <fieldset class="form__fieldset">
                            <label class="form__name form__name--two-input">
                            Дисконт</label>
                            <div class="form__checking">
                                <input class="form__input form__input--checkbox"
                                type="checkbox" >
                                <input class="form__input form__input-disabled" 
                                type="text" disabled name="discont">
                            </div>
                        </fieldset>
                        <fieldset class="form__fieldset">
                        <label class="form__name">Цена
                            <input class="form__input form__input--price" 
                            type="number" name="price" required>
                        </label>
                        </fieldset>
                        <div class="modal__error-message">
                            <p class="modal__error-message--1mb">
                            Изображение не должно 
                                превышать размер 1 Мб</p>
                        </div>
                        <label class="modal__file" for = "image">
                        <input type="file" 
                        class="modal__file--input" 
                        id="image" name="image" accept="image/*">
                        <span class = "modal__span">Добавить изображение</span>
                        </label>
                        <div class="modal__add-img">
                            <div class="modal__add-img--user">
                                <button type="button" class="modal__delete-img">
                                    <img class="modal__delete-img-btn" 
                                    src="css/modal/image/delete-forever.svg" 
                                    alt="Кнопка удаления картинки">
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div class="modal__complete">
                    <p class="modal__total">Итоговая стоимость:
                    <span class="modal__price"> $ </span>
                    <span class="modal__price modal__price--total"> 0 </span>
                    </p>
                    <button class="modal__submit" type="submit" 
                    form="myform">Добавить товар</button>
                </div>
                <svg class="modal__close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#6E6893" 
                    stroke-width="3" stroke-linecap="round"/>
                    <path d="M2 22L22 2" stroke="#6E6893" 
                    stroke-width="3" stroke-linecap="round"/>
                </svg>
                <div class="modal__error">
                    <p class="modal__error-text modal__error-text--x">X</p>
                    <p class="modal__error-text modal__error-text--wrong">
                    Что-то пошло не так</p>
                    <svg class="modal__close-error" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L22 22" stroke="#6E6893" 
                        stroke-width="3" stroke-linecap="round"/>
                        <path d="M2 22L22 2" stroke="#6E6893" 
                        stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
    `);
};

const styles = new Set();

const loadStyle = (url) => {
  if (styles.has(url)) {
    return styles.get(url);
  }
  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.addEventListener('load', () => {
      resolve();
    });
    document.head.append(link);
    styles.add(url);
  });
};

loadStyle('../../css/modal/modal.css', createModal());

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
const form = document.querySelector('.form');
const idNumber = document.querySelector('.modal__p');

const modalPictureInput = document.querySelector('.modal__file--input');
const modalAddImg = document.querySelector('.modal__add-img');
const modalAddImgUser = document.querySelector('.modal__add-img--user');
const modalImgDelete = document.querySelector('.modal__delete-img-btn');
const modalErrorMessage = document.querySelector('.modal__error-message');

export const modalOpenClose = () => {
  modal.classList.toggle('modal-open');
};

export const entryItem = (err, item) => {
  if (err) {
    return;
  }
  idNumber.style.display = 'flex';
  const modalIdNumber = document.querySelector('.modal__id--number');
  modalIdNumber.textContent = item.id;
  const formTitle = document.querySelector('.form__input--title');
  formTitle.value = item.title;
  const formDesc = document.querySelector('.form__input--description');
  formDesc.value = item.description;
  const formCategory = document.querySelector('.form__input--category');
  formCategory.value = item.category;
  const formUnits = document.querySelector('.form__input--units');
  formUnits.value = item.units;
  modalInputCount.value = item.count;
  modalCheckbox.toggleAttribute('checked');
  modalCheckboxDisabled.toggleAttribute('disabled');
  modalCheckboxDisabled.classList.toggle('form__input-disabled');
  modalCheckboxDisabled.value = item.discount;
  modalInputPrice.value = item.price;
  modalTotalPrice.textContent = modalInputCount.value * modalInputPrice.value;
  console.log(item.image);
  modalAddImgUser.style.backgroundImage = `url(https://juvenile-protective-paddleboat.glitch.me/${item.image})`;
  modalAddImg.style.display = 'flex';
  // ЗДЕСЬ НАДО ДОБАВИТЬ ИНФУ ПО КАРТИНКЕ

  modalOpenClose();
  return item;
};

// Добавление изображения


export const toBase64 = (file) => {
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      resolve(reader.result);
    });
    reader.addEventListener('error', (err) => {
      reject(err);
    });
    reader.readAsDataURL(file);
  });
};

modalPictureInput.addEventListener('change', () => {
  if (modalPictureInput.files.length > 0) {
    if (modalPictureInput.files[0].size < 1048576) {
      modalErrorMessage.style.display = 'none';
      const src = URL.createObjectURL(modalPictureInput.files[0]);
      modalAddImgUser.style.backgroundImage = `url(${src})`;
      modalAddImg.style.display = 'flex';
      modalImgDelete.addEventListener('click', ({target}) => {
        if (target.closest('.modal__add-img--user')) {
          modalAddImg.style.display = 'none';
          modalAddImgUser.style.backgroundImage = `url('')`;
        }
      });
    } else {
      modalErrorMessage.style.display = 'block';
    }
  }
});

export const edit = (http) => {
  const btnEdit = document.querySelectorAll('.table-btn-pic--edit');
  btnEdit.forEach((btn) => {
    btn.addEventListener('click', async ({target}) => {
      console.log(target.closest('.item').firstElementChild.textContent);
      await http(`https://juvenile-protective-paddleboat.glitch.me/api/goods/${target.closest('.item').firstElementChild.textContent}`, {
        method: 'GET',
        callback: entryItem,
      });
    });
  });
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
  form.reset();
  idNumber.style.display = 'none';
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
