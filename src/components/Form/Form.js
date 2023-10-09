import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';
import axios from 'axios';

import NameInput from '../Inputs/NameInput/NameInput';
import EmailInput from '../Inputs/EmailInput/EmailInput';
import CompanyInput from '../Inputs/CompanyInput/CompanyInput';
import MessageInput from '../Inputs/MessageInput/MessageInput';

import errorIcon from '../../assets/icons/icon-cross.png';
import arrowIcon from '../../assets/icons/icon-arrow.png';

export default function Form() {

    const [steps, setSteps] = useState(1);
    const [enteredContent, setEnteredContent] = useState({});

    const [inputStates, setInputStates] = useState({
        enteredEmail: '',
        enteredEmailTouched: false,
        enteredName: '',
        enteredNameTouched: false,
        enteredCompany: '',
        enteredCompanyTouched: false,
        enteredMessage: '',
        enteredMessageTouched: false,
      });
     
      const regexInput = {
        name : /^[a-zA-ZÀ-ÿ\s'-]+$/,
        company : /^[A-Za-z0-9. -]+$/,
        email : /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
      }

    const enteredNameIsValid = regexInput.name.test(inputStates.enteredName);
    const inputNameIsInvalid = !enteredNameIsValid && inputStates.enteredNameTouched;

    const enteredCompanyIsValid = regexInput.company.test(inputStates.enteredCompany);
    const inputCompanyIsInvalid = !enteredCompanyIsValid && inputStates.enteredCompanyTouched;

    const enteredEmailIsValid = regexInput.email.test(inputStates.enteredEmail);
    const inputEmailIsInvalid = !enteredEmailIsValid && inputStates.enteredEmailTouched;

    const enteredMessageIsValid = inputStates.enteredMessage.length >= 10;
    const inputMessageIsInvalid = !enteredMessageIsValid && inputStates.enteredMessageTouched;
        
    useEffect(() => {
        if (steps === 5 && Object.keys(enteredContent).length === 4) {
            axios
                .post('https://gzefltel0a.execute-api.eu-west-3.amazonaws.com/app/form', enteredContent)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
    }, [enteredContent, steps]);
    

    const handleInputChange = (name, value) => {
        setInputStates((prevInputStates) => ({
          ...prevInputStates,
          [name]: value,
        }));
      };
    
      const handleInputBlur = (name) => {
        setInputStates((prevInputStates) => ({
          ...prevInputStates,
          [`${name}Touched`]: true,
        }));
      };

    const enteredContentChangeHandler = (element, propertyName) => {
        setEnteredContent((enteredContent) => ({
            ...enteredContent,
            [propertyName]: element,
        }));
    };

    const handleKeydown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleChangeSteps(event);
        }
    };

    const handleChangeSteps = (event) => {
        event.preventDefault();
        setInputStates((prevState) => ({
            ...prevState,
            enteredNameTouched: true, 
          }));
          
        if ((!enteredNameIsValid && steps === 1) ||
            (!enteredEmailIsValid && steps === 2) ||
            (!enteredCompanyIsValid && steps === 3) ||
            (!enteredMessageIsValid && steps === 4))
            {
            return;
            }

        if (enteredNameIsValid && steps === 1) {
            enteredContentChangeHandler(inputStates.enteredName, 'name');
        }
        if (enteredEmailIsValid && steps === 2) {
            enteredContentChangeHandler(inputStates.enteredEmail, 'email');
        }
        if (enteredCompanyIsValid && steps === 3) {
            enteredContentChangeHandler(inputStates.enteredCompany, 'company');
        }
        if (enteredMessageIsValid && steps === 4) {
            enteredContentChangeHandler(inputStates.enteredMessage, 'message');
        }
        setSteps(steps + 1);
    };

    const nameInputClasses =
        steps === 1 && inputNameIsInvalid
            ? styles.inputContainerInvalid
            : styles.inputContainer;
    const emailInputClasses =
        steps === 2 && inputEmailIsInvalid
            ? styles.inputContainerInvalid
            : styles.inputContainer;
    const companyNameClasses =
        steps === 3 && inputCompanyIsInvalid
            ? styles.inputContainerInvalid
            : styles.inputContainer;
    const messageNameClasses =
        steps === 4 && inputMessageIsInvalid
            ? styles.inputContainerInvalid
            : styles.inputContainer;

    return (
        <>
            {steps === 1 && (
                <NameInput
                    inputClasses={nameInputClasses}
                    onBlur={() => handleInputBlur('enteredName')}
                    onChange={(event) => handleInputChange('enteredName', event.target.value)}
                    onKeyDown={handleKeydown}
                    arrowClasses={inputNameIsInvalid ? '' : styles.arrow}
                    arrowIcon={inputNameIsInvalid ? errorIcon : arrowIcon}
                    onArrowClick={handleChangeSteps}
                    validInput={inputNameIsInvalid}
                />
            )}

            {steps === 2 && (
                <EmailInput
                    inputClasses={emailInputClasses}
                    onBlur={() => handleInputBlur('enteredEmail')}
                    onChange={(event) => handleInputChange('enteredEmail', event.target.value)}
                    onKeyDown={handleKeydown}
                    arrowClasses={inputEmailIsInvalid ? '' : styles.arrow}
                    arrowIcon={inputEmailIsInvalid ? errorIcon : arrowIcon}
                    onArrowClick={handleChangeSteps}
                    validInput={inputEmailIsInvalid}
                />
            )}

            {steps === 3 && (
                <CompanyInput
                    inputClasses={companyNameClasses}
                    onBlur={() => handleInputBlur('enteredCompany')}
                    onChange={(event) => handleInputChange('enteredCompany', event.target.value)}
                    onKeyDown={handleKeydown}
                    arrowClasses={inputEmailIsInvalid ? '' : styles.arrow}
                    arrowIcon={inputCompanyIsInvalid ? errorIcon : arrowIcon}
                    onArrowClick={handleChangeSteps}
                    validInput={inputCompanyIsInvalid}
                />
            )}

            {steps === 4 && (
                <MessageInput
                    inputClasses={messageNameClasses}
                    onBlur={() => handleInputBlur('enteredMessage')}
                    onChange={(event) => handleInputChange('enteredMessage', event.target.value)}
                    arrowClasses={inputMessageIsInvalid ? '' : styles.arrow}
                    arrowIcon={inputMessageIsInvalid ? errorIcon : arrowIcon}
                    onArrowClick={handleChangeSteps}
                    validInput={inputMessageIsInvalid}
                />
            )}
            {steps === 5 && (
                <div className={styles.success}>
                    <p className={styles.successText}>
                        Votre message a bien été envoyé !
                    </p>
                </div>
            )}
        </>
    );
}
