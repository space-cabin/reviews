/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';


import Search from './Search';
import RatingLevels from './RatingLevels';
// eslint-disable-next-line import/extensions
import {
  StarRating, Header, TotalRating, AmountofReviews, LineBreak, VerticalLine,
} from '../style/OverviewStyle.js';


class Overview extends React.Component {
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
      <div>
        <Header>
          <StarRating />
          <TotalRating>{total.toFixed(1)}</TotalRating>
          <VerticalLine> </VerticalLine>
          <AmountofReviews>
            {reviews.length}
          </AmountofReviews>
          reviews
          <Search />
        </Header>
        <LineBreak> </LineBreak>
        <RatingLevels
          avgCheckin={avgCheckin}
          avgCleanliness={avgCleanliness}
          avgCommunication={avgCommunication}
          avgLocation={avgLocation}
          avgAccuracy={avgAccuracy}
          avgValue={avgValue}
        />
      </div>
    );
  }
}

export default Overview;
