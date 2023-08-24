import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {



    return ( 
        <div className='contact-list'>
            <ul className='contact-items'>
                <li style={{'--animation-order': 1}}>
                    <a><FontAwesomeIcon icon={faLinkedin}/></a>
                    <p>LinkedIn</p>
                    <a href='https://www.linkedin.com/in/ewan-gomolka-35420b277/' className='description'>
                        <i>linkedin.com/in/ewan-gomolka-35420b277/</i>
                    </a>
                </li>
                <li style={{'--animation-order': 2}}>
                    <a><FontAwesomeIcon icon={faGithubSquare}/></a>
                    <p>GitHub</p>
                    <a href='https://github.com/ewangomolka' className='description'>
                        <i>github.com/ewangomolka</i>
                    </a>
                </li>
                <li style={{'--animation-order': 3}}>
                    <a><FontAwesomeIcon icon={faEnvelope}/></a>
                    <p>Email</p>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ewangomolka@gmail.com' className='description'>
                        <i>ewangomolka@gmail.com</i>
                    </a>
                </li>
            </ul>
        </div>
     );
}
 
export default Contact;