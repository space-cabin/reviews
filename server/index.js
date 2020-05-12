/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = 4007;

app.use(express.json());

app.use('/:id', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.redirect(301, `http://localhost:${PORT}/index.html`);
});

app.get('/reviews/:listingId', (req, res) => {
  db.Review.find({ listingId: req.params.listingId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
