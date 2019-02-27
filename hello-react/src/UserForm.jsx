import React from "react";


export class UserForm extends React.Component{
    constructor(){
        super()
        this.state={
            formName:'',
            formEmail: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleAddUser = this.handleAddUser.bind(this)
    }
    handleName(e){
        this.setState({formName: e.target.value})
    }
    handleEmail(e){
        this.setState({formEmail: e.target.value})
    }    
    handleAddUser(e){
        // reset fields
        this.refs.name.value =''
        this.refs.email.value =''
        
        alert('User Added')
        let userObj ={
            id: 10,
            name: this.state.formName,
            email: this.state.formEmail
        }
        // pass the newly created user object
        // to parent component i.e. User
        this.props.handleCreateUser(userObj)
    }
    render(){
        return(
            <div>
                <div>
                    <input type='text' name='name' onChange={this.handleName} ref='name'/>
                </div>
                <div>
                    <input type='email' name='email' onChange={this.handleEmail} ref='email'/>
                </div>
                <div>
                    <button name='login' onClick={this.handleAddUser} >Add User</button>
                </div>
            </div>
        )
    }
}