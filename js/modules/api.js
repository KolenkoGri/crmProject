export const httpRequest = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://juvenile-protective-paddleboat.glitch.me/api/goods');

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });
  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

export const sendGoods = (body, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://juvenile-protective-paddleboat.glitch.me/api/goods');

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });
  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
};
