import { Table,Container,Col }from "reactstrap";
import React, { Component } from 'react';

export class UTable extends Component{
    render(){
        let users = [
            {
                id: 1,
                name: 'John',
                email: 'joe@email.com'
            },
            {
                id: 1,
                name: 'John',
                email: 'joe@email.com'
            },
            {
                id: 2,
                name: 'John',
                email: 'joe@email.com'
            },
            {
                id: 3,
                name: 'John',
                email: 'joe@email.com'
            }
        ]
        let rows = users.map(u=>{
            return(<tr key={u.id} >
                <th scope='row'>
                    {u.id}
                </th>
                <td>
                    {u.name}
                </td>
                <td>
                    {u.email}
                </td>
            </tr>)
        })
        
        return(
            <Container>
                <Col xl="4">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    #
                                </th>
                                <th scope='col'>
                                    Name
                                </th>
                                <th scope='col'>
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Col>
            </Container>
        )
    }
}
