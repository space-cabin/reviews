/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

import Rating from './Rating';

import { RatingContainer } from '../style/OverviewStyle.js';

class RatingLevels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { reviews } = this.props;

    let avgCheckin = 0;
    let avgCleanliness = 0;
    let avgLocation = 0;
    let avgAccuracy = 0;
    let avgValue = 0;
    let avgCommunication = 0;
    reviews.forEach((ele) => {
      avgCheckin += ele.checkInRating;
      avgValue += ele.valueRating;
      avgCommunication += ele.communicationRating;
      avgLocation += ele.locationRating;
      avgCleanliness += ele.cleanlinessRating;
      avgAccuracy += ele.accuracyRating;
    });
    avgCheckin /= reviews.length;
    avgValue /= reviews.length;
    avgCommunication /= reviews.length;
    avgLocation /= reviews.length;
    avgCleanliness /= reviews.length;
    avgAccuracy /= reviews.length;
    reviews.averageRatings = {
      averageCheckin: avgCheckin,
      averageValue: avgValue,
      averageCommunication: avgCommunication,
      averageLocation: avgLocation,
      averageCleanliness: avgCleanliness,
      averageAccuracy: avgAccuracy,
    };
    const total = (avgCheckin + avgValue
      + avgCommunication + avgLocation + avgCleanliness + avgAccuracy) / 6;

    reviews.ratingAverage = total;


    return (
      // <p>{ review.userName }</p>
      <RatingContainer>
        {/* {reviews.map((rating) => <Rating key={rating._id} rating={rating} />)} */}
        <Rating
          avgCheckin={avgCheckin}
          avgCleanliness={avgCleanliness}
          avgCommunication={avgCommunication}
          avgLocation={avgLocation}
          avgAccuracy={avgAccuracy}
          avgValue={avgValue}
          total={total}
        />
      </RatingContainer>
      // todo trying to get the individual ratons to appear
    );
  }
}

export default RatingLevels;
