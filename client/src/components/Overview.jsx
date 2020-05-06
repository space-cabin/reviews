/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';

import Search from './Search';
import RatingLevels from './RatingLevels';
// eslint-disable-next-line import/extensions
import {
  Header, TotalRating, AmountofReviews, LineBreak, VerticalLine,
} from '../style/OverviewStyle.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        <Header>
          <i className="fas fa-star" />
          {/* .fa-star:before {
              content: "\f005";
              column-fill: blue;
              color: deepskyblue; */}
          <TotalRating>4.90</TotalRating>
          <VerticalLine> </VerticalLine>
          <AmountofReviews>
            { reviews.length }
          </AmountofReviews>
          reviews
          <Search />
        </Header>
        <LineBreak> </LineBreak>
        <RatingLevels reviews={reviews} />
      </div>
    );
  }
}

export default Overview;
