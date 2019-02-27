import React,{ Component } from "react";
import Hello from "./Hello";
import { Calculator } from "./Calculator";
import { UserForm } from "./UserForm";

class User extends Component{
    constructor(){
        // call parent constructor
        super()
        // initialize state
        this.state={
            users:[
                {
                    id: 1,
                    name: 'Williams',
                    email: 'will@gmail.com'
                },
                {
                    id: 2,
                    name: 'Walter',
                    email: 'walt@goo.com'
                },
                {
                    id: 3,
                    name: 'jack',
                    email: 'jack@yahoo.com'
                }
            ],
            msg : "Welcome to Reactjs Development"
        }
        this.handleCreateUser = this.handleCreateUser.bind(this)
    }
    clickMe(msg){
        alert(msg)
    }
    handleCreateUser(user){
        let oldUsers = this.state.users
        oldUsers.push(user)
        this.setState({
            users: oldUsers
        })
    }
    render(){
        // build rows 
        let rows = this.state.users.map(u=>{
            return(
                <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                </tr>
            )
        })
        return(
            <div>
                <div>
                    <Hello msg={this.state.msg}/>
                    <Calculator first={10} next={2} action='POW'/>
                    <UserForm handleCreateUser={this.handleCreateUser}/>
                    <button onClick={()=>{this.setState({ msg:'Welcome to User Component'}) }} >Click Me!</button>
                    <h2>{this.state.msg}</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default User