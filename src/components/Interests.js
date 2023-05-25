import React from 'react';
import styled from 'styled-components';

const Interests = ({interests}) => {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        background-color: rgb(101, 178, 223);
    `

    const Ul = styled.ul`
        height: 300px;
        width: 200px;
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 0;
        background-color: rgb(101, 178, 223);
    `
    const Image = styled.img`
        height: 200px;
        width: 250px;
        border: 2px solid black;
    `
    const Li = styled.li`
        padding: 20px;
        border: 5px solid black;
        border-radius: 20px;
        background-color: lightgrey;
    `

    const interestList = interests.map((interest, index) => {
        return <Li key={index}><Image src={interest.image}/><p>{interest.name}</p></Li>
    })

    return ( 
        <Container>
        <Ul>
        {interestList}
        </Ul>
        </Container>
     );
}
 
export default Interests;