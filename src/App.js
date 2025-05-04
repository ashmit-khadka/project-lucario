import logo from './logo.svg';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingScreen from './components/screens/LandingScreen'
import ResumeScreen from './components/screens/ResumeScreen';
import NavigationBar from './components/NavigationBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/resume",
    element: <ResumeScreen />,
  },
]);

function App() {
  return (
    <div>
      <NavigationBar />
      <div>
        <RouterProvider router={router} />

      </div>
    </div>
  );
}

export default App;
