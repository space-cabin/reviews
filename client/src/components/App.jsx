/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ReviewList from './ReviewList';
import Overview from './Overview';

const Title = styled.h2`
  color: rgb(72, 72, 72);
  font-family:  Circular, -apple-system, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 500;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-left: 4%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };

    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    // console.log(window.location.pathname);
    this.getReviews();
  }

  getReviews() {
    // let listingId = window.location.pathname.slice(1, window.location.pathname.length - 1);
    // axios.get(`/listing/${listingId}`)
    // axios.get('/listing/3')
    axios.get('/3')
      .then(({ data }) => {
        this.setState({ reviews: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { reviews } = this.state;
    return (
      <Container>
        <Title>Reviews</Title>
        <Overview reviews={reviews} />
        <ReviewList reviews={reviews} />
      </Container>
    );
  }
}

export default App;
