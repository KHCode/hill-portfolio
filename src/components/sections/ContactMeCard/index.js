import React from 'react';
import { Component } from 'react';
import styles from './style.module.css';

class ContactMeCard extends Component {
    constructor() {
        super();
    }
    static defaultProps = {
        caption: `I'm looking for new job opportunities right now,
        and am always looking for new opportunities for building
        awesome software!`,
        email: 'kristopher.hill@gmail.com',
        linkedin: 'https://linkedin.com/in/kristopher-hill',
        twitter: 'https://twitter.com/kidhill',
        medium: 'https://medium.com/@krishill'
    }
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Contact Me!</h1>
                <div className={styles.content}>
                    <p className={styles.caption}>{this.props.caption}</p>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>Email: {this.props.email}</li>
                        <li className={styles.contactItem}>LinkedIn: {this.props.linkedin}</li>
                        <li className={styles.contactItem}>Twitter: {this.props.twitter}</li>
                        <li className={styles.contactItem}>Medium: {this.props.medium}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ContactMeCard;