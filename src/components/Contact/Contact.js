import React, {useState, useEffect} from 'react'
import { Element } from 'react-scroll';
import styles from './Contact.module.css'

import Form from '../Form/Form';

import ContactImg from '../../assets/images/img-contact.jpeg'
import CompassIcon from '../../assets/icons/icons8-boussole-50.png'
import MailIcon from '../../assets/icons/icons8-courrier-50.png'
import githubIcon from '../../assets/icons/icons8-github-32.png'
import linkedinIcon from '../../assets/icons/icons8-linkedin-50.png'

export default function Contact() {

    const [fadeInElementVisible, setFadeInElementVisible] = useState(false);
    useEffect(() => {
      setFadeInElementVisible(true)
    },[])


  return (
    <div className={styles.ContactContainer} >
        <Element name="fadeInElement" className={`${styles.fadeInElementTop} ${fadeInElementVisible ? `${styles.active} ${styles.contactTitle}` : `${styles.contactTitle}`}`}>
        <h2>Contactez moi !</h2>
        </Element>
    
        <div className={styles.contactFlex}>
            <Element name="fadeInElement" className={`${styles.fadeInElementLeft} ${fadeInElementVisible ? `${styles.active} ${styles.contactImg}` : styles.contactImg}`}>
                <img src={ContactImg} alt="" />
            </Element>
            <Element name="fadeInElement" className={`${styles.fadeInElementRight} ${fadeInElementVisible ? `${styles.active} ${styles.contactColumn}` : styles.contactColumn}`}>
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

            </Element>
        </div>
    </div>
  )
}
