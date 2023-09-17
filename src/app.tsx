import './app.scss';
import { FC } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/mainLayout/MainLayout/mainLayout';
import Landing from './pages/landing/landing';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: 'exercise',
          async lazy() {
            const { Exercise } = await import('./pages/exercise/exercise');
            return { Component: Exercise };
          },
        },
        {
          path: '*',
          element: (
            <div>
              <h2>Nothing to see here!</h2>
              <p>
                <Link to='/'>Go to the home page</Link>
              </p>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
/*
(
  <div className='app'>
    <header className='header'>Exercise</header>
    <Exercise />
    <div className='show-result'>{exerciseResult}</div>
    <div className='show-legs-table'></div>
  </div>
);*/
