const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
let data = require('./data.json');

app.use(express.static('public'));

app.get('/api/personas', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Set Content-Type header
  res.json(data);
});

app.get('/api/personas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < data.length) {
    res.setHeader('Content-Type', 'application/json'); // Set Content-Type header
    res.json(data[id]);
  } else {
    res.status(404).send('Not found'); // Fixed this line to correctly set the status
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});






