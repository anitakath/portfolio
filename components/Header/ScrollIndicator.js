import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './ScrollIndicator.module.css'; // Importieren des CSS-Moduls

const sections = [
    { id: 'header', label: 'Section 1' },
    { id: 'aboutMe', label: 'Section 2' },
    { id: 'portfolio', label: 'Section 3' },
    { id: 'contact', label: 'Section 4' },
];

const ScrollIndicator = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const sectionHeight = window.innerHeight;
        const newCurrentSection = Math.floor(scrollY / sectionHeight);
        setCurrentSection(newCurrentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            {sections.map((section, index) => (
                <Link
                    key={section.id}
                    to={section.id}
                    smooth={true}
                    duration={500}
                    className={styles.box} // Verwenden der CSS-Klasse
                    style={{ backgroundColor: currentSection === index ? 'var(--font-plum)' : '#ccc' }} // Aktive Farbe bleibt inline
                >
                </Link>
            ))}
        </div>
    );
};

export default ScrollIndicator;