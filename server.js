const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/portfolio-web'));

app.get('/*', (req,res,next) => {
  res.sendFile(path.join(__dirname + '/dist/portfolio-web/index.html'));
});

app.listen(process.env.PORT || 8000);
