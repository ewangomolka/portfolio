import React from 'react';
import styled from 'styled-components';
import {FaArrowsAltV} from 'react-icons/fa';


const Experience = () => {

    const ScrollBox = styled.ul`
        height: 300px;
        width: 300px;
        justify-content: center;
        overflow: auto;
        padding: 10px;
        list-style: none;
        transition: 0.6s ease;
        &:hover{
            border: 5px solid black;
            border-radius: 20px;
            background-color: lightgrey;
            color: black;
        }
    `

    const Container = styled.div`
        display: flex;
        justify-content: center;
        background-color: rgb(101, 178, 223);
    `

    const P = styled.p`
        font-size: 50px;
        padding-top: 75px;
    `

    return (
        <Container>
        <ScrollBox>
            <li><h3>Esure</h3><h4>Customer Claims Specialist</h4><h5>September 2021 - March 2023</h5><p>Skills</p>
                <p>Working alone and as part of a team.</p><p>Liaising with customers under high stress situations.</p>
                <p>Working in a cohort to migrate customer policies to Amazon Web Services and EIS systems.</p>
                <p>Working with suppliers and other teams within the company to improve the customer journey.</p></li>
            <li><h3>Saint Judes (Glasgow)</h3><h4>Duty Manager</h4><h5>May 2019 - September 2021</h5><p>Skills</p>
                <p>Managing a team of up to 10+ staff on weekends.</p><p>Organising and planning personalised event rooms and parties.</p>
                <p>Working alone and as part of a team working both back of house in stock and cash flow and front of house with customers and kitchen and waiting staff.</p>
                <p>Key holder responsibilities: cashing up, opening and closing, ordering stock and ensuring functionality and preperation for over a 3 floor venue.</p></li>
            <li><h3>The Left Bank (Glasgow)</h3><h4>Duty Manager</h4><h5>November 2016 - March 2018</h5><p>Skills</p>
                <p>Managing a team staff.</p><p>Running a successful and very diet friendly restaurant.</p>
                <p>Working alone and as part of a team working both back of house in stock and cash flow and front of house with customers and kitchen and waiting staff.</p>
                <p>Key holder responsibilities: cashing up, opening and closing, and running day to day business flow of the restaurant.</p></li>
        </ScrollBox>
            <P><FaArrowsAltV/></P>
        </Container>
     );
}
 
export default Experience;