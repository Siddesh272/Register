import React from 'react';
import logo from './g2g-logo.png';
import './style.css'
function Header() {
    return(
        <nav class="navbar">
            <div id="info" className="row col-12 d-flex justify-content-center text-white">
                <img src={logo} />
                <h3>Registration</h3> 
            </div>
        </nav>
    )
}
export default Header;