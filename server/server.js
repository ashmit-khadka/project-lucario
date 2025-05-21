// server.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

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
    ]
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
            name: 'JavaScript',
            description: 'Learn the basics of JavaScript.',
            image: 'https://example.com/javascript.jpg',
        },
        {
            id: 2,
            name: 'TypeScript',
            description: 'Learn TypeScript for better JavaScript development.',
            image: 'https://example.com/typescript.jpg',
        },
        {
            id: 3,
            name: 'React',
            description: 'Learn React for building user interfaces.',
            image: 'https://example.com/react.jpg',
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


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
