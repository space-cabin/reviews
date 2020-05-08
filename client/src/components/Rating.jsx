/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  ProgressContainer,
  Background,
  ProgressStatus,
  Table6Cols,
  RtableCell,
} from '../style/OverviewStyle.js';


class Rating extends React.Component {
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

    // width*review/5
    const checkinPercent = (100 * avgCheckin) / 5;
    const cleanlinessPercent = (100 * avgCleanliness) / 5;
    const communicationPercent = (100 * avgCommunication) / 5;
    const accuracyPercent = (100 * avgAccuracy) / 5;
    const valuePercent = (100 * avgValue) / 5;
    const locationPercent = (100 * avgLocation) / 5;

    return (
      <Table6Cols>
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
      </Table6Cols>
    );
  }
}

export default Rating;
