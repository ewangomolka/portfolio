import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Projects from '../components/Projects';


const MainContainer = () => {



    return ( 
        <div>
            <Router>
            <NavBar/>
                <Routes>
                    <Route path='/portfolio' element={<Home/>}/>
                    <Route path='/experience' element={<Experience/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
     );
}
 
export default MainContainer;