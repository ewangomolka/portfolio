import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {



    return ( 
        <div className='nav-container'>
            <div>
                <h1 className='title'>Ewan Gomolka</h1>
            </div>
            <ul className='links'>
                <li style={{'--animation-order': 1}}><Link to='/portfolio'>Home</Link></li>
                <li style={{'--animation-order': 2}}><Link to='/experience'>Experience</Link></li>
                <li style={{'--animation-order': 3}}><Link to='/projects'>Projects</Link></li>
                <li style={{'--animation-order': 4}}><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;