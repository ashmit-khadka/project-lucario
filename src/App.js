import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router';
import NavigationBar from './components/NavigationBar';
import LandingScreen from './components/screens/LandingScreen';
import ResumeScreen from './components/screens/ResumeScreen';
import CourseCatalogueScreen from './components/screens/CourseCatalogueScreen';
import LessonScreen from './components/screens/LessonScreen';
import CourseScreen from './components/screens/CourseScreen';
import QuizScreen from './components/screens/QuizScreen';
import Footer from './components/Footer';
import NotFoundScreen from './components/screens/NotFoundScreen';
import './styles/index.scss';

// Layout component that includes the navbar and footer
const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet /> {/* This is where the route content will be rendered */}
      <Footer />
      <ScrollRestoration /> {/* This component helps with scroll restoration when navigating between routes */}
    </>
  );
};

// Create router with a root Layout route that contains all other routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundScreen />, // This will render if no route matches
    children: [
      {
        path: '/',
        element: <LandingScreen />,
      },
      {
        path: '/resume',
        element: <ResumeScreen />,
      },
      {
        path: '/learn',
        element: <CourseCatalogueScreen />,
      },
      {
        path: '/learn/:skill/lesson/:lessonId',
        element: <LessonScreen />,
      },
      {
        path: '/learn/:skill',
        element: <CourseScreen />,
      },
      {
        path: '/quiz/:skill',
        element: <QuizScreen />,
      },
    ],
  },
]);

function App() {
  // Just return the RouterProvider with no wrapping div
  return <RouterProvider router={router} />;
}

export default App;