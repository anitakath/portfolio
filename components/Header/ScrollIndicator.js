import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Stellen Sie sicher, dass Sie react-scroll installiert haben

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
    <div style={styles.container}>
      {sections.map((section, index) => (
        <Link
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          style={{
            ...styles.box,
            backgroundColor: currentSection === index ? 'var(--font-plum)' : '#ccc', // Aktive Farbe
          }}
        >
           
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: '50%',
    right: '70px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 10000,
  },
  box: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default ScrollIndicator;