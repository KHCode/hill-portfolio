import React from 'react';
import { Component } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';

class ProjectCard extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div key={this.props.projectKey} className={styles.item}>
                <h3>{this.props.title}</h3>
                <h5>{this.props.type}</h5>
                <p>{this.props.description}</p>
                <a href="${this.props.projectLink}"><FontAwesomeIcon className={styles.inlineIconLeft} icon={faGithub}/>Look at it on GitHub! <FontAwesomeIcon className={styles.inlineIconRight} icon={faArrowRight}></FontAwesomeIcon></a> 
            </div>
        );
    }
};

export default ProjectCard;