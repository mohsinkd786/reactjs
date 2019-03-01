import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Message from './Message';

ReactDOM.render(<div><App /> <Message/></div>, document.getElementById('root'));

serviceWorker.unregister();
