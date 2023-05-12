import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const MainContainer = () => {

    const [projectItems, setProjectItems] = useState([
        {name: "Solo Project (Python, PostgreSQL, Flask, HTML, CSS)", image: "", link: "github.repo"},
        {name: "PokéMortys! (API Lab (JavaScript, React, Node.js, JSX))", image: "", link: "github.repo"},
        {name: "Group Project TBC", image: "TBC", link: "github.repo(TBC)"}
    ])

    const [interests, setInterests] = useState([
        {name: "Skateboarding", image: ""},
        {name: "Music", image: ""},
        {name: "Gaming", image: ""},
        {name: "Mixology", image: ""}
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