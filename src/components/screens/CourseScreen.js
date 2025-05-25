import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getCourse } from "../../services/courseServices";


const CourseScreen = () => {
    const navigate = useNavigate();
    const { skill } = useParams(); // Extract the lesson ID from the URL

    const [course, setCourse] = useState(null); // State to hold the dynamically loaded lesson

    useEffect(() => {
        const loadCourse = async () => {
            try {
                const courseData = await getCourse(skill);
                setCourse(courseData);
            } catch (error) {
                console.error("Error fetching course:", error);
            }
        };
        loadCourse();
    }, [skill]); // Re-run when skill changes

    if (!course) {
        return  null
    }

    return (
        <div className="learn-skill-screen">
            <h1>Learn JavaScript</h1>
            <div className="lesson-tiles">
                {course.map((lesson, index) => (
                    <div
                        key={index}
                        className="lesson-tile"
                        onClick={() => navigate(`/learn/${skill}/lesson/${index + 1}`)}
                    >
                        <h2>{lesson.title}</h2>
                        <p>{lesson.description}</p>
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

export default CourseScreen;