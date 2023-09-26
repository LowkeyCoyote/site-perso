import React from 'react'
import styles from './TechCard.module.css'
import reactIcon from '../../assets/icons/icons8-react-50.png'
import nodeIcon from '../../assets/icons/icons8-nodejs-50.png'
import wordpressIcon from "../../assets/icons/icons8-wordpress-50.png"
import githubIcon from "../../assets/icons/icons8-github-50.png"
import IconTech from '../IconTech/IconTech';



export default function TechCard() {

  return (
    <div className={styles.secondSectionCard}>
        <div className={styles.techContent}>
            <p>Ma technologie de prédiléction s'appelle React, une librairie JavaScript très populaire.
                Elle permet de construire des interfaces utilisateurs rapide et intuitives. <br /> <br />
                Je maitrise également NodeJS, qui permet de réaliser des applications côté serveur évolutives. <br /> <br />
                J'ai également de l'expérience sur d'autres technologies telles que, Wordpress, Github, Sass, Bootstrap ...
            </p>
        </div>
        <div className={styles.techIcon}>
           <IconTech
           techImg={reactIcon}
           techText="ReactJS / Librairie Javascript"
           />
           <IconTech
           techImg={nodeIcon}
           techText="NodeJS / Librarie Javascript"
           />
           <IconTech
           techImg={wordpressIcon}
           techText="Wordpress / CMS"
           />
           <IconTech
           techImg={githubIcon}
           techText="Github"
           />
           <IconTech
           techImg={githubIcon}
           techText="Github"
           />

        </div>
    </div>
  )
}
