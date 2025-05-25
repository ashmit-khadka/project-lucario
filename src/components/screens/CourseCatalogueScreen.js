import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getCourses } from "../../services/courseServices";

const CourseCatalogueScreen = () => {
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="learn-skill-screen screen">
            {/* <h1 className="screen-header">Select a Course</h1> */}
            <div className="lesson-tiles">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="lesson-tile"
                        onClick={() => navigate(course.link)} // Navigate to the course page
                    >
                        <div className="lesson-tile-header">
                        <img
                                src={`${process.env.REACT_APP_HOST}/${course.icon}`}
                                alt={course.name}
                                className="course-image"
                            />

                            <h2 className="course-name">{course.name}</h2>
                        </div>
                        <p className="course-description">{course.description}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseCatalogueScreen;