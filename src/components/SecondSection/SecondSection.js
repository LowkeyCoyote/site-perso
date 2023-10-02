import React from 'react';
import styles from './SecondSection.module.css';
import TechCard from '../TechCard/TechCard';

export default function SecondSection() {
    return (
        <div className={styles.secondSectionContainer}>
            <div className={styles.secondSectionContent}>
                <h2>Mes compétences techniques</h2>
                <TechCard />
            </div>
        </div>
    );
}
