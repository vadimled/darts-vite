import { InputNumber } from 'antd';
import cn from 'classnames';
import React, { KeyboardEvent, useRef, useState } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import {
  getCurrStepLimit,
  getStepCounter,
} from '../../store/selectors/current-selectors';

const TrainingLayout = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const STEPS_LIMIT = useAppSelector(getCurrStepLimit);
  const stepCounter = useAppSelector(getStepCounter);

  const { SET_EXERCISE_RESULT, SET_EXERCISE_FINISHED } = useActions();
  const [inputValue, setInputValue] = useState<null | number>(null);

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
        <div className='exercise-name'>Training</div>
      </div>
      <div className='exercise-card-content'>
        <div className='exercise-scoring-container'>
          <InputNumber
            ref={inputRef}
            disabled={false}
            className='exercise-input'
            placeholder='Enter points'
            name='enteredResults'
            value={0}
            onKeyDown={onResultEntered}
            controls={false}
            onChange={onChange}
          />
          <div className='exercise-score'>{0}</div>
          {
            <div
              className={cn('step-counter', {
                'last-step': stepCounter === STEPS_LIMIT,
              })}>
              {/* {active && stepCounter > 0 && stepCounter}*/}
            </div>
          }
        </div>
        {/*<div className='exercise-chart'>{renderChart()}</div>*/}
      </div>
    </div>
  );
};

export default TrainingLayout;
