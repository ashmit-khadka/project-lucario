// server.js
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const react = require('react');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.REACT_APP_SERVER || 'http://localhost';

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is healthy!' });
});

const courses = [
    {
        id: "javascript",
        name: "JavaScript",
        description: "Learn the basics of JavaScript.",
        image: "https://example.com/javascript.jpg",
        link: "/learn/javascript",
        icon: `assets/icons/javascript.svg`,
        lessons: [
            "./data/courses/javascript/javascript_lesson_1.json",
            "./data/courses/javascript/javascript_lesson_2.json",
            "./data/courses/javascript/javascript_lesson_3.json",
            "./data/courses/javascript/javascript_lesson_4.json",
            "./data/courses/javascript/javascript_lesson_5.json",
            "./data/courses/javascript/javascript_lesson_6.json",
            "./data/courses/javascript/javascript_lesson_7.json",
            "./data/courses/javascript/javascript_lesson_8.json",
            "./data/courses/javascript/javascript_lesson_9.json",
            "./data/courses/javascript/javascript_lesson_10.json",
            "./data/courses/javascript/javascript_lesson_11.json",
            "./data/courses/javascript/javascript_lesson_12.json",
            "./data/courses/javascript/javascript_lesson_13.json",
        ],
        quiz: [
            "./data/quiz/javascript/javascript_lesson_1_quiz.json",
        ],
    },
    {
        id: "typescript",
        name: "TypeScript",
        description: "Learn TypeScript for better JavaScript development.",
        image: "https://example.com/typescript.jpg",
        link: "/learn/typescript",
        icon: `assets/icons/typescript.svg`,
        lessons: [
            "./data/courses/typescript/typescript_lesson_1.json",
            "./data/courses/typescript/typescript_lesson_2.json",
            "./data/courses/typescript/typescript_lesson_3.json",
            "./data/courses/typescript/typescript_lesson_4.json",
        ],
        quiz: [
            // No quizzes for TypeScript yet
        ],
    },
    {
        id: "react",
        name: "React",
        description: "Learn React for building user interfaces.",
        image: "https://example.com/react.jpg",
        link: "/learn/react",
        icon: `/assets/icons/react.svg`,
        lessons: [
            "./data/courses/react/react_lesson_1.json",
            "./data/courses/react/react_lesson_2.json",
            "./data/courses/react/react_lesson_3.json",
            "./data/courses/react/react_lesson_4.json",
            "./data/courses/react/react_lesson_5.json",
        ],
        quiz: [
            // No quizzes for React yet
        ],
    },
    {
        id: "csharp",
        name: "C#",
        description: "Learn C# for building applications.",
        image: "https://example.com/csharp.jpg",
        link: "/learn/csharp",
        icon: `assets/icons/csharp.svg`,
        lessons: [
            "./data/courses/csharp/csharp_lesson_1.json",
            "./data/courses/csharp/csharp_lesson_2.json",
            "./data/courses/csharp/csharp_lesson_3.json",
            "./data/courses/csharp/csharp_lesson_4.json",
            "./data/courses/csharp/csharp_lesson_5.json",
            "./data/courses/csharp/csharp_lesson_6.json",
            "./data/courses/csharp/csharp_lesson_7.json",
            "./data/courses/csharp/csharp_lesson_8.json",
            "./data/courses/csharp/csharp_lesson_9.json",
            "./data/courses/csharp/csharp_lesson_10.json",
            "./data/courses/csharp/csharp_lesson_11.json",
            "./data/courses/csharp/csharp_lesson_12.json",
            "./data/courses/csharp/csharp_lesson_13.json",
        ],
        quiz: [
        ],
    },
];

const quizPaths = {
    javascript: [
        "./data/quiz/javascript/javascript_lesson_1_quiz.json",
    ],
    typescript: [
    ],
    react: [
    ],
};

app.get('/api/course/getLesson/:skill/:lessonId', (req, res) => {
    const { skill, lessonId } = req.params;

    
    const course = courses.find(course => course.id === skill);
    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }

    const lessonPath = course.lessons.find(path => path.includes(`${lessonId}.json`));
    if (!lessonPath) {
        //return res.status(404).json({ error: 'Lesson not found' });
    }

    const quizPath = course.quiz.find(path => path.includes(`${lessonId}_quiz.json`));

    if (!quizPath) {
        //return res.status(404).json({ error: 'Quiz not found' });
    }

    try {
        const lesson = lessonPath ? require(lessonPath) : null;
        const quiz = quizPath ? require(quizPath) : [];
        // send the lesson data as a response
        res.json({
            course,
            lesson,
            quiz,
        });
    } catch (error) {
        console.error(`Error loading lesson from ${lessonPath}:`, error);
        res.status(500).json({ error: 'Error loading lesson' });
    }
})

app.get('/api/course/getCourses', (req, res) => {

    // map number of lessons in each course
    const courseResponse = courses.map(course => {
        const { name, description, icon, link } = course;
        return {
            name,
            description,
            icon,
            link,
            totalLessons: course.lessons.length,
            totalQuizzes: course.quizzes ? course.quizzes.length : 0,
        };
    });

    res.json(courseResponse);
});

app.get('/api/course/getCourse/:skill', (req, res) => {
    const { skill } = req.params;

    // Find the course but don't modify the original
    const originalCourse = courses.find(course => course.id === skill);

    if (!originalCourse) {
        return res.status(404).json({ error: 'Course not found' });
    }

    // Create a deep copy of the course object
    const courseResponse = {
        ...originalCourse,
        lessons: [] // Initialize with empty array, will populate next
    };

    // Map lesson data without modifying original course
    courseResponse.lessons = originalCourse.lessons.map(lessonPath => {
        try {
            const lessonData = require(lessonPath);
            return { 
                title: lessonData.title, 
                description: lessonData.description,
                chapters: lessonData.sections.length || 0, // Use length of sections or 0 if not defined
                id: lessonPath.match(/(\d+)\.json$/)[1] // Extract lesson number from filename
            };
        } catch (error) {
            console.error(`Error loading lesson from ${lessonPath}:`, error);
            return { 
                title: "Error loading lesson", 
                description: "This lesson could not be loaded",
                id: "error"
            };
        }
    });
    
    // Send the modified copy, not the original
    res.json(courseResponse);
});

app.get('/api/course/getQuiz/:skill/:quizId', (req, res) => {
    const { skill, quizId } = req.params;

    const path = quizPaths[skill][parseInt(quizId)-1];
    const quiz = require(path);
    if (quiz) {
        // send the quiz data as a response
        res.json(quiz);
    } else {
        res.status(404).json({ error: 'Quiz not found' });
    }
})



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
