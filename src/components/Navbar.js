// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Create a separate CSS file for Navbar styling
import logo from '../assets/logo.png'; // Adjust the path to your logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src={logo} alt="Logo"/> {/* Use the imported logo */}
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Programs</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
           
            <div className="user-login">
            
            {/* <FaUserCircle size={23} color="red" style={{marginRight: "-14px", marginTop:'-4px'}} /> */}
                {/* <a href="#">Log In</a> */}
            </div>
            <div className="get-started">
                {/* Get Started button */}
                <button>Get In Touch</button>
            </div>
        </nav>
    );
};

export default Navbar;
