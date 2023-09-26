import React, {useState, useEffect} from 'react';
import {Element} from 'react-scroll';
import styles from './Header.module.css';
import PersoImg from '../../assets/images/Perso.jpeg';

export default function Header(props) {

  const [fadeInElementVisible, setFadeInElementVisible] = useState(false);
  useEffect(() => {
    setFadeInElementVisible(true)
  },[])

  return (

   <div className={styles.headerContainer}>
          <Element name="fadeInElement" className={`${styles.fadeInElementTop} ${fadeInElementVisible ? `${styles.active} ${styles.headerColumn}` : styles.headerColumn}`}>
            <h1>{props.headerTitle}</h1>
            <p>{props.headerContent}</p>
            </Element>
            <Element name="fadeInElement" className={`${styles.fadeInElementRight} ${fadeInElementVisible ? `${styles.active} ${styles.headerImg}` : styles.headerImg}`}>
            <img src={PersoImg} alt="" />
            </Element>
        </div>
  )
}
