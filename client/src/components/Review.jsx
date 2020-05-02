import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { review } = this.props;
    return (
      <div>{ review.userName }</div>
    );
  }
}

export default Review;
