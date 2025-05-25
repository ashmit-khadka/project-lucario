import React, { useState, useEffect } from "react";

const NavigationHover = ({ sections, showAfterSection = null }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isVisible, setIsVisible] = useState(!showAfterSection); // Visible by default unless showAfterSection is provided
    const navbarHeight = 130; // Height of fixed navbar in pixels

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = document.querySelectorAll(".section");
            let newActiveSection = null;
            let smallestDistance = Number.MAX_VALUE;

            // Check if we should show the navigation based on showAfterSection
            if (showAfterSection) {
                const triggerSection = document.getElementById(showAfterSection);
                if (triggerSection) {
                    const triggerRect = triggerSection.getBoundingClientRect();
                    // Show nav when we've scrolled past the trigger section
                    setIsVisible(triggerRect.bottom <= navbarHeight);
                }
            }

            // Find the section closest to the viewport's top edge (accounting for navbar)
            sectionElements.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distanceFromTop = Math.abs(rect.top - navbarHeight);
                
                // Section is in view if its top is near/below navbar and bottom is in viewport
                const isInView = rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight;
                
                // Find the section that's most visible beneath the navbar
                if (isInView && distanceFromTop < smallestDistance) {
                    smallestDistance = distanceFromTop;
                    newActiveSection = section.id;
                }
            });

            // If no section is in ideal view, find the next section coming into view
            if (!newActiveSection) {
                sectionElements.forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top > 0 && rect.top < window.innerHeight / 2) {
                        if (!newActiveSection || rect.top < document.getElementById(newActiveSection).getBoundingClientRect().top) {
                            newActiveSection = section.id;
                        }
                    }
                });
            }

            setActiveSection(newActiveSection);
        };

        window.addEventListener("scroll", handleScroll);
        
        // Initial check when component mounts
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showAfterSection, navbarHeight]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Adjust scroll position to account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Don't render if not visible
    if (!isVisible) {
        return null;
    }

    return (
        <nav className="floating-nav">
            <ul>
                {sections.map(({ id, label }) => (
                    <li
                        key={id}
                        className={`floating-nav-item ${
                            activeSection === id ? "active" : ""
                        }`}
                        onClick={() => scrollToSection(id)}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationHover;