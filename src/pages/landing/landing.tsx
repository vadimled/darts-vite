import React, { FC } from 'react';
import './landing.scss';
import Card from '../../components/Card/card';
import { cardData } from '../../utils/utils';

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
  // Function to handle clicks on cards
  const handleCardClick = (title: string) => {
    console.log(`Clicked on ${title}`);
  };

  return (
    <main className='main-content'>
      <div className='card-container'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(card.title)}
          />
        ))}{' '}
      </div>{' '}
    </main>
  );
};

export default Landing;
