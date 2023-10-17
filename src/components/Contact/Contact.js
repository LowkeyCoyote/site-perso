import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

import { Element } from 'react-scroll';

import Form from '../Form/Form';

import imgContact from '../../assets/images/img-contact.jpeg';
import compassIcon from '../../assets/icons/icon-compass.png';
import mailIcon from '../../assets/icons/icon-mail.png';
import githubIcon from '../../assets/icons/icon-github-blue.png';
import linkedinIcon from '../../assets/icons/icon-linkedin-blue.png';

export default function Contact() {
    const [fadeInElementVisible, setFadeInElementVisible] = useState(false);
    useEffect(() => {
        setFadeInElementVisible(true);
    }, []);

    return (
        <div className={styles.ContactContainer}>
            <Element
                name="fadeInElement"
                className={`${styles.fadeInElementTop} ${
                    fadeInElementVisible
                        ? `${styles.active} ${styles.contactTitle}`
                        : `${styles.contactTitle}`
                }`}
            >
                <h2>Contactez-moi !</h2>
            </Element>

            <div className={styles.contactFlex}>
                <Element
                    name="fadeInElement"
                    className={`${styles.fadeInElementLeft} ${
                        fadeInElementVisible
                            ? `${styles.active} ${styles.contactImg}`
                            : styles.contactImg
                    }`}
                >
                    <img src={imgContact} alt="" />
                </Element>
                <Element
                    name="fadeInElement"
                    className={`${styles.fadeInElementRight} ${
                        fadeInElementVisible
                            ? `${styles.active} ${styles.contactColumn}`
                            : styles.contactColumn
                    }`}
                >
                    <h3>Joska Gyuricza</h3>
                    <div className={styles.localisation}>
                        <img src={compassIcon} alt="localisation" />
                        <p>
                            Localisé à <b>Paris, France</b>
                        </p>
                    </div>
                    <div className={styles.mail}>
                        <img src={mailIcon} alt="localisation" />
                        <p>
                            <b>jgyur.dev@gmail.com</b>
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <img src={githubIcon} alt="" />
                            <a href="https://github.com/LowkeyCoyote">Github</a>
                        </div>
                        <div className={styles.link}>
                            <img src={linkedinIcon} alt="" />
                            <a href="https://www.linkedin.com/in/joska-gyuricza-developpeur-web/">
                                Linkedin
                            </a>
                        </div>
                        <h4>Restons en contact</h4>
                        <p>
                            N'hésitez pas à utiliser le formulaire. <br />{' '}
                            Renseignez votre nom et passez à l'étape suivante
                        </p>
                        <Form />
                    </div>
                </Element>
            </div>
        </div>
    );
}
