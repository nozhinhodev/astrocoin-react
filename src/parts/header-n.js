import React from 'react';
import './header-n.scss'
import moon from "../assets/moon.png";
function HeaderN(props) {
    return (
        <div className="navN">
            <div className="leftN">
                <div className='astrN'>ASTR<img className='logo' src={moon} alt=""/></div>
            </div>
            <div className="rightN">
                <div className="linksN">
                    <div className="linkN">
                        My profile
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderN;