/* eslint-disable react/prop-types */
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

    this.state = {
      searchQuery: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.intializeState = this.intializeState.bind(this);
  }

  handleChange({ target }) {
    // eslint-disable-next-line no-console
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleSearch(e) {
    const { onSearch } = this.props;
    e.preventDefault();
    onSearch(this.state);
    this.intializeState();
  }

  intializeState() {
    this.setState({
      searchQuery: '',
    });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <SearchForm>
        <SearchInnerWrapper>
          <SearchReviews
            name="searchQuery"
            value={searchQuery}
            type="text"
            placeholder="Search reviews"
            onChange={this.handleChange}
          />
          <SearchButton onClick={this.handleSearch}>
            <SearchIcon />
          </SearchButton>
        </SearchInnerWrapper>
      </SearchForm>
    );
  }
}

export default Search;
