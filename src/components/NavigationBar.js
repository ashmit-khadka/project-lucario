import React, { useState } from "react";
import { Link } from 'react-router';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navigation-bar">
            <ul className="navigation-bar-links">
                <li>About me</li>
                <li>Expertise</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Education</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>


        </nav>
    );
};

export default NavigationBar;