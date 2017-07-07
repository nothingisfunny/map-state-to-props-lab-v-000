import React, { Component } from 'react';
import UserInput from './components/UserInput';
import Users from './components/Users'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.store);
    return (
      <div className="App">
        <UserInput store={this.props.store} />
        <Users store={this.props.store} />
        {/* is there something we could connect to here? */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(App);


