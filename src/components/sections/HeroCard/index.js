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
                <div className={styles.heroHello}>hello!</div>
                <h2>my name is <span className={styles.myName}>kris hill</span> and I like to...</h2>
                <h3>
                    <span><FontAwesomeIcon icon={faLaptopCode} /><span className={styles.likeTos}>build things</span></span>
                    <span><FontAwesomeIcon icon={faCommentAlt} /><span className={styles.likeTos}>collaborate</span></span>
                    <span><FontAwesomeIcon icon={faPuzzlePiece} /><span className={styles.likeTos}>solve problems</span></span>
                </h3>
            </div>
        )
    }

}

export default HeroCard;