/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Review from './Review';

import { ReviewsContainer } from '../style/ReviewStyle.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      hasReview,
      reviews,
    } = this.props;

    if (hasReview !== false) {
      return (
        <ReviewsContainer>
          {
            reviews.map((review) => <Review key={review._id} review={review} />)
          }
        </ReviewsContainer>
      );
    }
    return (<div />);
  }
}

export default ReviewList;
