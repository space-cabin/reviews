import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../client/src/components/ReviewList';
import Review from '../client/src/components/Review';
import reviews from './mockReviews';

it('should render 7 Review components', () => {
  const wrapper = shallow(<ReviewList reviews={reviews} />);
  expect(wrapper.find(Review)).toHaveLength(7);
});
