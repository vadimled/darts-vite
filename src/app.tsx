import './app.scss';
import { FC } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/mainLayout/MainLayout/MainLayout';
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
  /*const exerciseResult = useAppSelector(getExerciseResult);
  const exercises = useAppSelector(getExercises);
  const { SAVE_EXERCISES_RESULT, CLEAR_CURRENT_DATA } = useActions();
  const { data, isLoading, isError } = useGetUserDataQuery('vadim');
  console.log({ data, isLoading, isError });
  // const _data = JSON.stringify(data.items, null, 2);

  useEffect(() => {
    if (exerciseResult > 0) {
      SAVE_EXERCISES_RESULT({ exercises, exerciseResult });
      CLEAR_CURRENT_DATA();
    }
  }, [exerciseResult]);*/

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
