import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <>
        <nav id="nav">
            <ul>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/" exact={true}>
                            <span className="icon fa-power-off" />
                            <span className="tooltiptext">Home</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/gallery">
                            <span className="icon fa-image" />
                            <span className="tooltiptext">Gallery</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/blog">
                            <span className="icon fa-file-text-o" />
                            <span className="tooltiptext">Blog</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/about">
                            <span className="icon fa-male" />
                            <span className="tooltiptext">About</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/contact">
                            <span className="icon fa-send-o" />
                            <span className="tooltiptext">Contact</span>
                        </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    </>
);

export default NavBar;