import React from 'react';
import styled from 'styled-components';

const Projects = ({projects}) => {

    const List = styled.div`
        list-style: none;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-between;
        padding: 50px;
    `
    const Li = styled.li`
        padding: 40px;
        background-color: lightgrey;
        border-radius: 25px;
        border: 10px solid black;
    `

    const Image = styled.img`
        height: 40%;
        width: 50%;
        border: 5px solid black;
        transition: .3s ease;
        &:hover{
            transform: scale(1.3);
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            cursor: pointer;
        }
    `
    const Container = styled.div`
        background-color: rgb(101, 178, 223);
    `
    const Intro = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
        border: 5px solid black;
        margin-left: 25%;
        margin-right: 25%;
        border-radius: 20px;
        background-color: lightgrey;
    `

    const projectList = projects.map((project, index) => {
        return <Li key={index}><a href={project.link}/><Image src={project.image}/><h4>{project.name}</h4><p>{project.about}</p></Li>
    })


    return ( 
        <Container>
            <Intro><a>Positioned below are a list of projects that i have worked on during my time studying at CodeClan.</a>
            <a>Completed solo and as part of a group, you can see more information on Git-Hub by following the links in the images.</a></Intro>
            <List>
                {projectList}
            </List>
        </Container>
     );
}
 
export default Projects;