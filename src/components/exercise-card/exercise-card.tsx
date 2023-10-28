import './exercise-card.scss';
import cn from 'classnames';

import { FC } from 'react';

interface IExerciseCard {
  name: string;
  active?: boolean;
  score: number;
}
const ExerciseCard: FC<IExerciseCard> = ({ name, score }) => {
  return (
    <div className='exercise-card'>
      <div className='exercise-card-header'>
        <div className='exercise-name'>{name}</div>
      </div>
      <div className='exercise-score'>{score.toString()}</div>
    </div>
  );
};

export default ExerciseCard;
