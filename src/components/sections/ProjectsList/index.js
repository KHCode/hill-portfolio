import React from 'react';
import { Component } from 'react';
import ProjectCard from '../ProjectCard';
import styles from './style.module.css';

class ProjectsList extends Component {
    constructor(){
        super();
    }
    static defaultProps = {
        projects: [
            {
                title: 'Bandon Oregon Guide',
                type: 'Mobile App',
                description: `A tour guide app to help users get to Bandon, OR
                and connect to their local businesses. Collaborated 
                with another developer on a team of two. Built in Flutter
                with SQLite for iOS and Android, you can find it in 
                the Apple and Google Play stores.`,
                link: 'https://github.com/jordan-hamilton/bandon-app'
            },
            {
                title: 'Fantasy Cabinet API',
                type: 'REST API',
                description: `A RESTful API that lets users log in and build
                “fantasy” Presidential cabinets much like sport fans 
                build “fantasy” sports teams. Built with Node/Express,
                running authentication through Auth0, deployed on Google
                App Engine and connected to a Datastore database. 
                Currently working on error handling and documentation.`,
                link: 'https://github.com/KHCode/hillkri_project'
            },
            {
                title: 'Johnson Lab @ OSU Website',
                type: 'Web App',
                description: `Wrote and maintained a consumer facing site for 
                the Colin Johnson Lab in the Biophysics/ Biochemistry 
                Department at Oregon State University. Built with 
                Node/Express and Embedded JS templating, and deployed 
                on Heroku. Currently adding PostgreSQL DB and admin 
                CMS functionality.`,
                link: 'https://github.com/KHCode/johnson-lab'
            }
        ]
    }
    render(){
        return (
            <div className={styles.container}>
                <h1 className={styles.projectsTitle}>Projects</h1>
                <div className={styles.projectsLeadRow}>
                    {this.props.projects.map((project, index) => {
                        return <ProjectCard 
                            key={index}
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            projectLink={project.projectLink}
                        />
                    })}
                </div>
            </div>
        );
    }
};

export default ProjectsList;