import React, { useRef, useEffect } from 'react';
import styles from '../Inputs.module.css';

import ProgressBar from '../../ProgressBar/ProgressBar';

const CompanyInput = React.forwardRef((props, ref) => {
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
                    type="text"
                    placeholder="Votre entreprise"
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    onKeyDown={props.onKeyDown}
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
                <p className={styles.invalidText}>
                    Format de l'entreprise invalide
                </p>
            ) : (
                <p className={styles.validText}>
                    Format de l'entreprise invalide
                </p>
            )}

            <ProgressBar label={'50%'} progress={'55%'} />
        </>
    );
});
export default CompanyInput;
