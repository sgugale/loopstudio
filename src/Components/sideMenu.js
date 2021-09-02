import close from './../images/icon-close.svg'
import logo from './../images/logo.svg'
import './sideMenu.css';
import { useState } from 'react';

function SideMenu(props) {
    const { setShow } = props
    return (
        <div className="drawer">
            <img src={logo} alt="logo" className="sidemenu-logo" />
            <button className="close-button" onClick={() => { setShow(true) }}>
                <img src={close} alt="close" />
            </button>
            <ul className="sidemenu-links">
                <li href="#">About</li>
                <li href="#">Careers</li>
                <li href="#">Events</li>
                <li href="#">Products</li>
                <li href="#">Support</li>
            </ul>
           
        </div>
    );
}

export default SideMenu;
