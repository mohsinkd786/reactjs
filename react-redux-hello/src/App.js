import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import helloAction from './redux/action.hello';
import React from "react";

class AppComponent extends React.Component {
  constructor(){
    super()
  }
  onChangeHandler(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello World</h2>
        </div>
        <p className="App-intro">
          Hello, {this.props.text}
          {' '}
          <input type='text' onChange={this.onChangeHandler.bind(this)} />
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({onChange: helloAction}, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App;

