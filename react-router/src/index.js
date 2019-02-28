import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

/*ReactDOM.render(<BrowserRouter>
                    <div>
                        <Menu/>
                            <Route path='' exact='true' component={Home} />
                            <Route path='/home' component={Home} />
                            <Route path='/aboutus' component={Aboutus} />
                            <Route path='/user/:id' component={User} />
                    </div>
                </BrowserRouter>
, document.getElementById('root'));
*/
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
