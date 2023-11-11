import React, {
  FC,
  KeyboardEvent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { InputNumber } from 'antd';
import './exercise-card.scss';
import { useActions, useAppSelector } from '../../store/hooks';
import { STEPS_LIMIT } from '../../utils/constants';
import cn from 'classnames';
import { getStepCounter } from '../../store/selectors/current-selectors';

interface IExerciseCard {
  name: string;
  active?: boolean;
  score: number;
  chartData?: { date: string; points: number }[];
}
const ExerciseCard: FC<IExerciseCard> = ({
  active,
  name,
  score,
  chartData,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const stepCounter = useAppSelector(getStepCounter);

  const { SET_EXERCISE_RESULT, SET_EXERCISE_FINISHED } = useActions();
  const [inputValue, setInputValue] = useState<null | number>(null);

  useLayoutEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [stepCounter]);

  const renderChart = () => {
    return chartData
      ? chartData.map((data, index) => (
          <div
            key={index}
            className='exercise-chart-bar'
            style={{ height: `${data.points}px` }}>
            {data.points}
          </div>
        ))
      : null;
  };

  const onChange = (e: number | null) => {
    e && setInputValue(+e);
  };

  const onResultEntered = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e as KeyboardEvent).key === 'Enter') {
      SET_EXERCISE_RESULT(inputValue);
      setInputValue(null);
      if (stepCounter === STEPS_LIMIT) {
        SET_EXERCISE_FINISHED();
      }
    }
  };

  return (
    <div className='exercise-card'>
      <div className='exercise-card-header'>
        <div className='exercise-name'>{name}</div>
      </div>
      <div className='exercise-card-content'>
        <div className='exercise-scoring-container'>
          <InputNumber
            ref={inputRef}
            disabled={!active}
            className='exercise-input'
            placeholder='Enter points'
            name='enteredResults'
            value={inputValue as number}
            onKeyDown={onResultEntered}
            controls={false}
            onChange={onChange}
          />
          <div className='exercise-score'>{score}</div>
          {
            <div
              className={cn('step-counter', {
                'last-step': stepCounter === STEPS_LIMIT,
                'zero-step': stepCounter === STEPS_LIMIT,
              })}>
              {active && stepCounter > 0 && stepCounter}
            </div>
          }
        </div>
        <div className='exercise-chart'>{renderChart()}</div>
      </div>
    </div>
  );
};

export default ExerciseCard;
