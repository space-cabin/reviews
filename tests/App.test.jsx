/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
// import axios from 'axios';
import App from '../client/src/components/App.jsx';


describe('Unit test', () => {
  test('should render the App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
