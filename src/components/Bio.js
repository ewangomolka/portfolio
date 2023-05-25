import React from 'react';
import styled from 'styled-components';

const Bio = () => {

    const Container = styled.div`
        background-color: rgb(101, 178, 223);
        height: auto;
        margin: 0;
        padding: 50px;
    `

    return ( 
        <Container>
            <h3>About me</h3>
            <p>My name is Ewan Gomolka. i have spent 12 years working in customer service, 10 and a half of those years i had spent in hospitality with 4 of those spent in management positions
                and the rest in car insurance. working in this sector has given me the developed skills to speak confidently with people and manage a team to produce the best service available
                and use my creativity for the benefit of myself and the businesses.</p>
            <p>I am currently sutying in the boot camp style full stack software development course from CodeClan to start my journey in tech and web development and grow my skills and software
                profincency and be a positive and strong addition to the tech industry.
            </p>
            <h3>Hospitality</h3>
            <p>During my career in hospitality i have covered most roles in the business of bars and restuarants, as well as private members clubs and hotels.
                the roles itself include bar backing, bartending, waiting, supervising, managing and coordinating events and weddings. For a certain time i was also taking part in 
                national and global cocktail competitions, competing with world class spirits as well as other incredible bartenders of which i have won and placed in.
                what drew me towards taking part in these competitions was the creative side of taking ingredients and making something that people loved and learining about what makes them unique and
                what certain elements can do what to change the outcome of my creation. After acomplishing so much by the age i had got to i had decided to make a change and see how i could take my skills
                and implement it into another sector.
            </p>
            <h3>Insurance Claims</h3>
            <p>my time spent in Insurance began to really peak my interest in software. When joining the claims team we had so many systems to become familiar with in a fairly short amount of time,
                having my career up to this point with not much time spent with computers i adapted very quickly to this and within 6 months of my joining the company i was selected to join the
                SMEs in a cohort to test and run the new EIS system using AWS. Handling car insurance claims gave me an additional skill of working with clients to bring them a promised product and 
                work with the Agile work method to bring the best possible results to an otherwise stressful situation. it was after working with this system i felt a need to learn more about what the
                developers did and what changes i would make and work on in this line of work.
            </p>
            <h3>CodeClan</h3>
            <p>CodeClan is a private learning institution specialising in software development. they offer courses for learning and improviing your skills in software development.
                The course i am currently partaking in is their 16 week full stack developer course, which teaches the fundamentals and advanced techniques of Python, JavaScript, Java, Flask, React, Node.js,
                HTML, CSS, Github and AMS as well as many more as we progress through. I had found the idea after taking free online courses in C++ and found this way to be more beneficial
                for both myself and any future employer as proof of my adaptability and eagerness to continuously learn. Located in the Projects Tab, you will find my projects and lab works that i
                completed in a showcase of my knowledge and understanding of the languages i have learned over my time at CodeClan.
            </p>
        </Container>
     );
}
 
export default Bio;