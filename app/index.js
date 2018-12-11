import React, { PureComponent } from 'react';
import RootStack from './config/router';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <RootStack />
    );
  }
}

export default App;
