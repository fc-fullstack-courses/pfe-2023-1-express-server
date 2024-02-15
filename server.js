const express = require('express');

const users = [{ id: 1 }, { id: 2 }];

// екземпляр експресівського серверу
const app = express();

// app містить функції які відповідають всім методам HTTP запиту
// ендпоінт (шлях, ручка) - певний шлях на сервері (/users) з певним HTTP методом
app.get('/users', (request, response) => {
  console.log('users requested');

  // response.end(JSON.stringify(users));
  response.send(users);
});

app.get('/test', (req, res, next) => {
  console.log('first callback');

  req.abracadabra = 'magic trick';

  // функція яка сигналізує що можна переходити 
  // на наступний обробник
  next();
}, (req, res, next) => {
  console.log('second callback');
  console.log(req.abracadabra);

  if(Math.random() > 0.5) {
    next();
  } else {
    res.send('ERROR happened');
  }


},(req, res) => {
  console.log('third callback');
  res.send('all done');
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