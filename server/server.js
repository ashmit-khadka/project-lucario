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

const lessonPaths = {
    javascript: [
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
    typescript: [
        "./data/courses/typescript/typescript_lesson_1.json",
        "./data/courses/typescript/typescript_lesson_2.json",
        "./data/courses/typescript/typescript_lesson_3.json",
        "./data/courses/typescript/typescript_lesson_4.json",
    ],
    react: [
        "./data/courses/react/react_lesson_1.json",
        "./data/courses/react/react_lesson_2.json",
        "./data/courses/react/react_lesson_3.json",
        "./data/courses/react/react_lesson_4.json",
        "./data/courses/react/react_lesson_5.json",
    ],
    csharp: [
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
};

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

 

    const path = lessonPaths[skill][parseInt(lessonId)-1];
    const lesson = require(path);

    if (lesson) {
        // send the lesson data as a response
        res.json(lesson);
    } else {
        res.status(404).json({ error: 'Lesson not found' });
    }
})

app.get('/api/course/getCourses', (req, res) => {
    const courses = [
        {
            id: 1,
            name: "JavaScript",
            description: "Learn the basics of JavaScript.",
            image: "https://example.com/javascript.jpg",
            link: "/learn/javascript",
            icon: `assets/icons/javascript.svg`,
        },
        {
            id: 2,
            name: "TypeScript",
            description: "Learn TypeScript for better JavaScript development.",
            image: "https://example.com/typescript.jpg",
            link: "/learn/typescript",
            icon: `assets/icons/typescript.svg`,
        },
        {
            id: 3,
            name: "React",
            description: "Learn React for building user interfaces.",
            image: "https://example.com/react.jpg",
            link: "/learn/react",
            icon: `/assets/icons/react.svg`,
        },
        {
            id: 4,
            name: "C#",
            description: "Learn C# for building applications.",
            image: "https://example.com/csharp.jpg",
            link: "/learn/csharp",
            icon: `assets/icons/csharp.svg`,
        },
    ];

    res.json(courses);
});

app.get('/api/course/getCourse/:skill', (req, res) => {
    const { skill } = req.params;

    // iterate through the lessonPaths object to find the lessons for the given skill
    const lessons = lessonPaths[skill];

    // for each lesson, require the JSON file and add it to the lessons array
    const lessonsData = lessons.map((lessonPath) => {
        const { title, description } = require(lessonPath);
        return { title, description}
    });

    if (lessonsData) {
        // send the lessons data as a response
        res.json(lessonsData);
    } else {
        res.status(404).json({ error: 'Lessons not found' });
    }

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
