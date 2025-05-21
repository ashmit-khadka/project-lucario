import React from "react";
import { useNavigate, useParams } from "react-router";

import LearningJavaScriptLesson1 from "../../data/learning/javascript/javascript_1";
import LearningJavaScriptLesson2 from "../../data/learning/javascript/javascript_2";
import LearningJavaScriptLesson3 from "../../data/learning/javascript/javascript_3";
import LearningJavaScriptLesson4 from "../../data/learning/javascript/javascript_4";
import LearningJavaScriptLesson5 from "../../data/learning/javascript/javascript_5";
import LearningJavaScriptLesson6 from "../../data/learning/javascript/javascript_6";
import LearningJavaScriptLesson7 from "../../data/learning/javascript/javascript_7";
import LearningJavaScriptLesson8 from "../../data/learning/javascript/javascript_8";
import LearningJavaScriptLesson9 from "../../data/learning/javascript/javascript_9";
import LearningJavaScriptLesson10 from "../../data/learning/javascript/javascript_10";
import LearningJavaScriptLesson11 from "../../data/learning/javascript/javascript_11";
import LearningJavaScriptLesson12 from "../../data/learning/javascript/javascript_12";
import LearningJavaScriptLesson13 from "../../data/learning/javascript/javascript_13";

import LearningTypeScriptLesson1 from "../../data/learning/typescript/typescript_1";
import LearningTypeScriptLesson2 from "../../data/learning/typescript/typescript_2";
import LearningTypeScriptLesson3 from "../../data/learning/typescript/typescript_3";
import LearningTypeScriptLesson4 from "../../data/learning/typescript/typescript_4";

import LearningReactLesson1 from "../../data/learning/react/react_1";
import LearningReactLesson2 from "../../data/learning/react/react_2";
import LearningReactLesson3 from "../../data/learning/react/react_3";
import LearningReactLesson4 from "../../data/learning/react/react_4";
import LearningReactLesson5 from "../../data/learning/react/react_5";

const JavaScriptLessons = [
    LearningJavaScriptLesson1,
    LearningJavaScriptLesson2,
    LearningJavaScriptLesson3,
    LearningJavaScriptLesson4,
    LearningJavaScriptLesson5,
    LearningJavaScriptLesson6,
    LearningJavaScriptLesson7,
    LearningJavaScriptLesson8,
    LearningJavaScriptLesson9,
    LearningJavaScriptLesson10,
    LearningJavaScriptLesson11,
    LearningJavaScriptLesson12,
    LearningJavaScriptLesson13
]

const TypeScriptLessons = [
    LearningTypeScriptLesson1,
    LearningTypeScriptLesson2,
    LearningTypeScriptLesson3,
    LearningTypeScriptLesson4,
]

const ReactLessons = [
    LearningReactLesson1,
    LearningReactLesson2,
    LearningReactLesson3,
    LearningReactLesson4,
    LearningReactLesson5
]

const LearnSkillScreen = () => {
    const navigate = useNavigate();
    const { skill } = useParams(); // Extract the lesson ID from the URL

    if (!skill) {
        return <div>Invalid skill</div>;
    }

    let lessons = [];
    switch (skill) {
        case "javascript":
            lessons = JavaScriptLessons;
            break;
        case "typescript":
            lessons = TypeScriptLessons;
            break;
        case "react":
            lessons = ReactLessons;
            break;
        default:
            return <div>Invalid skill</div>;
    }

    return (
        <div className="learn-skill-screen">
            <h1>Learn JavaScript</h1>
            <div className="lesson-tiles">
                {lessons.map((lesson, index) => (
                    <div
                        key={index}
                        className="lesson-tile"
                        onClick={() => navigate(`/learn/${skill}/lesson/${index + 1}`)}
                    >
                        <h2>{lesson.title}</h2>
                        {/* <ul>
                            {lesson.sections.map((section, sectionIndex) => (
                                <li key={sectionIndex}>{section.title}</li>
                            ))}
                        </ul> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnSkillScreen;