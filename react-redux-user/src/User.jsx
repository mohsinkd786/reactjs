import React from 'react';
import { connect } from 'react-redux';
import * as Action from './redux/actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    current_user: state.user.current_user,
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    updateInfo: (payload) => dispatch( Action.updateUserInfo(payload) ),
  }
}


const UserC = (props) => {

  let changeUserDetails = (field, value) => {
    props.updateInfo({ field: field, value: value });
  }

  return(
    <div>
      <h1>Hello { props.current_user.name }</h1>
      <p>Your email address is { props.current_user.email }</p>
      <div style={{ marginTop: 30 }}>
        <button onClick={ () => { changeUserDetails('name', 'Antlers') } }>Change Name</button>
        <button onClick={ () => { changeUserDetails('email', 'jose@gmail.com') } }>Change Email Address</button>
      </div>
    </div>
  )

}

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserC)

export default User;