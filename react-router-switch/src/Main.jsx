import React from 'react';
import { Switch,Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from './Aboutus';
import User from "./User";

const Main = ()=>{
    return(
        <main>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/aboutus" component={Aboutus} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        </main>
    )
}

export default Main