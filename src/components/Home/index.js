import { Link } from 'react-router-dom';
import './index.scss'
import React from "react";
import Loader from 'react-loaders'

const Home = () => {
    
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                Hi,
                <br /> 
                I'm Kenny
                <br />
                a computer scientist
                </h1>
                <h2> C++ / Python / JavaScript  </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="line-scale"/>
        </>
    );
}

export default Home