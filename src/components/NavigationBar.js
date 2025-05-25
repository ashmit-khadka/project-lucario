import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';
import { ReactComponent as IconMenu } from '../assets/icons/noun-menu-1561735.svg';
import { ReactComponent as IconClose } from '../assets/icons/noun-close-659815.svg';
import useScrollSpy from '../hooks/useScrollSpy';

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        // Different scroll behavior based on current page
        const handleScroll = () => {
            if (isHomePage) {
                // On home page, check if we've scrolled past the about section
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    const bottom = aboutSection.getBoundingClientRect().bottom;
                    setHasScrolled(bottom <= 0);
                }
            } else {
                // On other pages, check if we've scrolled past 100px
                setHasScrolled(window.scrollY > 100);
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Initial check when component mounts or route changes
        handleScroll();
        
        // Clean up the event listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]); // Re-run when isHomePage changes


    const onNavigate = (link) => {
        setIsOpen(false);
        navigate(link);
    }

    return (
        <>
            <nav className={`navigation ${hasScrolled ? 'scrolled' : ''}`}>
                <div className="navigation-dummy" />

                <ul className={`navigation-links ${isOpen ? 'open' : ''}`}>
                    {[
                        { id: 'portfolio', label: 'Portfolio', link: '/' },
                        { id: 'resume', label: 'Resume', link: '/resume' },
                        { id: 'learn', label: 'Learn', link: '/learn' },
                    ].map(link => (
                        <li
                            key={link.id}
                            className={`navigation-link ${location.pathname === link.link ? 'active' : ''}`}
                            onClick={() => onNavigate(link.link)}
                        >
                            {link.label}
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