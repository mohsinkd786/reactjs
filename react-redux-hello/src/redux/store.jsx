import { createStore } from 'redux'
import helloReducer from './reducer.hello';

let store = createStore(helloReducer,
     {text: 'Welcome'},
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store

// Add only in case to enable redux dev tools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
