export const httpRequest = (url = 'https://juvenile-protective-paddleboat.glitch.me/api/goods', {
  method = 'GET',
  callback,
  body = {},
  headers,
}) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  if (headers) {
    for (const [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value);
    }
  }
  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    if (callback) {
      callback(data);
    }
  });
  xhr.addEventListener('error', () => {
    console.log('error');
  });
  xhr.send(JSON.stringify(body));
  return xhr.status;
};

// export const sendGoods = (body) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://juvenile-protective-paddleboat.glitch.me/api/goods');

//   xhr.setRequestHeader('Content-Type', 'application/json');

//   xhr.addEventListener('error', () => {
//     console.log('error');
//   });

//   xhr.send(JSON.stringify(body));

//   return xhr.status;
// };
