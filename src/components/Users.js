import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    const users = this.props.users.map(user => {
      return <li>{user.userName}</li>
    })
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

 // aren't we supposed to be connecting something around here?

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)

