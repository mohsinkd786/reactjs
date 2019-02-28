const default_state = {
    users: [],
    current_user: {
      name: 'Please specify your name',
      email: 'Email should be as first.name@gmail.com',
      gender: 'Male'
    },
    etc: {}
  };
  
  const userReducer = (state=default_state, action )=> {
  
    if ( action.type === 'UPDATE_USER' ) {
      return Object.assign( {}, state, { current_user: Object.assign( {}, state.current_user, { [action.payload.field]: action.payload.value } ) } );
    }
    else {
      return state;
    }
  
  }
  
  export default userReducer;