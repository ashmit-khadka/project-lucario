import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import formatText from '../../utils/formatText';
import { getLesson } from '../../services/courseServices';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
import QuizScreen from './QuizScreen';
import NavigationHover from '../NavigationHover';
import Breadcrumb from '../Breadcrumb';

const Section = ({ title, id, children }) => (
    <section id={id} className="learning-section section">
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

    const [course, setCourse] = useState(null); // State to hold the course data if needed
    const [lesson, setLesson] = useState(null); // State to hold the dynamically loaded lesson
    const [quiz, setQuiz] = useState(null); // State to hold the quiz data if needed


    useEffect(() => {
        const loadLesson = async () => {
            try {
                const lessonData = await getLesson(skill, lessonId);
                setCourse(lessonData.course); // If you need to use course data later
                setLesson(lessonData.lesson);
                setQuiz(lessonData.quiz); // If you need to use quiz data later
            } catch (error) {
                console.error("Error fetching lesson:", error);
            }
        };
        loadLesson();
    }, [lessonId]); // Re-run when lessonId changes



    if (!lesson) {
        return null; // Show a loading state while fetching the lesson
    }

    let sections = lesson.sections.map((section, index) => ({
        id: `section-${index}`,
        label: section.title,
    }));

    sections.push({
        id: 'section-quiz',
        label: '📝 Quiz',
    });


    return (
        <div className="screen">
            <NavigationHover
                sections={sections}
            />

            {/* Main Content */}
            <div>

                <Breadcrumb
                    items={[
                        { label: "Home", link: "/" },
                        { label: "Learn", link: "/learn" },
                        { label: course.name, link: `/learn/${skill}` },
                        { label: lesson.title, link: `/learn/${skill}/lesson/${lessonId}` },
                    ]}
                />

                <div className="screen-intro">
                    <h1 className="screen-header">{formatText(lesson.title)}</h1>
                    <p>{lesson.description}</p>
                </div>

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

                <div>
                    {/* <button
                        onClick={() => {
                            navigate(`/quiz/${skill}`); // Navigate to the quiz screen
                        }}
                        >
                            Take a quiz
                        </button>
                </div> */}
                    <QuizScreen quizData={quiz} />
                </div>
            </div>
        </div>
    );
};

export default LessonScreen;