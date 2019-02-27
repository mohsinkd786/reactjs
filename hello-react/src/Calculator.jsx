import React from "react";

export class Calculator extends React.Component{
    render(){
        // Invalid statement
        // Properties once set cant be modified
        // this.props.action ='TEST'
        switch(this.props.action){
            case 'SUM':
                return(
                    <div>{this.props.first + this.props.next }</div>
                )
                //break
            case 'DIFF':
                return(
                    <div>{this.props.first - this.props.next }</div>
                )
                //break
            case 'MUL':
                return(
                    <div>{this.props.first * this.props.next }</div>
                )
                //break
            case 'DIV':
                return(
                    <div>{this.props.first / this.props.next }</div>
                )
                //break
            case 'POW':
                return(
                    <div>{ Math.pow(this.props.first,this.props.next)}</div>
                )
                //break
            default:
                return(
                    <h2>Please choose a valid action</h2>
                )
        }
    }
}