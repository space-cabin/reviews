import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { review } = this.props;
    return (
      <div>
        <div>{ review.userName }</div>
        <img src={review.userPicture}/>
        {/* need to fix my seeding script to renmae photos so listing id and then 1 2 3 eg. listing id 2 would now be 21 22 23 ...length of random */}
      </div>

    );
  }
}

export default Review;
