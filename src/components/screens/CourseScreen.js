import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getCourse } from "../../services/courseServices";
import Breadcrumb from "../Breadcrumb";

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
        return <div className="screen-empty"></div>
    }

    return (
        <div className="learn-skill-screen screen">
            <Breadcrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "Learn", link: "/learn" },
                    { label: course.name, link: `/learn/${skill}` },
                ]}
            />
            <div className="screen-intro">
                <h1 className="screen-header">{course.name}</h1>
                <p>{course.description}</p>
            </div>
            <div className="lesson-tiles">
                {course.lessons.map((lesson, index) => (
                    <div
                        key={index}
                        className="lesson-tile"
                        onClick={() => navigate(`/learn/${skill}/lesson/${index + 1}`)}
                    >
                        <div className="lesson-tile-header">        
                            <h2 className="course-name">{lesson.title}</h2>
                        </div>

                        <p className="course-description">{lesson.description}</p>
                        <p className="course-description italic">📄 Chapters: {lesson.chapters}</p>
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