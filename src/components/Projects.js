import React from 'react';

const Projects = ({projects}) => {

    const projectList = projects.map((project, index) => {
        return <li key={index}><p>{project.name}</p><p>{project.link}</p></li>
    })

    return ( 
        <>
        {projectList}
        </>
     );
}
 
export default Projects;