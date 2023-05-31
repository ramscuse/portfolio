import React from 'react';
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom';

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
            </ul>
        </nav>
    );
}

export default Navbar;