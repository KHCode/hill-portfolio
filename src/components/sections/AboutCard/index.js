import React from 'react';
import styled from 'styled-components';
import styles from './style.module.css';

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.content}>
                <p>I am a junior full-stack developer. I do most of my browser-based web work with Node and Express on the back-end, and JS/HTML/CSS on the front-end.</p>
                <p>I love working on the back-end building routes and models and working with databases, and I also have fun working on a team to build the UX.</p>
                <p>I also build mobile apps with Flutter.</p>
                <p>Beyond web and mobile development, I have experience working in Python, C, and C++.</p>
                <p>Before getting into programming on the web, I worked in education, visual arts, and history.</p>
                <p>I currently live in Corvallis with my partner and daughter, and will soon be living in Seattle.</p>
                <p>Outside of software development, I love playing and watching basketball, hiking, Minecraft, watching old movies, and teaching myself new tricks.</p>
            </div>
        </div>
    );
}

export default About;