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
    clickMe(msg){
        alert(msg)
    }
    render(){
        return(
            <div>
                <Hello msg={this.state.msg}/>
                <Calculator first={10} next={2} action='POW'/>
                <button onClick={()=>{this.setState({ msg:'Welcome to User Component'}) }} >Click Me!</button>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}
export default User