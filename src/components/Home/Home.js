import React from 'react';
import './Home.css';
import selfImage from '../../images/apel05.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center home-height">
                <div className="col-md-6">
                    <h1 className="self-name">Apel Mahmud</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae distinctio ab dolorem illum exercitationem et tenetur asperiores, expedita velit assumenda odio enim facere necessitatibus fugit consectetur suscipit dolore natus recusandae!</p>
                    <button className="btn touch-btn active-touch-btn">Touch me</button>
                    <Link to="/about"><button className="btn touch-btn">About me</button></Link>
                </div>
                <div className="col-md-6 text-right">
                    <img src={selfImage} alt="" className="image-fluid w-75"/>
                </div>
            </div>
        </div>
    );
};

export default Home;