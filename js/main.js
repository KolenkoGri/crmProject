import {renderGoods} from './modules/render.js';
import {httpRequest} from './modules/api.js';

// const URL = 'https://juvenile-protective-paddleboat.glitch.me/api/goods';

{
  const init = () => {
    httpRequest(renderGoods);
  };
  window.crmInit = init;
}
