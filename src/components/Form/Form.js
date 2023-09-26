import React from 'react'
import { useState } from 'react';
import styles from './Form.module.css'

import arrowIcon from '../../assets/icons/icons8-arrow-24.png'

export default function Form() {

    const [steps, setSteps] = useState(1);
    const [enteredContent, setEnteredContent] = useState({})

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    const [enteredCompany, setEnteredCompany] = useState('')
    const [enteredCompanyTouched, setEnteredCompanyTouched] = useState(false)

    const [enteredMessage, setEnteredMessage] = useState('')
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false)

    const regexNomPrenom = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    const regexCompanyName = /^[A-Za-z-' ]+$/;
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    const enteredNameIsValid = regexNomPrenom.test(enteredName)
    const inputNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredCompanyIsValid = regexCompanyName.test(enteredCompany)
    const inputCompanyIsInvalid = !enteredCompanyIsValid && enteredCompanyTouched;

    const enteredEmailIsValid = regexEmail.test(enteredEmail)
    const inputEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched
    

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
   
    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
    }

    const companyInputChangeHandler = (event) => {
        setEnteredCompany(event.target.value);
    }

    const companyInputBlurHandler = () => {
        setEnteredCompanyTouched(true)
    }

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value)
    }

    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true)
    }

    const massageInputChangeHandler = (event) => {
        setEnteredMessage(event.target.value)
    }

    const messageInputBlurHandler = () => {
        setEnteredMessageTouched(true)
    }



    const enteredContentChangeHandler = (element) => {
        console.log(element)
        if(steps === 1){
            setEnteredContent(enteredContent => ({
                ...enteredContent, name : element
            }))
        }
        if(steps === 2){
            setEnteredContent(enteredContent => ({
                ...enteredContent, company : element
            }))
        }
        if(steps === 3){
            setEnteredContent(enteredContent => ({
                ...enteredContent, email : element
            }))
        }

        if(steps === 4){
            setEnteredContent(enteredContent => ({
                ...enteredContent, message : element
            }))
        }
    }

    const handleChangeSteps = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if((!enteredNameIsValid && steps === 1) || (!enteredEmailIsValid && steps === 2) || (!enteredCompanyIsValid && steps === 3) ||(!enteredMessageTouched && steps === 4)){
            return;
        }

        if(enteredNameIsValid && steps === 1){enteredContentChangeHandler(enteredName)}
        if(enteredEmailIsValid && steps === 2){enteredContentChangeHandler(enteredEmail)}
        if(enteredCompanyIsValid && steps === 3){enteredContentChangeHandler(enteredCompany)}
        if(enteredMessageTouched && steps === 4){enteredContentChangeHandler(enteredMessage)}

        setSteps(steps + 1)
        console.log(enteredContent)
    }

    const nameInputClasses = steps === 1 && inputNameIsInvalid ? styles.inputContainerInvalid : styles.inputContainer
    const emailInputClasses = steps === 2 && inputEmailIsInvalid ? styles.inputContainerInvalid : styles.inputContainer
    const companyNameClasses = steps === 3 && inputCompanyIsInvalid ? styles.inputContainerInvalid : styles.inputContainer
    const messageNameClasses = steps === 4 && enteredMessageTouched ? styles.inputContainerInvalid : styles.inputContainer


  return (
    <>
        {steps === 1 && 
        <div className={nameInputClasses}>
            <input 
            type="text" 
            placeholder='Votre nom'
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangeHandler}
            />
            <div className={styles.arrow}>
                <img src={arrowIcon} alt="" onClick={handleChangeSteps} />
            </div>
        </div>
        }
        {steps === 2 && 
           <div className={emailInputClasses}>
           <input 
           type="email" 
           placeholder='Votre email'

           onBlur={emailInputBlurHandler}
           onChange={emailInputChangeHandler}
           />
           <div className={styles.arrow}>
               <img src={arrowIcon} alt="" onClick={handleChangeSteps} />
           </div>
       </div>
        }
         {steps === 3 && 
           <div className={companyNameClasses}>
           <input 
           type="text" 
           placeholder='Votre entreprise'

           onBlur={companyInputBlurHandler}
           onChange={companyInputChangeHandler}
           />
           <div className={styles.arrow}>
               <img src={arrowIcon} alt="" onClick={handleChangeSteps} />
           </div>
       </div>
        }

        {steps === 4 && 
                <div className={messageNameClasses}>
                <textarea 
                type="textarea" 
                defaultValue='Votre message'
                maxLength={400}
                onBlur={messageInputBlurHandler}
                onChange={massageInputChangeHandler}
                />
                <div className={styles.arrow}>
                    <img src={arrowIcon} alt="" onClick={handleChangeSteps} />
                </div>
            </div>
                }
                {steps === 5 && <p>Merci !</p>}
    </>
  )
}
