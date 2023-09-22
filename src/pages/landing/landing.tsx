import React, { FC } from 'react';
import './landing.scss';
import Card from '../../components/Card/card';

interface ILanding {}
const Landing: FC<ILanding> = () => {
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
      <div className='card-container'>
        <Card
          title='Training'
          description={`Improve your dart skills with our 
          top-notch training programs.`}
        />
        <Card title='Game' description='Play darts and compete with others.' />
        <Card
          title='Results Analytics'
          description='Analyze your game performance with detailed statistics.'
        />
      </div>{' '}
    </main>
  );
};

export default Landing;
