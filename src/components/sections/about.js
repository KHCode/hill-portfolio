import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCommentAlt, faLaptopCode, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const StyledAboutSection = styled.section`
    font-family: var(--font-sans);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    .about-title {
        font-family: var(--font-cursive);
        color: var(--bright-pink);
    }

    .about-content {
        margin: 0 15rem;
        padding: 2rem;
        background-color: var(--bright-blue);
        color: var(--dark-blue);
        border-radius: 3rem;
    }
`;

const About = () => {
    return (
        <StyledAboutSection>
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                <p>I am a junior full-stack developer. I do most of my browser-based web work with Node and Express on the back-end, and JS/HTML/CSS on the front-end.</p>
                <p>I love working on the back-end building routes and models and working with databases, and although I wouldn't say design is a passion of mine, I do have fun building the UX.</p>
                <p>I also build mobile apps with Flutter.</p>
                <p>Beyond web and mobile development, I have experience working in Python and C, mostly.</p>
                <p>Before getting into programming on the web, I worked in education, visual arts, and history.</p>
                <p>I currently live in Corvallis (go Beavers!) with my partner and daughter, and will soon be working out of Seattle.</p>
                <p>Outside of software development, I love playing and watching basketball, hiking, Minecraft, watching old movies, and teaching myself new tricks.</p>
            </div>
            
        </StyledAboutSection>
    )
}

export default About