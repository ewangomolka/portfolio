import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import screenshot_Python from './screenshot_Python.png';
import pokemorty from './pokemorty.png';
import placeholder from './placeholder.jpeg';


const MainContainer = () => {

    const [projectItems, setProjectItems] = useState([
        {name: "Overwatch Misson App", about: "Solo Project (Python, PostgreSQL, Flask, HTML, CSS)", image: screenshot_Python, 
        link: "https://github.com/ewangomolka/week_05_solo_project"},
        {name: "PokéMortys!", about: "API Lab (JavaScript, React, Node.js, JSX)", image: pokemorty, 
        link: "https://github.com/ewangomolka/week_07_day_05_hw_pokemortys"},
        {name: "TBC", about: "Group Project TBC", image: placeholder, link: "github.repo(TBC)"}
    ])

    const [interests, setInterests] = useState([
        {name: "Skateboarding", image: "https://www.instagram.com/p/9B2adTN48M/?igshid=NTc4MTIwNjQ2YQ=="},
        {name: "Music", image: "https://www.instagram.com/p/CoVMJXIrFKh/?igshid=NTc4MTIwNjQ2YQ=="},
        {name: "Mixology", image: "https://www.instagram.com/p/B8dhl1FFuEA/?igshid=NTc4MTIwNjQ2YQ==/media/?size=l"},
        {name: "Travel", image: ""}
    ])

    const Container = styled.div`
        font-family: Optimo;
    `


    return ( 
        <Container>
        <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/projects" element={<Projects projects={projectItems}/>}/>
        <Route path="/interests" element={<Interests interests={interests}/>}/>
        </Routes>
        <Footer/>
        </Router>
        </Container>
     );
}
 
export default MainContainer;