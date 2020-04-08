import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <>
        <nav id="nav">
            <ul>
                <li>
                    <NavLink activeClassName={"active"} to="/" exact={true}><span className="icon fa-power-off" /></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={"active"} to="/gallery"><span className="icon fa-image" /></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={"active"} to="/blog"><span  className="icon fa-file-text-o" /></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={"active"} to="/about"><span className="icon fa-male" /></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={"active"} to="/contact"><span className="icon fa-send-o" /></NavLink>
                </li>
            </ul>
        </nav>
    </>
);

export default NavBar;