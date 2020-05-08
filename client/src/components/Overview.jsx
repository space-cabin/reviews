/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';


import Search from './Search';
import RatingLevels from './RatingLevels';
// eslint-disable-next-line import/extensions
import {
  StarRating,
  StarContainer,
  Header,
  TotalRating,
  AmountofReviews,
  LineBreak,
  VerticalLine,
  NoneFound,
  SomeFound,
  Word,
  GoBack,
  Wrapper,
} from '../style/OverviewStyle.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      reviews,
      onSearch,
      isSearching,
      searchQuery,
      hasReview,
      handleClick,
      clicked,
      displayedReviews,
    } = this.props;

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

    let guests = 'guests';
    let have = 'have';

    if (displayedReviews.length <= 1) {
      guests = 'guest';
      have = 'has';
    }

    const noReviews = (
      <NoneFound>
        <Wrapper>
          None of our guests have mentioned
          <Word>{`"${searchQuery}"`}</Word>
        </Wrapper>
        <GoBack onClick={() => handleClick(clicked)}>Back to all reviews</GoBack>
      </NoneFound>
    );

    const someReviews = (
      <div>
        <SomeFound>
          <Wrapper>
            {`${displayedReviews.length}
              ${guests} ${have} mentioned `}
            <Word>{`"${searchQuery}"`}</Word>
          </Wrapper>
          <GoBack onClick={() => handleClick(clicked)}>Back to all reviews</GoBack>
        </SomeFound>
        <LineBreak> </LineBreak>
      </div>
    );

    const searchResults = hasReview === false ? noReviews : someReviews;

    return (
      <div>
        <Header>
          <StarContainer>
            <StarRating />
          </StarContainer>
          <TotalRating>{total.toFixed(1)}</TotalRating>
          <VerticalLine> </VerticalLine>
          <AmountofReviews>
            {reviews.length}
          </AmountofReviews>
          reviews
          <Search onSearch={onSearch} />
        </Header>
        <LineBreak> </LineBreak>

        {/* if clicked is true then render ratinglevels  */}
        {isSearching ? searchResults : (
          <RatingLevels
            avgCheckin={avgCheckin}
            avgCleanliness={avgCleanliness}
            avgCommunication={avgCommunication}
            avgLocation={avgLocation}
            avgAccuracy={avgAccuracy}
            avgValue={avgValue}
          />
        )}
      </div>
    );
  }
}

export default Overview;
