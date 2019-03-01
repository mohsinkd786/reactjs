import React, { Component } from 'react';
import User from './User';
import { UTable } from "./Table";
class App extends Component {
  render() {
    return (
      <div>
        <User/>
        <UTable/>
      </div>
    );
  }
}

export default App;
