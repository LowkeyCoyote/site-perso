import React from 'react'
import styles from './Contact.module.css'

import Form from '../Form/Form';

import PersoImg from '../../assets/images/Perso.jpeg';
import CompassIcon from '../../assets/icons/icons8-boussole-50.png'
import MailIcon from '../../assets/icons/icons8-courrier-50.png'
import githubIcon from '../../assets/icons/icons8-github-32.png'
import linkedinIcon from '../../assets/icons/icons8-linkedin-50.png'




export default function Contact() {
  return (
    <div className={styles.ContactContainer} >
        <h2>Contactez moi !</h2>
    
        <div className={styles.contactFlex}>
            <div className={styles.contactImg}>
                <img src={PersoImg} alt="" />
            </div>
            <div className={styles.contactColumn}>
                <h3>Joska Gyuricza</h3>
                <div className={styles.localisation}>
                    <img src={CompassIcon} alt="localisation" />
                    <p>Localisé à   <b>Paris, France</b></p>
                </div>
                <div className={styles.mail}>
                    <img src={MailIcon} alt="localisation" />
                    <p><b>jgyur.dev@gmail.com</b></p>
                </div>
                <div className={styles.links}>
                <div className={styles.link}>
                        <img src={githubIcon} alt="" />
                        <a href="https://github.com/LowkeyCoyote">Github</a>
                    </div>
                    <div className={styles.link}>
                        <img src={linkedinIcon} alt="" />
                        <a href="https://www.linkedin.com/in/joska-gyuricza-developpeur-web/">Linkedin</a>
                    </div>
                    <h4>Restons en contact</h4>
                    <p>N'hésitez pas à utiliser le formulaire. <br /> Renseignez votre nom et passez à l'étape suivante</p>
                  
                    <Form />
                </div>

            </div>
        </div>
      

    </div>
  )
}
