import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const Foot = styled.div`
        background-color: rgb(101, 178, 223);
        padding: 60px;
    `

    return ( 
        <Foot>
            <h4>Contact: 07545329211</h4>
            <h4>Email: ewangomolka@gmail.com</h4>
        </Foot>
     );
}
 
export default Footer;