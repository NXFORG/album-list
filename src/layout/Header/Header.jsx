import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/new'>Add Album</NavLink>
        </nav>
    )
}

