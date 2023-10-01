import React, { useEffect, useRef } from 'react'
import styles from '../Inputs.module.css'

import ProgressBar from '../../ProgressBar/ProgressBar'

const EmailInput = React.forwardRef((props, ref) => {

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
 

  return (
    <>
     <div className={props.inputClasses}>
    <input 
    type="email" 
    placeholder='Votre email'
    onBlur={props.onBlur}
    onChange={props.onChange}
    onKeyDown={props.onKeyDown}
    ref={(node) => {
      inputRef.current = node;
      if (ref) {
        ref.current = node;
      }
    }}
    />
    <div className={props.arrowClasses}>
        <img src={props.arrowIcon} alt="" onClick={props.onArrowClick} />
    </div>
</div>
{props.validInput ? <p className={styles.invalidText}>Format de l'adresse mail invalide</p> : 
        <p className={styles.validText}>Format de l'adresse mail invalide</p>}
             <ProgressBar
          label={"25%"}
          progress={"25%"}
       />
</>
  )
})

export default EmailInput;