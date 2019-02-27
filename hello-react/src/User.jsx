import React,{ Component } from "react";
import Hello from "./Hello";
import { Calculator } from "./Calculator";

class User extends Component{
    constructor(){
        // call parent constructor
        super()
        // initialize state
        this.state={
            msg : "Welcome to Reactjs Development"
        }
    }
    render(){
        return(
            <div>
            <Hello msg={this.state.msg}/>
            <Calculator first={10} next={2} action='POW'/>
            </div>
        )
    }
}
export default User