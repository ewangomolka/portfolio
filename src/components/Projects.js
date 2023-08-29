import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import python from '../container/screenshot_Python.png';
import meme from '../container/Make_Meme_Better.png';
import reelax from '../container/Reelax.png';
import freddy from '../container/Freddy.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Projects.css';


const Projects = () => {

    return ( 
        <div className='project-container'>
            <Swiper className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slide">
                        <img src={python}></img>
                        <div className='content'>
                            <h3>Overwatch Mission App</h3>
                            <i>Python, HTML, CSS, Flask, PostgreSQL</i>
                            <p>
                                This was my first project I completed on the CodeClan course, it was a solo project with the
                                brief of making a bucket list style travel app which I styled over the popular video game
                                Overwatch.
                            </p>
                            <p>
                                We were tasked with using Python and PostgreSQL in building the app and Flask Framework, HTML and CSS to design.
                            </p>
                            <i>MVP</i>
                            <p>
                                the MVP of the brief was to make a fully functioning application to track cities and
                                countries in need of rescue by adding, deleting, editing and sorting different countries and
                                cities.
                            </p>
                            <a href='https://github.com/ewangomolka/week_05_solo_project'>
                                <i>View on GitHub</i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-2">
                        <img src={meme}></img>
                        <div className='content'>
                            <h3>Make Meme Better</h3>
                            <i>JavaScript, React, JSX, CSS, MongoDB</i>
                            <p>
                                This was the second project I completed on the course, it was a group project I completed with my colleagues. 
                                We decided to design the app with a focus on mental health positivity and having comments being only internet memes 
                                and gifs chosen randomly by category.
                            </p>
                            <p>
                                We used JavaScript and MongoDB to build the foundations of the application and JSX with CSS and React Framework to design the front end.
                            </p>
                            <i>MVP</i>
                            <p>
                                The MVP was to create a social media style application allowing a user to create and delete a profile, create, edit and delete a post and 
                                to be able to interact with other users posts from a recognised login.
                            </p>
                            <a href='https://github.com/ewangomolka/Group_Project_Make_Meme_Better'>
                                <i>View on GitHub</i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  className="slide">
                        <img src={reelax}></img>
                        <div className='content'>
                            <h3>Reelax</h3>
                            <i>Java, React, JSX, CSS, PostgreSQL</i>
                            <p>
                                This was the last project I completed during my studies. It was a group project I completed with my colleagues.
                                We used this project to consolidate our learning and used Java and PostgreSQL to build the back end using an API call to the TMDB database and 
                                JavaScript, JSX, CSS and React Framework for the design.
                            </p>
                            <i>MVP</i>
                            <p>
                                The MVP was to create a movie companion app which allowed users to create and delete a profile, add and delete movies to/from a personal watchlist and to create and edit a review of a film which has been allocated to their watchlist. 
                                The application was to also be able to filter movies by Year of Release, Rating, Title and Genre.
                            </p>
                            <a href='https://github.com/Corrine2212/Capstone_Project_Reelax'>
                                <i>View on GitHub</i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-2">
                        <img src={freddy}></img>
                        <div className='content'>
                            <h3>Freddy The Frog Ninja</h3>
                            <i>C#, Unity</i>
                            <p>
                                I have been spending my spare time in between studies and applications to learn about the Unity Game engine and C# to program a game about a frog 
                                who is stealing strawberries from a farm, I have been doing this by following a mix of online tutorials from YouTube and Unity.
                            </p>
                            <i>MVP</i>
                            <p>
                                The MVP is to create a side scrolling platformer in which the player is able to control the titular character, collect items, 
                                navigate through obsticles, traps and platforms, restart upon death and fight NPCs (non playable characters).
                            </p>
                            <a href='https://github.com/ewangomolka/Learning_project_Frog_Ninja'>
                                <i>View Scripts on GitHub</i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
     );
}
 
export default Projects;