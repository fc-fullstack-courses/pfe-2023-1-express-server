const express = require('express');

const users = [{ id: 1 }, { id: 2 }];

// екземпляр експресівського серверу
const app = express();

// app містить функції які відповідають всім методам HTTP запиту
app.get('/users', (request, response) => {
  console.log('users requested');

  // response.end(JSON.stringify(users));
  response.send(users);
});
// app.get('/orders', (request, response) => {
//   console.log('orders requested');

//   // response.end(JSON.stringify(users));
//   response.send('orders data');
// });

// будь-який GET запит
app.get('*', (request, response) => {
  console.log('users requested');

  // response.end(JSON.stringify(users));
  response.send('test');
});
// app.post();
// app.put();
// app.delete();

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  // коллбек стартує після успішного запуску сервера
  console.log(`Server started on ${HOST}:${PORT}`);
});