import React, { useState } from "react";

import './appbar.css'
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'
const Appbar = () => {

 
  const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <i className="fas fa-drafting-compass">&nbsp;</i>LOGO
            </div>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
               
                <NavLink
                
                  exact
                  to="/"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                                style={{cursor:'pointer'}}

                  exact
                  to="about" spy={true} smooth={true}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                style={{cursor:'pointer'}}

exact
                  to="hospitals" spy={true} smooth={true}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Hospitals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                style={{cursor:'pointer'}}

exact
                  to="facilities" spy={true} smooth={true}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/register"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/logout"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
};
export default Appbar;
