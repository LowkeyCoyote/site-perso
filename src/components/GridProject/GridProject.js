import React, { useState, useEffect } from 'react';
import styles from './GridProject.module.css';

import { projectsDataArray } from '../../datas/ProjectsData/ProjectsData';

import GridCard from '../GridCard/GridCard';

import { Element } from 'react-scroll';

export default function GridProject() {
    const [fadeInElementVisible, setFadeInElementVisible] = useState(false);
    useEffect(() => {
        setFadeInElementVisible(true);
    }, []);


    return (
        <div className={styles.gridProjectContainer}>
            <Element
                name="fadeInElement"
                className={`${styles.fadeInElementTop} ${
                    fadeInElementVisible
                        ? `${styles.active} ${styles.gridTitle}`
                        : `${styles.gridTitle}`
                }`}
            >
                <h2>Mes projets</h2>
            </Element>
            <div className={styles.gridProject}>
                {projectsDataArray.map((project, index) => (
                    <GridCard
                        projectTitle={project.title}
                        projectImg={project.img}
                        projectDescription={project.description}
                        projectTags={project.tags}
                        liveLink={project.liveLink}
                        gitLink={project.gitLink}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
