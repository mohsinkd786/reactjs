const helloReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_TEXT':
        return Object.assign({}, state, {text: action.text});
      default:
        //console.log('Default value from HelloReducer');
        return state;
    }
  }
  
  export default helloReducer;