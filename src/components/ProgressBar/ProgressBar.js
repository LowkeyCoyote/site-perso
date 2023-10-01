import React from 'react'
import styles from './ProgressBar.module.css'


export default function ProgressBar(props) {
  return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
                <div
                className={styles.progressBarFill}
                style={{width: props.progress}}
                ></div>
            </div>
            <div className={styles.progressBarLabel}>
            {props.label}
            </div>
        </div>
  )
}
