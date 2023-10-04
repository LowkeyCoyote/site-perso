import React from 'react';
import styles from './TechCard.module.css';

import IconTech from '../IconTech/IconTech';

import reactIcon from '../../assets/icons/icon-react.png';
import nodeIcon from '../../assets/icons/icon-node.png';
import wordpressIcon from '../../assets/icons/icon-wordpress.png';
import githubIcon from '../../assets/icons/icon-github-black.png';
import bootstrapIcon from '../../assets/icons/icon-bootstrap.png';

export default function TechCard() {
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
                <IconTech
                    techImg={reactIcon}
                    techText="ReactJS / Librairie Javascript"
                />
                <IconTech techImg={nodeIcon} techText="NodeJS" />
                <IconTech techImg={githubIcon} techText="Git / Github" />
                <IconTech techImg={wordpressIcon} techText="Wordpress / CMS" />
                <IconTech techImg={bootstrapIcon} techText="Bootstrap" />
            </div>
        </div>
    );
}
