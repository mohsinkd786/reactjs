import React from 'react';
import { Switch,Route,NavLink } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import ListUser from "./ListUser";
import "./styles/user.css";

const User = ()=>{

    return(
        <main>
            <nav>
                <ul>
                    <li className='user-menu'>
                        <NavLink to='/user/add' className='nav-link' activeClassName='nav-link-active'>Add User</NavLink>
                    </li>
                    <li className='user-menu'>
                        <NavLink to='/user/edit' className='nav-link' activeClassName='nav-link-active'>Edit User</NavLink>
                    </li>
                    <li className='user-menu'>
                        <NavLink to='/user/list' className='nav-link' activeClassName='nav-link-active'>List User</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/user/add' component={AddUser}/>
                <Route path='/user/edit' component={EditUser}/>
                <Route path='/user/list' component={ListUser}/>
            </Switch> 
        </main> 
    )
}
export default User