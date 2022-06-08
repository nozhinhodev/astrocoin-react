import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import logo from '../assets/blackmodelogo.png'
function Header(props) {
    return (
        <div>

            <div className="logo">
                <img src={logo} alt=""/>
            </div>
        </div>
    );
}

export default Header;