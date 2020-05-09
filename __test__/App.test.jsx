/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
// import axios from 'axios';
import App from '../client/src/components/App';
import Review from '../client/src/components/Review';
import RatingLevels from '../client/src/components/RatingLevels';

import reviews from './mockReviews';


describe('<App/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render the App component on the screen', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });



});
