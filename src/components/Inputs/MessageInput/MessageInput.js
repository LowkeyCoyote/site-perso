import React from 'react'
import styles from '../Inputs.module.css'

export default function MessageInput(props) {
  return (
    <>
    <div className={props.inputClasses}>
    <textarea 
    type="textarea" 
    maxLength={400}
    onBlur={props.onBlur}
    onChange={props.onChange}
    placeholder='Votre message'
    />
    <div className={props.arrowClasses}>
        <img src={props.arrowIcon} alt="" onClick={props.onArrowClick} />
    </div>
</div>
{props.validInput ? <p className={styles.invalidText}>Votre message foit faire au moins 5 caractères</p> : 
        <p className={styles.validText}>Votre message foit faire au moins 5 caractères</p>}</>
  )
}
