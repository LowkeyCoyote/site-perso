import React from 'react';
import styles from './TechCard.module.css';

import IconTech from '../IconTech/IconTech';

import reactIcon from '../../assets/icons/icon-react.png';
import nodeIcon from '../../assets/icons/icon-node.png';
import wordpressIcon from '../../assets/icons/icon-wordpress.png';
import githubIcon from '../../assets/icons/icon-github-black.png';
import bootstrapIcon from '../../assets/icons/icon-bootstrap.png';

export default function TechCard() {

    const iconTechData = [
        {img: reactIcon, text: 'ReactJS / Librairie Javascript'},
        {img: nodeIcon, text: 'NodeJS'},
        {img: githubIcon, text: 'Git / Github'},
        {img: wordpressIcon, text: 'Wordpress / CMS'},
        {img: bootstrapIcon, text: 'Bootstrap'}
    ]

    return (
        <div className={styles.secondSectionCard}>
            <div className={styles.techContent}>
                <p>
                    Ma technologie de prédilection s'appelle React, une
                    librairie JavaScript très populaire. Elle permet de
                    construire des interfaces utilisateurs rapides et intuitives.{' '}
                    <br /> <br />
                    Je maitrise également NodeJS, qui permet de réaliser des
                    applications côté serveur évolutives. <br /> <br />
                    J'ai également de l'expérience sur d'autres technologies
                    telles que, Wordpress, Github, Bootstrap ...
                </p>
            </div>
            <div className={styles.techIcon}>
                {iconTechData.map((tech, index) => (
                    <IconTech key={index} techImg={tech.img} techText={tech.text} />
                ))}
            </div>
        </div>
    );
}
