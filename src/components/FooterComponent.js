// FooterComponent.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png'; 
import './FooterComponent.css';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p style={{fontSize: '25px', marginLeft: '-290px', marginTop:'90px'}}>info@medecro.ai</p>
            </div>
            <div className="footer-right">
                <div className="footer-links">
                    <p>Company</p>
                    <p style={{marginLeft: '-30px'}}>Vision</p>
                    <p style={{marginLeft: '-14px'}}>Careers</p>
                </div>
                <div className="footer-subscribe">
                    <p style={{fontSize: '22px', marginLeft: '-694px', color:'lightgray',marginTop: '70px' }}>Subscribe for Latest Updates</p>
                    <form>
                        <p style={{marginLeft: '-920px',color:'lightgray' }}>Email *</p>
                        <input style={{marginLeft: '-695px', backgroundColor: 'black', border: '1px solid lightgray', padding: '15px', borderRadius: '5px' , color: 'white'}} type="email"  />
                    </form>
                    <button style={{backgroundColor: 'black', fontSize: '19px', color: 'lightgray'}}type="submit">Subscribe</button>
                </div>
                <div className="footer-social">
                    <p style={{color:'lightgray', fontSize: '22px', marginTop: '74px', marginLeft: '-34px'}}>Connect with Us:</p>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MEDECRO.AI <br/>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
