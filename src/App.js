import React, { Component } from 'react';
import UserInput from './components/UserInput';
import { ConnectedUsers } from './components/Users'

export default class App extends Component {
  render() {
    console.log(this.props.store);
    return (
      <div className="App">
        <UserInput store={this.props.store} />
        <ConnectedUsers />
      </div>
    );
  }
}


