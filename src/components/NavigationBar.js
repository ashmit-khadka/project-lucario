import React, { useState, useEffect } from "react";
import { Link } from 'react-router';
import { ReactComponent as IconMenu } from '../assets/icons/noun-menu-1561735.svg';
import { ReactComponent as IconClose } from '../assets/icons/noun-close-659815.svg';
import useScrollSpy from '../hooks/useScrollSpy';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const activeSection = useScrollSpy(['about', 'expertise', 'projects', 'experience', 'education', 'contact']);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const aboutBottom = aboutSection.getBoundingClientRect().bottom;
                console.log(aboutBottom);
                setHasScrolled(aboutBottom <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navigation ${hasScrolled ? 'scrolled' : ''}`}>
                <div className="navigation-dummy" />

                <ul className={`navigation-links ${isOpen ? 'open' : ''}`}>
                    {[
                        { id: 'about', label: 'About me' },
                        { id: 'expertise', label: 'Expertise' },
                        { id: 'experience', label: 'Experience' },
                        { id: 'projects', label: 'Projects' },
                        { id: 'education', label: 'Education' },
                        { id: 'contact', label: 'Contact' }
                    ].map(({ id, label }) => (
                        <li
                            key={id}
                            className={`navigation-link ${activeSection === id ? 'active' : ''}`}
                            onClick={() => scrollToSection(id)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
                <div className="navigation-menu">
                    <button
                        className={`hamburger-menu ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>


                </div>
            </nav>
            {isOpen && (
                <div
                    className="navigation-backdrop"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default NavigationBar;