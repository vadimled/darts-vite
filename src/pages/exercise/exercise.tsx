import './exercise.scss';
import { useActions, useAppSelector } from '../../store/hooks';
import {
  getCurrentExercise,
  getExercises,
  getExerciseState,
} from '../../store/selectors/current-selectors';
import { Button } from 'antd';
import { useLayoutEffect, useRef } from 'react';
import ExerciseCard from '../../components/exercise-card';
import { getExerciseResult } from '../../store/selectors/user-selector';

export const Exercise = () => {
  const exerciseState = useAppSelector(getExerciseState);
  const currentExercise = useAppSelector(getCurrentExercise);
  const exercises = useAppSelector(getExercises);
  const exerciseResult = useAppSelector(getExerciseResult);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { SET_EXERCISE_STATE_CHANGED } = useActions();

  useLayoutEffect(() => {
    if (btnRef && exerciseResult === 0) {
      btnRef.current?.focus();
    }
  }, [exerciseState]);

  const onExerciseState = () => {
    SET_EXERCISE_STATE_CHANGED();
  };

  const renderCards = () => {
    return exercises.map((exercise) => {
      const name = Object.keys(exercise)[0];
      const score = Object.values(exercise)[0];

      return (
        <ExerciseCard
          key={name}
          active={currentExercise === name}
          name={name}
          score={score}
        />
      );
    });
  };

  return (
    <div className='exercise-wrapper'>
      <div className='exercise-actions'>
        <Button
          ref={btnRef}
          type='primary'
          shape='round'
          size={'large'}
          className='start-exercise-btn'
          disabled={exerciseState}
          onClick={onExerciseState}>
          Start Exercise
        </Button>
      </div>
      <div className='exercise-cards-wrapper'> {renderCards()} </div>
    </div>
  );
};
