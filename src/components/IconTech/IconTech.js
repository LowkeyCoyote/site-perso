import React, { useEffect, useRef, useState } from 'react'
import styles from './IconTech.module.css'

export default function IconTech(props) {


  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef(null)

  useEffect(() => {
    const checkVisibility = () => {
      if (iconRef.current) {
        const rect = iconRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight - 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', checkVisibility)
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div
    className={`${styles.iconContainer} ${isVisible ? styles.visible : ''}`}
    ref={iconRef}
    >
        <img src={props.techImg} alt="" />
        <p>{props.techText}</p>
    </div>
  )
}
