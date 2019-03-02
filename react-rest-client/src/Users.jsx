import React from "react";

export class Users extends React.Component{
    constructor(){
        super()
        this.state={
            rows:[],
            name:'',
            email: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleSave = this.handleSave.bind(this)

        let _url = 'http://localhost:3010/users'
        // in case of sending basic authentication header
        /*fetch(_url,{
            headers:{
                'Authorization': 'Basic YWRtaW46MTIz'
            }
        })*/
        fetch(_url)
        .then(response=>response.json())
        .then((response)=>{
            let users = response.map(u=>{
                return(
                    <tr key={u.id}>
                        <td>{u.name}</td>
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
    async handleSave(e){
        this.refs.name =''

        try{
            let _url = 'http://localhost:3010/user/add'
            const response = await fetch(_url,{
                method: 'POST',
                body: JSON.stringify({
                    id: 1,   
                    name: this.state.name
                }),
                headers: {
                    'content-type': 'application/json'
                      }
                    })
                    return await response.json();
                    } catch (error) {
                    console.error(error);
                    }
    }

    render(){
        return(
        <div>
            <fieldset>
                <legend>Add User</legend>
                <form>
                    <input type="text" ref='name' onChange={this.handleName} />
                    <button onClick={this.handleSave.bind(this)} >Save User</button>
                </form>
            </fieldset>
            Users
            <table>
                <thead><tr><th>Name</th></tr></thead>
                <tbody>
                    {this.state.rows}
                </tbody>
            </table>
            
        </div>
        )
    }
}