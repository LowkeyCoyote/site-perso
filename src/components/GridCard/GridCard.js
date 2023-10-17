import React from 'react';
import styles from './GridCard.module.css';

import githubIcon from '../../assets/icons/icon-github-blue.png';
import webIcon from '../../assets/icons/icon-web.png';

export default function GridCard(props) {
    return (
        <div className={styles.card}>
            <div
                className={styles.projectImgContainer}
                style={{ backgroundImage: `url(${props.projectImg})` }}
            ></div>
            <h3>{props.projectTitle}</h3>
            <p>{props.projectDescription}</p>

            <div className={styles.projectTags}>
                {props.projectTags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <div className={styles.projectLinks}>
                <a href={props.liveLink}>
                    <div className={styles.projectLive}>
                        <img src={webIcon} alt="" />
                        <p>Live</p>
                    </div>
                </a>
                <a href={props.gitLink}>
                    <div className={styles.projectGit}>
                        <img src={githubIcon} alt="" />
                        <p>Github</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
