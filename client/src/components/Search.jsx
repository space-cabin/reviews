/* eslint-disable import/extensions */
import React from 'react';

import {
  SearchIcon,
  SearchForm,
  SearchReviews,
  SearchButton,
  SearchInnerWrapper,
} from '../style/OverviewStyle.js';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // eslint-disable-next-line no-console
    console.log(e);
    this.setState({});
  }

  render() {
    return (
      <SearchForm>
        <SearchInnerWrapper>
          <SearchReviews
            type="text"
            placeholder="Search reviews"
            onChange={this.handleChange}
          />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchInnerWrapper>
      </SearchForm>
    );
  }
}

export default Search;
