import {items} from './modules/items.js';
import {renderGoods} from './modules/render.js';

{
  const init = () => {
    renderGoods(items);
  };
  window.crmInit = init;
}
