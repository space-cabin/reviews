/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../client/src/components/App';
import Overview from '../client/src/components/Overview';
import RatingLevels from '../client/src/components/RatingLevels';
import { GoBack } from '../client/src/style/OverviewStyle';

import reviews from './mockReviews';

const displayedReviews = [];

const mockEvent = (str) => {
  return {
    target: {
      name: 'searchQuery',
      value: str,
    },
  };
};

describe('<Overview/>', () => {

  it('should render 1 <RatingLevels /> element on the screen', () => {
    const wrapper = shallow(<Overview reviews={reviews} displayedReviews={displayedReviews} />);

    expect(wrapper.find(RatingLevels)).toHaveLength(1);
  });

  it('should render 2 reviews with the word that was searched: la', () => {
    const wrapper = mount(<App />);
    const searchQuery = 'la';
    wrapper.setState({
      reviews,
      displayedReviews,
      hasReview: null,
      clicked: false,
      isSearching: false,
    });
    wrapper.find('.search-text').last().simulate('change', mockEvent(searchQuery));
    wrapper.find('.search-btn').last().simulate('click');
    expect(wrapper.state('displayedReviews').length).toBe(2);
  });

  it('should render no reviews with the word that was searched: wonil', () => {
    const wrapper = mount(<App />);
    const searchQuery = 'wonil';
    wrapper.setState({
      reviews,
      displayedReviews,
      hasReview: null,
      clicked: false,
      isSearching: false,
    });
    wrapper.find('.search-text').last().simulate('change', mockEvent(searchQuery));
    wrapper.find('.search-btn').last().simulate('click');
    expect(wrapper.state('displayedReviews').length).toBe(0);
    expect(wrapper.state('hasReview')).toBe(false);
  });

  it('should render main review page when goBack button is clicked', () => {
    const wrapper = mount(<App />);
    const searchQuery = 'Voluptatum';
    wrapper.setState({
      reviews,
      displayedReviews,
      hasReview: null,
      clicked: false,
      isSearching: false,
    });
    wrapper.find('.search-text').last().simulate('change', mockEvent(searchQuery));
    wrapper.find('.search-btn').last().simulate('click');
    expect(wrapper.state('displayedReviews').length).toBe(1);
    expect(wrapper.state('isSearching')).toBe(true);
    wrapper.find(GoBack).simulate('click');
    expect(wrapper.state('isSearching')).toBe(false);
  });
});
