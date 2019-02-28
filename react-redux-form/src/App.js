import React, { Component } from 'react';
import User from './User';

class App extends Component {
  handleRegister = values => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <User/>
      </div>
    );
  }
}

export default App;
