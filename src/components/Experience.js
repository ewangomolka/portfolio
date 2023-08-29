import React from 'react';
import './Experience.css'

const Experience = () => {


    return ( 
        <div className='experience-container'>
            <div className='experience-nav'>
                <nav>
                <i style={{'--animation-order': 1}}>Navigation</i>
                    <a style={{'--animation-order': 2}} href="#education">Education</a>
                    <a style={{'--animation-order': 3}} href="#work">Work Experience</a>
                    <a style={{'--animation-order': 4}} href="#skills">Skills</a>
                </nav>
            </div>
            <div className='scroll-container'>
                <div className='scroll-page' id='education'>
                    <h2>Education</h2>
                </div>
                <div className='details'>
                    <h3>CodeClan</h3>
                    <i>Qualification: SCQF level 8</i>
                    <p>
                    I have a SCQF Level 8 qualification in software development from CodeClan. CodeClan is a 16 week accredited bootcamp job ready course which provides a SQA qualification in Full Stack 
                    software development. The course teaches the fundamentals of software development using
                    Agile best practices, TDD and OOP.
                    </p> 
                    <p>
                    Through the course I had over 800 hours of instructor-led and
                    personal programming time. In addition I took part in practical software development projects and paired programming.
                    </p>
                    <p>
                    It was during my studies here that I found a love of front end web development, focusing on the UX and UI elements
                    of the customer journey and capitalising on my previous experience of creativity on client products, from event organisation
                    in hospitality to problem solving in car insurance.
                    </p>
                    <i>Languages</i>
                    <p>
                    JavaScript, Java, Python, HTML, CSS, React.js, Flask, IntelliJ IDEA, 
                    VS Code, Spring, Express, MongoDB, PostgreSQL, GitHub, Cypress</p>
                </div>
                <div className='scroll-page' id='work'>
                    <h2>Work Experience</h2>
                </div>
                <div className='details'>
                    <h3>Insurance</h3>
                    <i>Esure Customer Claims Handler: 2021 - 2023</i>
                    <p>
                    During my time at Esure car insurance as a claims handler, 
                    I was in charge of effectively communicating with clients and suppliers to ensure smooth processes for vehicle repairs, 
                    alternative transportation arrangements, compensation, and complaint resolution.
                    </p>
                    <p>
                    In addition to my core responsibilities, I also gained experience in working with an agile work model, 
                    participating in daily standups to provide updates on ongoing tasks and collaborate with team members.
                    </p>
                    <p>
                    One of my notable achievements at esure was being chosen out of 700 customer claim staff to be a part of the cohort responsible for migrating customer policy and claim information (for Esure UK operations) to AWS (Amazon Web Services). 
                    This project required strong teamwork and coordination to ensure a seamless transition of data to a cloud-based platform.
                    </p>
                    <p>
                    Overall, my time at Esure as a claims handler equipped me with excellent communication skills, problem-solving abilities, 
                    and the ability to work in a dynamic and agile environment.
                    </p>
                </div>
                <div className='details'>
                    <h3>Hospitality</h3>
                    <i>Management: 2016 - 2021</i>
                    <p>
                    In my previous career of hospitality, I spent several years at management level at various venues including,
                    cocktail bars, restaurants, event venues and nightclubs.
                    </p>
                    <p>
                    My primary responsibilities in these roles included premises responsibility (handling keys, opening and closing the venues) stock management (counting, ordering and organising), training of staff,
                    hiring of staff, staff rota organisation, menu creation, cash handling, daily reports to the owners of the business,
                    banking weekly cash takings and ensuring smooth day to day operations of service in front of house and the back
                    of house.
                    </p>
                    <p>
                    The skills I developed from my time in management have proven to be transferable to software development, those being the skills to
                    work as part of a team, lead and effectively communicate with a team, multi-tasking and time management.
                    </p>
                    <p>
                    The venues I was management during 2016 to 2021 were, Bar Soba (Edinburgh and Glasgow venues), The Left Bank and Saint Judes Bar and Kitchen.
                    </p>
                    <i>Front of House: 2011 - 2016</i>
                    <p>
                    Starting out in my career of hospitality, I was a front of house staff member for several venues in several positions, these being
                    bartender, waiter and glass collector.
                    </p>
                    <p>
                    My passion for creativity was noticed by management and I was given more responsibilities such as creating cocktail menus, leading 
                    cocktail masterclasses and contributing to venue media and advertising on instagram, facebook and tiktok.  
                    </p>
                    <p>
                    The skills I developed were the foundations for expanding to management. Those being complaint resolution, working as part of a team, 
                    customer service, communication, memorisation skills and working in a fast paced environment.
                    </p>
                    <p>
                    The venues I was a team member of during 2011 until 2016 were, Moskito, Malmaison hotel, LUAC, The Black Dove, 
                    29 private members club, Bunker and Mora.
                    </p>
                </div>
                <div className='scroll-page' id='skills'>
                    <h2>Skills</h2>
                </div>
                <div className='details'>
                    <p>
                    The skills i have developed throughout my career contribute to me being a beneficial part of any team 
                    working towards a product or goal.
                    </p>
                    <ul className='skill-list'>
                        <li>Working with the public</li>
                        <li>Working alone and as part of a team</li>
                        <li>Supporting a team</li>
                        <li>Complaint resolution</li>
                        <li>Time management</li>
                        <li>Communication</li>
                        <li>Memorisation</li>
                        <li>Multi-tasking</li>
                        <li>Personal development</li>
                        <li>UX and UI design</li>
                    </ul>
                    <h3>Proficient Languages, Databases and Frameworks</h3>
                    <ul className='skill-list'>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React.js</li>
                        <li>Flask</li>
                        <li>Spring</li>
                        <li>GitHub</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>Insomnia</li>
                        <li>Junit/Unit Testing</li>
                        <li>Cypress</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;