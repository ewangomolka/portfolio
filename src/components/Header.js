import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FaLinkedin, FaGithub, FaYoutube, FaGoogle} from "react-icons/fa"

const Header = () => {

    const Links = styled.div`
        display: flex;
        justify-content: end;
        justify-content: space-around;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 50px;
        list-style: none;
    `
    const Socials = styled.a`
        align-content: center;
        color: black;
        padding: 15px;
        border-radius: 0px;
        transition: .3s ease;
        &:hover{
            color: white;
            cursor: pointer;
        }
    `
    const Container = styled.div`
        background-color: rgb(101, 178, 223);
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `
    const A = styled.a`
        color: black;
        padding: 5px;
        text-decoration: none;
        transition: .3s ease;
        &:hover{
            color: white;
        }
    `

    return ( 
        <Container>
        <h1>Ewan Gomolka</h1>
        <h2><Socials href="https://www.linkedin.com/in/ewan-gomolka-35420b277/"><FaLinkedin/></Socials>
        <Socials href="https://github.com/ewangomolka"><FaGithub/></Socials>
        <Socials><FaYoutube/></Socials></h2>
        <Links>
        <li><Link to="/"><A>Home</A></Link></li>
        <li><Link to="/bio"><A>Bio</A></Link></li>
        <li><Link to="/projects"><A>Projects</A></Link></li>
        <li><Link to="/experience"><A>Experience</A></Link></li>
        <li><Link to="/interests"><A>Interests</A></Link></li>
        </Links>
        </Container>
     );
}
 
export default Header;