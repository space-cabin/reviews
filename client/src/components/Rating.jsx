/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

// import ProgressBar from './ProgressBar';

import {
  RatingLevelContainer,
  NameandProgress,
  ProgressContainer,
  Background,
  ProgressStatus,
  NameandRating,
  Row,
} from '../style/OverviewStyle.js';


class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    // const {
    //   accuracyRating,
    //   cleanlinessRating,
    //   locationRating,
    //   valueRating,
    //   checkInRating,
    //   communicationRating,
    //   // eslint-disable-next-line react/destructuring-assignment
    // } = this.props.rating;
    const {
      avgCheckin,
      avgCleanliness,
      avgCommunication,
      avgLocation,
      avgAccuracy,
      avgValue,
      total,
    } = this.props;

    return (
      <RatingLevelContainer>
        <Row>
          <NameandProgress>
            <NameandRating>
              Check-in
            </NameandRating>
            <ProgressContainer>
              <Background />
              <ProgressStatus percent="30" />
            </ProgressContainer>
            {avgCheckin}
          </NameandProgress>

          <NameandProgress>
            <NameandRating>
              Cleanilness
            </NameandRating>
            <ProgressContainer>
              <Background />
              <ProgressStatus percent="50" />

            </ProgressContainer>
            {avgCleanliness.toFixed(1)}
          </NameandProgress>
        </Row>
        {/*  {`Communication ${avgCommunication}`}
        {`Accuracy ${avgAccuracy}`}
        {`Value ${avgValue}`}
        {`Location ${avgLocation}`} */}


        {/* Cleanilness { cleanlinessRating}
        Communication { communicationRating}
        Accuracy { accuracyRating}
        Value { valueRating}
        Location { locationRating} */}
      </RatingLevelContainer>
    );
  }
}

export default Rating;
