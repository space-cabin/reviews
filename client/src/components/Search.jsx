import React from 'react';

import {
  SearchForm, SearchReviews, SearchButton,
// eslint-disable-next-line import/extensions
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
        <SearchReviews
          placeholder="Search reviews"
          onChange={this.handleChange}
         // eslint-disable-next-line react/jsx-closing-bracket-location
         />
        <SearchButton>
          <i className="fas fa-search"> </i>
        </SearchButton>
      </SearchForm>
    );
  }
}

export default Search;
