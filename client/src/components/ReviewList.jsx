/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Review from './Review';

import { ReviewsContainer } from '../style/ReviewStyle.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    const { reviews } = this.props;
    return (
      <ReviewsContainer>
        { // eslint-disable-next-line no-underscore-dangle
          reviews.map((review) => <Review key={review._id} review={review} />)
        }
      </ReviewsContainer>
    );
  }
}

export default ReviewList;
