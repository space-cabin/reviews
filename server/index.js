/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = 4007;

app.use(express.json());

app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
// app.use('/:listingId', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/:listingId', (req, res) => {
  db.Review.find({ listingId: req.params.listingId })
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
