/* eslint-disable no-console */
const faker = require('faker');
// const fs = require('fs');
// const axios = require('axios');
const db = require('./database');


// write to file figure out file format csv

const generateReviews = () => {
  let count = 0;
  for (let i = 0; i < 100; i += 1) {
    const min = 3;
    const max = 7;
    const rand = Math.floor(Math.random() * (max - min) + min);
    for (let j = 0; j <= rand; j += 1) {
      const user = faker.name.firstName();
      const year = faker.random.arrayElement(['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']);
      const dateStr = `${faker.date.month()} ${year}`;
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
        userPicture: `https://review-services-images-frontend-capstone.s3-us-west-1.amazonaws.com/${i}-${j}.jpg`,
        cleanlinessRating: rating1,
        accuracyRating: rating2,
        locationRating: rating3,
        valueRating: rating4,
        checkInRating: rating5,
        communicationRating: rating6,
      });

      newReview.save()
        // eslint-disable-next-line no-loop-func
        .then(() => {
          if (count === 99) db.disconnect();
        })
        .catch((err) => console.log('err: ', err))
        // eslint-disable-next-line no-loop-func
        .finally(() => {
          count += 1;
          if (count === 99) db.disconnect();
        });
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
//     url: 'https://loremflickr.com/320/240/dog,person',
//     responseType: 'stream',
//   })
//     .then(({ data }) => {
//       data.pipe(fs.createWriteStream(`../../images/${n}.jpg`));
//     })
//     .catch((err) => console.log(err));
// };

// const downloadImages = () => {
//   let ar = [];
//   for (let i = 0; i < 100; i += 1) {
//     for(var j = 0; j < 7; j += 1) {
//       ar.push(`${i}-${j}`)
//     }
//   }
//   // console.log(ar)
//   for(let k = 0; k < ar.length; k++) {
//     if(ar[k] !== '99-6'){
//     getImages(ar[k]);
//     // console.log(ar[k])
//     }
//   }
// };

// downloadImages();
