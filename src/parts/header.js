import React, {useState} from 'react';
import './h.scss'
import logoDay from '../assets/blackmodelogo.png'
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom";
import Send from "./send";
import {useNavigate} from "react-router";
function Header(props) {

    return (
        <div>
           <div className="nav">
               <div className="left">

                   <div><img className='logo' src={logoDay} alt=""/></div>
               </div>
               <div className="right">
                   <div className="links">
                       <Link to='/profile' className="link">
                           My profile
                       </Link>
                   </div>
               </div>
           </div>



        </div>
    );
}

export default Header;
