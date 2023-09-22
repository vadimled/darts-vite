import React, { FC } from 'react';
import './landing.scss';

interface ILanding {
  name?: string;
}
const Landing: FC<ILanding> = ({ name = 'Training' }) => {
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
  return (
    <main className='main-content'>
      <section id='training'>
        <h2>{name}</h2>
        <p>Improve your dart skills with our top-notch training programs.</p>
      </section>
      <section id='game'>
        <h2>Game</h2>
        <p>Play darts and compete with others.</p>
      </section>
      <section id='analytics'>
        <h2>Results Analytics</h2>
        <p>Analyze your game performance with detailed statistics.</p>
      </section>
    </main>
  );
};

export default Landing;
