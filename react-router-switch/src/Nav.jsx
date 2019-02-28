import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = ()=>{
    return(
        <header>
            <nav>
                <ul>
                <li>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutus'>About us</NavLink>
                </li>
                <li>
                    <NavLink to='/user'>User</NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav