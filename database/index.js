/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://database/reviews');
const db = mongoose.connection;
// eslint-disable-next-line no-unused-vars
db.on('error', (err) => console.log(':('));
db.once('open', () => console.log('connected! :)'));

const reviewsSchema = new mongoose.Schema({
  id: String,
  listingId: Number,
  userName: String,
  userPicture: String,
  date: String,
  review: String,
  cleanlinessRating: Number,
  accuracyRating: Number,
  locationRating: Number,
  valueRating: Number,
  checkInRating: Number,
  communicationRating: Number,
});

const Review = mongoose.model('review', reviewsSchema);

const disconnect = () => {
  mongoose.disconnect();
};

module.exports = {
  Review,
  disconnect,
};
