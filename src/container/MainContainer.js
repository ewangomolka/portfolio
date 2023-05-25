import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import Experience from '../components/Experience';
import screenshot_Python from './screenshot_Python.png';
import pokemorty from './pokemorty.png';
import placeholder from './placeholder.jpeg';
import skate from './skate.jpeg';
import sleep from './sleep.jpeg';
import mixology from './mixology.jpeg';
import travel from './travel.jpg';
import headshot from '../components/headshot.jpg';
import Make_Meme_Better from '../components/Make_Meme_Better.png';


const MainContainer = () => {

    const [projectItems, setProjectItems] = useState([
        {name: "Overwatch Misson App", about: "Solo Project (Python, PostgreSQL, Flask, HTML, CSS)", image: screenshot_Python, 
        link: "https://github.com/ewangomolka/week_05_solo_project"},
        {name: "PokéMortys!", about: "API Lab (JavaScript, React, Node.js, JSX)", image: pokemorty, 
        link: "https://github.com/ewangomolka/week_07_day_05_hw_pokemortys"},
        {name: "Make Meme Better", about: "Group Project (JavaScript, Mongodb, React, HTML, CSS)", image: Make_Meme_Better, 
        link: "https://github.com/ewangomolka/Group_Project_Make_Meme_Better"}
    ])

    const [interests, setInterests] = useState([
        {name: "Skateboarding", image: skate},
        {name: "Music", image: sleep},
        {name: "Mixology", image: mixology},
        {name: "Travel", image: travel}
    ])

    

    const Container = styled.div`
        font-family: Optimo;
        height: auto;
        margin: 0;
        background-color: rgb(101, 178, 223);
    `
    


    return ( 
        <Container>
        <Router>
        <Header/>
        <Routes>
        <Route path="/G36_deploy_portfolio" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/projects" element={<Projects projects={projectItems}/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/interests" element={<Interests interests={interests}/>}/>
        </Routes>
        <Footer/>
        </Router>
        </Container>
     );
}
 
export default MainContainer;