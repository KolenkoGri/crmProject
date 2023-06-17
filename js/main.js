import {renderGoods} from './modules/render.js';
import {fetchRequest} from './modules/api.js';

const URL = 'https://juvenile-protective-paddleboat.glitch.me/api/goods';

{
  const init = () => {
    fetchRequest(URL, {
      method: 'get',
      callback: renderGoods,
    });
  };
  window.crmInit = init;
}
