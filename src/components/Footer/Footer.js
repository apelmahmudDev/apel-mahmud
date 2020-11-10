import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container text-center">
                <p>&copy; All right reserved | {new Date().getFullYear()}</p>
                <p>Created by Apel Mahmud</p>
            </div>
        </footer>
    );
};

export default Footer;