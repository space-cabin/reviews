/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList';

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
    axios.get('/2')
      .then(({ data }) => {
        this.setState({ reviews: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ReviewList reviews={reviews} />
    );
  }
}

export default App;
