import React from "react";
import axios from "axios";

export default class Users extends React.Component{

    state = {
        users : []
    }
    componentDidMount(){
        // axios
        // .get('https://jsonplaceholder.typicode.com/users')
        // .then(rs=>{
        //     console.log(rs.data);
        //     const data = rs.data;
        //     this.setState({ users: data });
        // })
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(rs=>rs.json())
        .then(rs=>{
            console.log(rs);
            const data = rs;
            this.setState({ users: data });
        })
    }
    render(){
        return(
            <ul>
                {
                    this.state.users.map(u=> <li>{u.name}, {u.email}</li>)
                }
            </ul>
        )
    }
}