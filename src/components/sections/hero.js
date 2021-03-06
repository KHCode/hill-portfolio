import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faLaptopCode, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';


const StyledHeroSection = styled.section`
    font-family: var(--font-sans);
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    min-height: 100vh;

    .hero-hello {
        margin: 0 0 -7rem;
        padding: 0;
        background-color: var(--bright-blue);
        ${'' /* font-size: clamp(var(--fz-heading), 5vw, var(--fz-hero)); */}
        flex: 0.3;
        font-family: var(--font-hero);
        font-size: 360px;
        font-weight: 400;
        color: var(--dark-blue);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
        z-index: 1;
    
        @media (max-width: 480px) {
        margin: 0 0 20px 2px;
        }
    }

    h2 {
        margin: 0;
        padding: 0 10rem;
        font-family: var(--font-sans);
        font-size: var(--fz-heading);
        color: var(--light-blue);
        background-color: var(--dark-blue);
        flex: 0.5;
        text-align: center;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: normal;

        @media (max-width: 480px) {
            padding: 0 3rem;
        }

        @media (max-width: 768px) {

        }

        @media (max-width: 1024px) {

        }

        @media (max-width: 1200px) {

        }

        .my-name {
            font-family: var(--font-cursive);
            font-size: var(--fz-heading);
            color: var(--bright-pink);
            margin: 0 1rem;
            letter-spacing: 0.3rem;
        }
    }

    h3 {
        margin: 0;
        padding: 0 16rem;
        color: var(--light-blue);
        line-height: 0.9;
        flex: 0.2;
        text-align: center;
        z-index: 2;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        background-color: var(--dark-blue);
        .like-tos{
            margin-left: 1rem;
        }
    }

    .mini-bio {
        display: flex;
        justify-content: center;
        z-index: 2;
        flex: 1;
        color: var(--light-blue);
        font-size: var(--fz-heading);
        margin: 1rem 0 5rem;
        p {
            margin: 0;
            padding: 0 2rem;
            max-width: 60%;
            flex: 1;
            text-align: justify;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

`;


const Hero = () => {
    return (
        <StyledHeroSection>
            <div className="hero-hello">hello!</div>
            <h2>my name is <span className="my-name">kris hill</span> and I like to...</h2>
            <h3>
                <span><FontAwesomeIcon icon={faLaptopCode} /><span className="like-tos">build things</span></span>
                <span><FontAwesomeIcon icon={faCommentAlt} /><span className="like-tos">collaborate</span></span>
                <span><FontAwesomeIcon icon={faPuzzlePiece} /><span className="like-tos">solve problems</span></span>
            </h3>
        </StyledHeroSection>
    )
}

export default Hero;