import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            clicked: 0
        }
        this.handleClicked = this.handleClicked.bind(this)
    }
    handleClicked(){
        this.setState({clicked:this.state.clicked+1 })
    }
    render(){
        return(
            <div>
                <button  name='clickMe' onClick={this.handleClicked}>Click me!</button>
                <h2>{this.state.clicked > 0 ? this.state.clicked : ''}</h2>
            </div>
        )
    }
}

export default Message