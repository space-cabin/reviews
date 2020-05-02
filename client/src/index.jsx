import React from 'react';
import ReactDOM from 'react-dom';

import Reviews from './components/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>hello</div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
