/* eslint-disable import/extensions */
import React from 'react';

import Search from './Search';
// eslint-disable-next-line import/extensions
import {
  Header, LineBreak,
} from '../style/OverviewStyle.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Header>
        <Search />
        <LineBreak> </LineBreak>
      </Header>
    );
  }
}

export default Overview;
