import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <>
        <nav id="nav">
            <ul>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/" exact={true}>
                            <span className="fas fa-power-off" />
                            <span className="tooltiptext">Home</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/gallery">
                            <span className="fas fa-images" />
                            <span className="tooltiptext">Gallery</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/blog">
                            <span className="fas fa-blog" />
                            <span className="tooltiptext">Blog</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/about">
                            <span className="fas fa-address-card" />
                            <span className="tooltiptext">About</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="tooltip">
                        <NavLink activeClassName={"active"} to="/contact">
                            <span className="fas fa-paper-plane" />
                            <span className="tooltiptext">Contact</span>
                        </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    </>
);

export default NavBar;