import './exercise-card.scss';

import { FC } from 'react';
import cn from 'classnames';
import { STEPS_LIMIT } from '../../utils/constants';

interface IExerciseCard {
  name: string;
  active?: boolean;
  score: number;
  stepCounter?: number;
}
const ExerciseCard: FC<IExerciseCard> = ({ name, score, stepCounter }) => {
  return (
    <div className='exercise-card'>
      <div className='exercise-card-header'>
        <div className='exercise-name'>{name}</div>
      </div>
      <div className='exercise-card-content'>
        <div className='exercise-scoring-container'>
          <div className='exercise-score'>{score.toString()}</div>
          <div
            className={cn('step-counter', {
              'last-step': stepCounter === STEPS_LIMIT,
            })}>
            {stepCounter}
          </div>
        </div>
        <div className='exercise-chart'></div>
      </div>
    </div>
  );
};

export default ExerciseCard;
