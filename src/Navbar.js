import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isMobile, setMobile] = useState(false);
  return (
  <>
     <nav className='navbar'>
        <h3 className='logo'> CODEWEEB</h3>
        <ul className={isMobile? "nav-links-mobile" : "nav-links"}
        onClick= {() => setMobile(false)}>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/Jobs" className="jobs">
                <li>Jobs</li>
            </Link>
            <Link to="/About" className="about">
                <li>About</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={() => setMobile(!isMobile)}>
            {isMobile? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
        </button>
         
     </nav>

    </>
  )
}
