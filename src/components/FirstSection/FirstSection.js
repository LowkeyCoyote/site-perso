import React, {useState, useEffect} from 'react'
import styles from './FirstSection.module.css'
import { Element } from 'react-scroll'

export default function FirstSection(props) {

  const [fadeInElementVisible, setFadeInElementVisible] = useState(false);

  useEffect(() => {
    setFadeInElementVisible(true)
  },[])

  return (
    <Element name="fadeInElement" className={`${styles.fadeInElement} ${fadeInElementVisible ? `${styles.active} ${styles.firstSectionContainer}` : styles.firstSectionContainer}`}>
        <h2>{props.firstSectionTitle}</h2>
        <p>{props.firstSectionContent}</p>
    </Element>
  )
}

