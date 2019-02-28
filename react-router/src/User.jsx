import React from "react";
export class User extends React.Component{
    users = [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 4,
            name: 'Williams'
        },
        {
            id: 8,
            name: 'Wilson'
        }
    ]
    render(){
        let user = this.users.find(u=>{
            return u.id == parseInt(this.props.match.params.id)
        })
        return(
            <div>
                <h2>User Component</h2>
                <h3>{user !=undefined? user.id+ ' , '+ user.name:'User Not Found' }</h3>
            </div>
        )
    }
}