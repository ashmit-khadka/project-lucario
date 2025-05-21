import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import formatText from '../../utils/formatText';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Section = ({ title, id, children }) => (
    <section id={id} className="learning-section">
        <h2 className="learning-section-header">{formatText(title)}</h2>
        {children}
    </section>
);

const SectionCode = ({ code, language = 'javascript' }) => (
    <SyntaxHighlighter language={language} style={synthwave84}>
        {code}
    </SyntaxHighlighter>
);

const SectionList = ({ points }) => (
    <ul>
        {points.map((point, index) => (
            <li key={index}>{formatText(point)}</li>
        ))}
    </ul>
);

const SectionHeading = ({ title, variant }) => {
    let emoji = '';
    switch (variant) {
        case 'do':
            emoji = '✅';
            break;
        case 'dont':
            emoji = '❌';
            break;
        default:
            emoji = '';
    }
    return (
        <h4 className="learning-header">
            {emoji} {formatText(title)}
        </h4>
    );
};

const LessonScreen = () => {
    const { skill, lessonId } = useParams(); // Extract the lesson ID from the URL
    const [lesson, setLesson] = useState(null); // State to hold the dynamically loaded lesson

    const [activeSection, setActiveSection] = useState(null);
    const [lessonConfig, setLessonConfig] = useState(null);

    useEffect(() => {
        // Dynamically import the lesson based on the lessonId
        const loadLesson = async () => {
            try {
                const lessonModule = await import(`../../data/learning/${skill}/${skill}_${lessonId}`);
                setLesson(lessonModule.default); // Set the dynamically imported lesson
            } catch (error) {
                console.error(`Failed to load lesson: ${lessonId}`, error);
                setLesson(null); // Handle invalid lessonId or import errors
            }
        };

        loadLesson();
    }, [lessonId]); // Re-run when lessonId changes


    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.learning-section');
            let currentSection = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!lesson) {
        return <p>Loading lesson...</p>; // Show a loading message while the lesson is being loaded
    }


    return (
        <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {/* Floating Navigation */}
            <nav className="floating-nav">
                <ul>
                    {lesson.sections.map((section, index) => (
                        <li
                            key={index}
                            className={activeSection === `section-${index}` ? 'active' : ''}
                            onClick={() => scrollToSection(`section-${index}`)}
                        >
                            {formatText(section.title)}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Main Content */}
            <div style={{ marginLeft: '200px', flex: 1 }}>
                <h1>{formatText(lesson.title)}</h1>
                <p>{lesson.description}</p>

                {lesson.sections.map((section, sectionIndex) => (
                    <Section key={sectionIndex} id={`section-${sectionIndex}`} title={section.title}>
                        {section.content.map((item, itemIndex) => {
                            switch (item.type) {
                                case 'text':
                                    return <p key={itemIndex}>{formatText(item.content)}</p>;
                                case 'list':
                                    return <SectionList key={itemIndex} points={item.items} />;
                                case 'heading':
                                    return <SectionHeading key={itemIndex} title={item.content} variant={item.variant} />;
                                case 'code':
                                    return <SectionCode key={itemIndex} code={item.content} />;
                                default:
                                    return null;
                            }
                        })}
                    </Section>
                ))}
            </div>
        </div>
    );
};

export default LessonScreen;