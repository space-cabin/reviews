import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../client/src/components/ReviewList';
import Review from '../client/src/components/Review';

const sampleReviews = [
  {
    _id: '5eb08ce24302c2b8ef69f2ba',
    listingId: 8,
    userName: 'Kip',
    date: 'July 2019',
    review: 'Dolor est possimus eveniet quam dolorem.',
    userPicture: 'https://review-services-images-frontend-capstone.s3-us-west-1.amazonaws.com/8-1.jpg',
    cleanlinessRating: 2,
    accuracyRating: 3.7,
    locationRating: 2.6,
    valueRating: 2.3,
    checkInRating: 1.1,
    communicationRating: 3.3,
    __v: 0,
  },
  {
    _id: '5eb08ce24302c2b8ef69f2bc',
    listingId: 8,
    userName: 'Stan',
    date: 'October 2017',
    review: 'Eius accusamus dolorum saepe odio fugit id.',
    userPicture: 'https://review-services-images-frontend-capstone.s3-us-west-1.amazonaws.com/8-3.jpg',
    cleanlinessRating: 2,
    accuracyRating: 4.4,
    locationRating: 3.3,
    valueRating: 2.8,
    checkInRating: 1.8,
    communicationRating: 4.4,
    __v: 0,
  },
  {
    _id: '5eb08ce24302c2b8ef69f2bb',
    listingId: 8,
    userName: 'Haley',
    date: 'November 2013',
    review: 'Aperiam sequi velit et ipsa aliquam rerum. Temporibus ullam debitis quis quia qui quae. Consequatur aperiam vel dolor voluptas est sequi similique. Velit laboriosam velit et dolores recusandae quis non ad.',
    userPicture: 'https://review-services-images-frontend-capstone.s3-us-west-1.amazonaws.com/8-2.jpg',
    cleanlinessRating: 2.1,
    accuracyRating: 3.3,
    locationRating: 3.1,
    valueRating: 3,
    checkInRating: 4.7,
    communicationRating: 1.6,
    __v: 0,
  },
];

test('should render 3 Review components', () => {
  const wrapper = shallow(<ReviewList reviews={sampleReviews} />);
  expect(wrapper.find(Review)).toHaveLength(3);
});
