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
// let avgCheckin = 0;
// let avgCleanliness = 0;
// let avgLocation = 0;
// let avgAccuracy = 0;
// let avgValue = 0;
// let avgCommunication = 0;

  db.Review.find({ listingId: req.params.listingId })
    // .then((data) => {
    //   let reviews = data;
    //   data.forEach((ele) => {
    //     avgCheckin += ele.checkInRating;
    //     avgValue += ele.valueRating;
    //     avgCommunication += ele.communicationRating;
    //     avgLocation += ele.locationRating;
    //     avgCleanliness += ele.cleanlinessRating;
    //     avgAccuracy += ele.accuracyRating;
    //   });
    //   avgCheckin /= data.length;
    //   avgValue /= data.length;
    //   avgCommunication /= data.length;
    //   avgLocation /= data.length;
    //   avgCleanliness /= data.length;
    //   avgAccuracy /= data.length;
    //   reviews.averageRatings = {
    //     averageCheckin: avgCheckin,
    //     averageValue: avgValue,
    //     averageCommunication: avgCommunication,
    //     averageLocation: avgLocation,
    //     averageCleanliness: avgCleanliness,
    //     averageAccuracy: avgAccuracy,
    //   };
    //   const total = (avgCheckin + avgValue + avgCommunication + avgLocation + avgCleanliness + avgAccuracy) / 6;
    //   reviews.ratingAverage = total;

    //   res.send(reviews);
    // })
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

// app.get('/ratingAverage', (req, res) => {

// })

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
