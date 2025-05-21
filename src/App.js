import logo from './logo.svg';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingScreen from './components/screens/LandingScreen'
import ResumeScreen from './components/screens/ResumeScreen';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import LessonScreen from './components/screens/LessonScreen';
import LearnSkillScreen from './components/screens/LearnSkillScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/resume",
    element: <ResumeScreen />,
  },
  {
    path: "/learn/:skill/lesson/:lessonId", // Dynamic route with a URL parameter
    element: <LessonScreen />,
  },
  {
    path: "/learn/:skill",
    element: <LearnSkillScreen />,
  },
]);

function App() {
  return (
    <div>
      <NavigationBar />
      <div>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
