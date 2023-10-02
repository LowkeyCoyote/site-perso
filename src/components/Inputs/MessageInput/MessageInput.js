import React, { useRef, useEffect } from 'react';
import styles from '../Inputs.module.css';

import ProgressBar from '../../ProgressBar/ProgressBar';

const MessageInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <div className={props.inputClasses}>
                <textarea
                    type="textarea"
                    maxLength={400}
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    onKeyDown={props.onKeyDown}
                    placeholder="Votre message"
                    ref={inputRef}
                />
                <div className={props.arrowClasses}>
                    <img
                        src={props.arrowIcon}
                        alt=""
                        onClick={props.onArrowClick}
                    />
                </div>
            </div>
            {props.validInput ? (
                <p className={styles.invalidTextarea}>
                    Votre message foit faire au moins 5 caractères
                </p>
            ) : (
                <p className={styles.validText}>
                    Votre message foit faire au moins 5 caractères
                </p>
            )}
            <ProgressBar label={'75%'} progress={'80%'} />
        </>
    );
});

export default MessageInput;

