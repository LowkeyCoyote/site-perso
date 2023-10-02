import React from 'react';

import Header from '../components/Header/Header';
import FirstSection from '../components/FirstSection/FirstSection';
import SecondSection from '../components/SecondSection/SecondSection';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header
                headerTitle="Bonjour ! Je suis Joska"
                headerContent="Développeur passioné prêt à donner vie à vos idées. 
            Je vous aiderai à concrétiser vos projets d'applications ou de sites web."
            />

            <FirstSection
                firstSectionTitle="En quoi puis-je vous aider ?"
                firstSectionContent="Que ce soit la création d'un site web personnel, d'une boutique en ligne ou d'une application web, je suis prêt à concrétiser votre vision"
            />

            <SecondSection secondSectionTitle="Mes compétences techniques" />

            <Contact />

            <Footer />
        </>
    );
}
