/* eslint-disable react/prop-types */
import React from 'react';
import {
  PostContainer, ReviewHeaderContainer, Picture, NameandDateContainer, User, Date, Post, LineBreak,
// eslint-disable-next-line import/extensions
} from '../style/ReviewStyle.js';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { review } = this.props;
    return (
      <PostContainer>
        <ReviewHeaderContainer>
          <Picture alt="user" src={review.userPicture} />
          <NameandDateContainer>
            <User>{ review.userName }</User>
            <Date>{ review.date }</Date>
          </NameandDateContainer>
        </ReviewHeaderContainer>
        <Post className="test">{ review.review }</Post>
        <LineBreak> </LineBreak>
      </PostContainer>
    );
  }
}

export default Review;
