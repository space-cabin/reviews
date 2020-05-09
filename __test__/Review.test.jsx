/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Review from '../client/src/components/Review';

const sampleReview = {
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
};

describe('Render Tests', () => {
  test('should render the correct review string', () => {
    const wrapper = shallow(<Review review={sampleReview} />);
    // expect(wrapper.find('Post').children()).toHaveLength(1);
    expect(wrapper.find('.test')).toHaveLength(1);
    expect(wrapper.find('.test').text()).toBe('Dolor est possimus eveniet quam dolorem.');
  });
});
