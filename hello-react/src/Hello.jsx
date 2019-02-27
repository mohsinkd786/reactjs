import React, { Component } from "react";

class Hello extends Component{
    render(){
        return(
            <div>
                {this.props.msg}
            </div>
        )
    }
}
export default Hello