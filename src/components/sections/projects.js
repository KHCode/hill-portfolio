import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledProjectsSection = styled.section`
    font-family: var(--font-sans);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 85vh;

    .projects-title {
        font-family: var(--font-cursive);
        color: var(--bright-pink);
    }

    .projects-lead-row {
        display: flex;
        flex-flow: row wrap;
        margin: 0 15rem;
        justify-content: space-between;

        .item {
            padding: 1.5rem;
            margin: 0.5rem 1rem;
            background-color: var(--bright-blue);
            border-radius: 3rem;
            flex-basis: 45%;

            .inline-icon-left {
                margin: 0 1rem 0 0;
            }

            .inline-icon-right {
                margin: 0 0 0 0.5rem;
            }
        }
    }

`;

const Projects = () => {
    return (
        <StyledProjectsSection>
            <h1 className="projects-title">Projects</h1>
            <div className="projects-lead-row">
                <div className="item">
                    <h3>Bandon Oregon Guide</h3>
                    <h5>Mobile App</h5>
                    <p>A tour guide app to help users get to Bandon, OR
                    and connect to their local businesses. Collaborated 
                    with another developer on a team of two. Built in Flutter
                    with SQLite for iOS and Android, you can find it in 
                    the Apple and Google Play stores.</p>
                    <a href="https://github.com/jordan-hamilton/bandon-app"><FontAwesomeIcon className="inline-icon-left" icon={faGithub}/>Look at it on GitHub! <FontAwesomeIcon className="inline-icon-right" icon={faArrowRight}></FontAwesomeIcon></a> 
                </div>
                <div className="item">
                    <h3>Fantasy Cabinet API</h3>
                    <p>A RESTful API that lets users log in and build
                    “fantasy” Presidential cabinets much like sport fans 
                    build “fantasy” sports teams. Built with Node/Express,
                    running authentication through Auth0, deployed on Google
                    App Engine and connected to a Datastore database. 
                    Currently working on error handling and documentation.</p>
                    <a href="#"><FontAwesomeIcon className="inline-icon-left" icon={faGithub}/>Look at it on GitHub! <FontAwesomeIcon className="inline-icon-right" icon={faArrowRight}></FontAwesomeIcon></a>
                </div>
                <div className="item">
                    <h3>Johnson Lab @ OSU Website</h3>
                    <p>Wrote and maintained a consumer facing site for 
                    the Colin Johnson Lab in the Biophysics/ Biochemistry 
                    Department at Oregon State University. Built with 
                    Node/Express and Embedded JS templating, and deployed 
                    on Heroku. Currently adding PostgreSQL DB and admin 
                    CMS functionality.</p>
                    <a href="https://github.com/KHCode/johnson-lab"><FontAwesomeIcon className="inline-icon-left" icon={faGithub}/>Look at it on GitHub! <FontAwesomeIcon className="inline-icon-right" icon={faArrowRight}></FontAwesomeIcon></a>
                </div>
            </div>
            
        </StyledProjectsSection>
    );
};

export default Projects;