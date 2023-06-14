import React from 'react';
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom';
import git from '../imgs/github.png'
import linkin from '../imgs/linkedin.png'

function Navbar() {
    const navigate = useNavigate();

    function home() {
        navigate('/');
    }

    function about () {
        navigate('/About');
    }

    function project() {
        navigate('/Projects');
    }

    return (
        <nav className="navbar">
            <ul>
                <li onClick={home}>Home</li>
                <li onClick={about}>About</li>
                <li onClick={project}>Projects</li>
                <a href='https://github.com/ramscuse' target='_blank' rel="noopener noreferrer"><img id='git' src={git} alt='github'/></a>
                <a href='https://www.linkedin.com/in/jameson-walter-587388184/' target='_blank' rel="noopener noreferrer"><img id='linkedIn' src={linkin} alt='linkedIn'/></a>
            </ul>
        </nav>
    );
}

export default Navbar;