import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area mt-5">
            <div className="container">
                <p>&copy; All rights reserved | {new Date().getFullYear()}</p>
                <p>Created by Apel Mahmud</p>
            </div>
        </div>
    );
};

export default Footer;