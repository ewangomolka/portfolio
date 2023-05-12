import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../components/Header';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Interests from '../components/Interests';


const MainContainer = () => {

    const [projectItems, setProjectItems] = useState([
        {name: "Solo Project (Python, PostgreSQL, Flask, HTML, CSS)", image: "screenshot", 
        link: "https://github.com/ewangomolka/week_05_solo_project"},
        {name: "PokéMortys! (API Lab (JavaScript, React, Node.js, JSX))", image: "screenshot", 
        link: "https://github.com/ewangomolka/week_07_day_05_hw_pokemortys"},
        {name: "Group Project TBC", image: "TBC", link: "github.repo(TBC)"}
    ])

    const [interests, setInterests] = useState([
        {name: "Skateboarding", image: "https://www.instagram.com/p/9B2adTN48M/?igshid=NTc4MTIwNjQ2YQ=="},
        {name: "Music", image: "https://www.instagram.com/p/CoVMJXIrFKh/?igshid=NTc4MTIwNjQ2YQ=="},
        {name: "Mixology", image: "https://www.instagram.com/p/B8dhl1FFuEA/?igshid=NTc4MTIwNjQ2YQ=="},
        {name: "Travel", image: ""}
    ])



    return ( 
        <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/projects" element={<Projects projects={projectItems}/>}/>
        <Route path="/interests" element={<Interests interests={interests}/>}/>
        </Routes>
        </Router>
     );
}
 
export default MainContainer;