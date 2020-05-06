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
    const {
      avgCheckin,
      avgCleanliness,
      avgCommunication,
      avgLocation,
      avgAccuracy,
      avgValue,
    } = this.props;

    return (
      <RatingContainer>
        <Rating
          avgCheckin={avgCheckin}
          avgCleanliness={avgCleanliness}
          avgCommunication={avgCommunication}
          avgLocation={avgLocation}
          avgAccuracy={avgAccuracy}
          avgValue={avgValue}
        />
      </RatingContainer>
    );
  }
}

export default RatingLevels;
