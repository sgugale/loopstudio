import hamburger from './../images/icon-hamburger.svg'
import logo from './../images/logo.svg'
import './navbar.css';
import { useState } from 'react';

function Navbar(props) {
    const { setShow } = props
    return (
        <div className="navBar">
            <img src={logo} alt="logo" className="logo" />
            <button className="hamburger-button" onClick={() => { setShow(false) }}>
                <img src={hamburger} alt="hamburger" />
            </button>
            <ul className="navbar-links">
                <li href="#">About</li>
                <li href="#">Careers</li>
                <li href="#">Events</li>
                <li href="#">Products</li>
                <li href="#">Support</li>
            </ul>
        </div>
    );
}

export default Navbar;
