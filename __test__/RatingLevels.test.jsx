import React from 'react';
import { shallow } from 'enzyme';

import RatingLevels from '../client/src/components/RatingLevels';
import Rating from '../client/src/components/Rating';

const avgCheckin = 2.8;
const avgCleanliness = 1.9;
const avgCommunication = 3.5;
const avgLocation = 3.7;
const avgAccuracy = 3.0;
const avgValue = 1.9;

test('should render 1 Rating component on the screen', () => {
  const wrapper = shallow(
    <RatingLevels
      avgCheckin={avgCheckin}
      avgCleanliness={avgCleanliness}
      avgCommunication={avgCommunication}
      avgLocation={avgLocation}
      avgAccuracy={avgAccuracy}
      avgValue={avgValue}
    />,
  );
  expect(wrapper.find(Rating)).toHaveLength(1);
});
