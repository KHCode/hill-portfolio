import React from 'react';
import { Component } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faLaptopCode, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

class HeroCard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.heroHello}>
                    <span className={styles.hello}>hello</span>
                    <span className={styles.exclamation}>!</span>
                </div>
                <h2 className={styles.intro}>
                    <span className={styles.intro1}>my name is </span>
                    <span className={styles.myName}>kris hill</span>
                    <span className={styles.intro2}> and I like to...</span>
                </h2>
                <h3 className={styles.interests}>
                    <span className={styles.likes1}><FontAwesomeIcon icon={faLaptopCode} /><span className={styles.likeTos}>build things</span></span>
                    <span className={styles.likes2}><FontAwesomeIcon icon={faCommentAlt} /><span className={styles.likeTos}>collaborate</span></span>
                    <span className={styles.likes3}><FontAwesomeIcon icon={faPuzzlePiece} /><span className={styles.likeTos}>solve problems</span></span>
                </h3>
            </div>
        )
    }

}

export default HeroCard;