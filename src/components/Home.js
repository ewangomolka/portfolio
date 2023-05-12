import React from 'react';
import headshot from "./headshot.jpg";
import styled from "styled-components";


const Home = () => {

    const Image = styled.img`
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: 5px solid black;
        margin-left: 37.5%;
    `

    const Container = styled.div`
        background-color: rgb(101, 178, 223);
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    `

    const Read = styled.div`
        border: 5px solid black;
        padding: 10px;
        margin-left: 25%;
        margin-right: 25%;
        border-radius: 25px;
        background-color: lightgrey;
    `

    return ( 
        <Container>
        <Image src={headshot} alt="image"/>
        <p></p>
        <Read><p>Hello and welcome to my portfolio. My name is Ewan and i am a junior software developer from Glasgow, Scotland.</p>
        <p>Follow the links and socials above to view more about me and my career in tech so far.</p></Read>
        </Container>
     );
}
 
export default Home;
