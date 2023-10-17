import kasaImg from '../../assets/images/kasa-location.png';
import rockPaperScissorsImg from '../../assets/images/rock-paper-scissors.png';
import portfolioImg from '../../assets/images/portfolio-img.png';

export const projectsDataArray = [
    {
        title: 'Site personnel et portfolio',
        img: portfolioImg,
        description:
            'Développement de mon site personnel et de mon portfolio. Interface responsive et minimaliste.',
        tags: ['React.js', 'Node.js', 'AWS'],
        liveLink: 'https://www.joska-gyuricza.fr/',
        gitLink: 'https://github.com/LowkeyCoyote/site-perso',
    },
    {
        title: 'Pierre-Feuille-Ciseaux ...',
        img: rockPaperScissorsImg,
        description:
            "Développement d'une application basée sur le célèbre jeu. Déployé sur Netilify.",
        tags: ['React.js'],
        liveLink: 'https://rock-paper-scissors-lizard-spock-gyur.netlify.app/',
        gitLink:
            'https://github.com/LowkeyCoyote/rock-paper-scissors-lizard-spock',
    },
    {
        title: 'Kasa Location',
        img: kasaImg,
        description:
            "Développement d'une application de location immobilière. Déployé sur Netilify.",
        tags: ['React.js'],
        liveLink: 'https://kasa-location-gyur.netlify.app/',
        gitLink: 'https://github.com/LowkeyCoyote/kasa',
    },
];
