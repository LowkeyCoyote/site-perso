import React from 'react';
import styles from './Footer.module.css';

import { Link } from 'react-router-dom';

import iconSiteWhite from '../../assets/icons/icon-site-white.png';
import githubIconWhite from '../../assets/icons/icon-github-white.png';
import linkedinIconWhite from '../../assets/icons/icon-linkedin-white.png';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerImg}>
                <div className={styles.footerRow}>
                    <Link to="/">
                        <img src={iconSiteWhite} alt="" />
                    </Link>
                    <div></div>
                </div>
            </div>
            <div className={styles.footerRow}>
                <Link to="/"
                onClick={() => window.scrollTo(0, 0)}
                >Accueil</Link>
                <div className={styles.link}>
                    <a href="https://github.com/LowkeyCoyote">Github</a>
                    <a
                        className={styles.notMargin}
                        href="https://github.com/LowkeyCoyote"
                    >
                        <img src={githubIconWhite} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.footerRow}>
                <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                >Contact</Link>
                <div className={styles.link}>
                    <a href="https://www.linkedin.com/in/joska-gyuricza-developpeur-web/">
                        Linkedin
                    </a>
                    <a
                        className={styles.notMargin}
                        href="https://www.linkedin.com/in/joska-gyuricza-developpeur-web/"
                    >
                        <img src={linkedinIconWhite} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.footerRow}>
            <Link
                to="/portfolio"
                onClick={() => window.scrollTo(0, 0)}
                >Portfolio</Link>
            </div>
        </footer>
    );
}
