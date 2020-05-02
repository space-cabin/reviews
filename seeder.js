/* eslint-disable no-console */
const faker = require('faker');
// const fs = require('fs');
// const axios = require('axios');
const db = require('./database');


// write to file figure out file format csv

const generateReviews = () => {
  for (let i = 0; i < 100; i += 1) {
    const rand = Math.floor(Math.random() * (8 - 3) + 3);
    for (let j = 0; j <= rand; j += 1) {
      const user = faker.name.firstName();
      const dateStr = faker.date.recent().toString();
      const sentence = faker.lorem.sentence();
      const paragraph = faker.lorem.paragraph();
      const randomReview = faker.random.arrayElement([sentence, paragraph]);
      const rating1 = faker.finance.amount(2, 5, 1);
      const rating2 = faker.finance.amount(3, 5, 1);
      const rating3 = faker.finance.amount(2, 5, 1);
      const rating4 = faker.finance.amount(2, 5, 1);
      const rating5 = faker.finance.amount(1, 5, 1);
      const rating6 = faker.finance.amount(1, 5, 1);

      const newReview = new db.Review({
        listingId: i,
        userName: user,
        date: dateStr,
        review: randomReview,
        userPicture: `https://review-services-images-frontend-capstone.s3-us-west-1.amazonaws.com/${i}.jpg`,
        cleanlinessRating: rating1,
        accuracyRating: rating2,
        locationRating: rating3,
        valueRating: rating4,
        checkInRating: rating5,
        communicationRating: rating6,
      });

      newReview.save()
        .then(() => {
          if (i === 99) db.disconnect();
        })
        .catch((err) => console.log('err: ', err));
    }
  }
};

generateReviews();
// write to file instead of pushing to an array

// console.log(faker.random.number({min:1, max:5.0}));

// eslint-disable-next-line spaced-comment
/******** gets 100 random images and downloads them *********/
// const getImages = (n) => {
//   axios({
//     method: 'get',
//     url: 'https://media.giphy.com/media/kaBU6pgv0OsPHz2yxy/giphy.mp4',
//     responseType: 'stream',
//   })
//     .then(({ data }) => {
//       data.pipe(fs.createWriteStream(`../../images/${n}.mp4`));
//     })
//     .catch((err) => console.log(err));
// };

// const downloadImages = () => {
//   for (let i = 0; i < 100; i += 1) {
//     getImages(i);
//   }
// };

// downloadImages();
