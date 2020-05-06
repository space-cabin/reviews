/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

// import ProgressBar from './ProgressBar';

import {
  // RatingLevelContainer,
  // NameandProgress,
  ProgressContainer,
  Background,
  ProgressStatus,
  // NameandRating,
  // Row,
  table6Cols,
  RtableCell,
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
    // width*review/5
    const checkinPercent = (100 * avgCheckin) / 5;
    const cleanlinessPercent = (100 * avgCleanliness) / 5;
    const communicationPercent = (100 * avgCommunication) / 5;
    const accuracyPercent = (100 * avgAccuracy) / 5;
    const valuePercent = (100 * avgValue) / 5;
    const locationPercent = (100 * avgLocation) / 5;

    return (
      <table6Cols>
        <RtableCell>
          Checkin
        </RtableCell>
        <RtableCell>
          <ProgressContainer>
            <Background />
            <ProgressStatus percent={checkinPercent} />
          </ProgressContainer>
        </RtableCell>
        <RtableCell>
          {avgCheckin.toFixed(1)}
        </RtableCell>

        <RtableCell>
          Cleanliness
        </RtableCell>
        <RtableCell>
          <ProgressContainer>
            <Background />
            <ProgressStatus percent={cleanlinessPercent} />
          </ProgressContainer>
        </RtableCell>
        <RtableCell>
          {avgCleanliness.toFixed(1)}
        </RtableCell>

        <RtableCell>
          Communication
        </RtableCell>
        <RtableCell>
          <ProgressContainer>
            <Background />
            <ProgressStatus percent={communicationPercent} />
          </ProgressContainer>
        </RtableCell>
        <RtableCell>
          {avgCommunication.toFixed(1)}
        </RtableCell>

        <RtableCell>
          Accuracy
        </RtableCell>
        <RtableCell>
          <ProgressContainer>
            <Background />
            <ProgressStatus percent={accuracyPercent} />
          </ProgressContainer>
        </RtableCell>
        <RtableCell>
          {avgAccuracy.toFixed(1)}
        </RtableCell>

        <RtableCell>
          Value
        </RtableCell>
        <RtableCell>
          <ProgressContainer>
            <Background />
            <ProgressStatus percent={valuePercent} />
          </ProgressContainer>
        </RtableCell>
        <RtableCell>
          {avgValue.toFixed(1)}
        </RtableCell>

        <RtableCell>
          Location
        </RtableCell>
        <RtableCell>
          <ProgressContainer>
            <Background />
            <ProgressStatus percent={locationPercent} />
          </ProgressContainer>
        </RtableCell>
        <RtableCell>
          {avgLocation.toFixed(1)}
        </RtableCell>



      </table6Cols>
    );
  }
}

export default Rating;
