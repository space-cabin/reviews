import React from 'react';
import Review from './Review';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    const { reviews } = this.props;
    return (
      reviews.map((review, idx) => <Review key={idx} review={review} />)
    );
  }
}

export default ReviewList;
