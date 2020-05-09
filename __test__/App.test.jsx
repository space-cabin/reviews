/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App';

describe('<App/>', () => {
  it('should render the App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
