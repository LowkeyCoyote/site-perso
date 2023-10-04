import React, { useEffect, useRef } from 'react';
import axios from 'axios';

import { useState } from 'react';
import styles from './Form.module.css';

import NameInput from '../Inputs/NameInput/NameInput';
import EmailInput from '../Inputs/EmailInput/EmailInput';
import CompanyInput from '../Inputs/CompanyInput/CompanyInput';
import MessageInput from '../Inputs/MessageInput/MessageInput';

import errorIcon from '../../assets/icons/icon-cross.png';
import arrowIcon from '../../assets/icons/icon-arrow.png';

export default function Form() {
    const [steps, setSteps] = useState(1);
    const [enteredContent, setEnteredContent] = useState({});

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredCompany, setEnteredCompany] = useState('');
    const [enteredCompanyTouched, setEnteredCompanyTouched] = useState(false);

    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

    const emailInputRef = useRef();

    const regexNomPrenom = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    const regexCompanyName = /^[A-Za-z-' ]+$/;
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const enteredNameIsValid = regexNomPrenom.test(enteredName);
    const inputNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredCompanyIsValid = regexCompanyName.test(enteredCompany);
    const inputCompanyIsInvalid =
        !enteredCompanyIsValid && enteredCompanyTouched;

    const enteredEmailIsValid = regexEmail.test(enteredEmail);
    const inputEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    const enteredMessageIsValid = enteredMessage.length >= 10;
    const inputMessageIsInvalid =
        !enteredMessageIsValid && enteredMessageTouched;

        
    useEffect(() => {
        if (steps === 5 && Object.keys(enteredContent).length === 4) {
            axios
                .post('https://gzefltel0a.execute-api.eu-west-3.amazonaws.com/app/form', enteredContent)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
    }, [enteredContent, steps]);
    

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const companyInputChangeHandler = (event) => {
        setEnteredCompany(event.target.value);
    };

    const companyInputBlurHandler = () => {
        setEnteredCompanyTouched(true);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const messageInputChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    };

    const messageInputBlurHandler = () => {
        setEnteredMessageTouched(true);
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
        setEnteredNameTouched(true);

        if (
            (!enteredNameIsValid && steps === 1) ||
            (!enteredEmailIsValid && steps === 2) ||
            (!enteredCompanyIsValid && steps === 3) ||
            (!enteredMessageIsValid && steps === 4)
        ) {
            return;
        }

        if (enteredNameIsValid && steps === 1) {
            enteredContentChangeHandler(enteredName, 'name');
        }
        if (enteredEmailIsValid && steps === 2) {
            enteredContentChangeHandler(enteredEmail, 'email');
        }
        if (enteredCompanyIsValid && steps === 3) {
            enteredContentChangeHandler(enteredCompany, 'company');
        }
        if (enteredMessageIsValid && steps === 4) {
            enteredContentChangeHandler(enteredMessage, 'message');
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
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputChangeHandler}
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
                    onBlur={emailInputBlurHandler}
                    onChange={emailInputChangeHandler}
                    onKeyDown={handleKeydown}
                    arrowClasses={inputEmailIsInvalid ? '' : styles.arrow}
                    arrowIcon={inputEmailIsInvalid ? errorIcon : arrowIcon}
                    onArrowClick={handleChangeSteps}
                    validInput={inputEmailIsInvalid}
                    ref={emailInputRef}
                />
            )}

            {steps === 3 && (
                <CompanyInput
                    inputClasses={companyNameClasses}
                    onBlur={companyInputBlurHandler}
                    onChange={companyInputChangeHandler}
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
                    onBlur={messageInputBlurHandler}
                    onChange={messageInputChangeHandler}
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
