import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-default">
            <NavLink className="navbar-brand" to="/">A.</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-link active" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    <NavLink className="nav-link" to="/contact">Let's Talk</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;