import { Route,Switch,Router } from 'react-router-dom';
import React from 'react';
import { Home } from "./Home";
import { Aboutus } from "./Aboutus";
import { User } from './User';

export class Content extends React.Component{
    render(){
        return(
            <div>
                <Route path='' exact='true' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/aboutus' component={Aboutus} />
                <Route path='/user/:id' component={User} />
            </div>
        )
    }
}