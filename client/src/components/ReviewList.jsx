/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Review from './Review';

import { ReviewsContainer } from '../style/ReviewStyle.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // reviews: [],
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({reviews: })
  // }

  render() {
    const {
      searchQuery,
      hasReview,
      length,
      reviews,
      clicked,
      handleClick,
    } = this.props;

    // if (hasReview === false) {
    //   return (
    //     <div>

    //     </div>
    //   );
    // }

    // if (reviews.length !== length) {
    //   return (
    //     <ReviewsContainer>
    //       <div>
    //         <div>{`${reviews.length} have mentioned ${searchQuery}`}</div>
    //         <button type="button" onClick={handleClick}>Back to all reviews</button>
    //         {clicked && (
    //           <ReviewsContainer>
    //             {
    //               reviews.map((review) => <Review key={review._id} review={review} />)
    //             }
    //           </ReviewsContainer>
    //         )}
    //       </div>
    //       {
    //         reviews.map((review) => <Review key={review._id} review={review} />)
    //       }
    //     </ReviewsContainer>
    //   );
    // }
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
