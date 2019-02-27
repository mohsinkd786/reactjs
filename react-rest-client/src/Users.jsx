import React from "react";

export class Users extends React.Component{
    constructor(){
        super()
        this.state={
            rows:[],
            name:'',
            job: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleJob = this.handleJob.bind(this)
        
        this.handleSave = this.handleSave.bind(this)

        const _url = 'https://reqres.in/api/users'
        fetch(_url+'?page=2')
        .then(response=>response.json())
        .then((response)=>{
            let users = response.data.map(u=>{
                return(
                    <tr key={u.id}>
                        <td>{u.first_name},{u.last_name}</td>
                        <td><img src={u.avatar} /></td>
                    </tr>
                )
            })
            this.setState({ rows: users})    
        })
    }
    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleJob(e){
        this.setState({
            job: e.target.value
        })
    }
    handleSave(e){
        this.refs.name =''
        this.refs.job = ''
        let userObj = {
            id: 1,
            name: 'Test'
        }
        fetch('http://localhost:3010/user/add',{
            method: 'POST',
            body: {
                "id": 22,
                "name" : "Mohsin"
            },
            headers:{ 'Access-Control-Allow-Origin':'localhost',
                    'Content-Type':'application/json'        
            }
        })
        .then(response=>response.json())
        .then(response=>{
            console.log('User Saved ',response)
        }).catch(err=>{
            console.log('Error ',err)
        })
    }
    render(){
        return(
        <div>
            <fieldset>
                <legend>Add User</legend>
                <form>
                    <input type="text" ref='name' onChange={this.handleName} />
                    <input type="text" ref='job' onChange={this.handleJob}/>
                    <button onClick={this.handleSave.bind(this)} >Save User</button>
                </form>
            </fieldset>
            Users
            <table>
                <thead><tr><th>Name</th><th>Avatar</th></tr></thead>
                <tbody>
                    {this.state.rows}
                </tbody>
            </table>
            
        </div>
        )
    }
}