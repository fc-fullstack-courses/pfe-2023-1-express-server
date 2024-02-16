const express = require('express');
const router = require('./routers');

// екземпляр експресівського серверу
const app = express();

// міддлвер router змонтований в app
app.use(router);
// app.use('/api',router);

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  // коллбек стартує після успішного запуску сервера
  console.log(`Server started on ${HOST}:${PORT}`);
});
