const express = require('express');

const app = express();

// routes
app.get('/', (request, response) => {
  response.send('We are on home');
});

app.listen(3000);