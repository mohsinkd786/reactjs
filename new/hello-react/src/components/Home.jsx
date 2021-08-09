import React from "react";
import Users from "./Users";

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            nums : [1,2,3,4,5,6,9,10]
        };
    }
    render(){
        return(
            <>
                <h3>
                    Home Component 
                </h3>
                <h3>
                    Message : { this.props.message }
                </h3>
                {
                    this.state.nums.map(i=> <strong>{i} - </strong>)
                }
                <Users/>
            </>
        )
    }   
}

export default Home;