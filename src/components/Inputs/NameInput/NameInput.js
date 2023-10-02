import React from 'react';
import styles from '../Inputs.module.css';

import ProgressBar from '../../ProgressBar/ProgressBar';

export default function NameInput(props) {
    return (
        <>
            <div className={props.inputClasses}>
                <input
                    type="text"
                    placeholder="Votre nom"
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    onKeyDown={props.onKeyDown}
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
                <p className={styles.invalidText}>Format du nom invalide</p>
            ) : (
                <p className={styles.validText}>Format du nom invalide</p>
            )}
            <ProgressBar
                label={<span style={{ marginLeft: '0.6em' }}>0%</span>}
                progress={'5%'}
            />
        </>
    );
}
