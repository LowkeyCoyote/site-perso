import React from 'react'
import styles from '../Inputs.module.css'

export default function CompanyInput(props) {

  return (
    <>
    <div className={props.inputClasses}>
    <input 
    type="text" 
    placeholder='Votre entreprise'
    onBlur={props.onBlur}
    onChange={props.onChange}
    />
    <div className={props.arrowClasses}>
        <img src={props.arrowIcon} alt="" onClick={props.onArrowClick} />
    </div>
</div>
{props.validInput ? <p className={styles.invalidText}>Format de l'entreprise invalide</p> : 
        <p className={styles.validText}>Format de l'entreprise invalide</p>}

</>
  )
}
