import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App'
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'work',
        element: <WorkPage />
      },
      // {
      //   path: 'contact',
      //   element: <ContactPage />
      // },
      // {
      //   path: 'resume',
      //   element: <ResumePage />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
