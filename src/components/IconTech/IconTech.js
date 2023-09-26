import React from 'react'
import styles from './IconTech.module.css'

export default function IconTech(props) {
  
  return (
    <div className={styles.iconContainer}>
        <img src={props.techImg} alt="" />
        <p>{props.techText}</p>
    </div>
  )
}
