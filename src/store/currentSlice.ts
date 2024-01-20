import { createSlice } from '@reduxjs/toolkit';
/*
* exercises: [
    { type: 'BULL', initialScore: 80, steps: 10 },
    { type: 'SECTOR_19', initialScore: 20, steps: 10 },
    { type: 'SECTOR_20', initialScore: 90, steps: 10 },
    { type: 'SP', initialScore: 100, steps: 10 },
    { type: 'HBR', initialScore: 780, steps: 10 },
    { type: 'BR', initialScore: 560, steps: 20 },
    { type: 'FOURTEEN', initialScore: 0, steps: 14 },
  ]*/
enum ExerciseType {
  SECTOR_20 = 'SECTOR 20',
  SECTOR_19 = 'SECTOR 19',
  BULL = 'bull',
  SP = 'SP',
  HBR = 'HBR',
  BR = 'BR',
  FOURTEEN = '14',
}
export interface IExercise {
  type: ExerciseType;
  initialScore: number;
  steps: number;
}
interface ICurrent {
  exerciseStarted: boolean;
  currentExercise: string;
  exercises: IExercise[];
  currentStep: number;
  currentExerciseNumber: number;
}

const initialCurrentData: ICurrent = {
  exerciseStarted: false,
  currentExercise: '',
  currentExerciseNumber: 0,
  currentStep: 0,
  exercises: [
    { type: ExerciseType.SECTOR_20, initialScore: 0, steps: 10 },
    { type: ExerciseType.SECTOR_19, initialScore: 0, steps: 10 },
    { type: ExerciseType.BULL, initialScore: 0, steps: 10 },
    { type: ExerciseType.SP, initialScore: 0, steps: 10 },
    { type: ExerciseType.HBR, initialScore: 0, steps: 10 },
    { type: ExerciseType.BR, initialScore: 0, steps: 20 },
    { type: ExerciseType.FOURTEEN, initialScore: 0, steps: 14 },
  ],
};

const currentSlice = createSlice({
  initialState: {
    result: 0,
    set: { ...initialCurrentData },
  },
  name: 'current',
  reducers: {
    SET_EXERCISE_STATE_CHANGED: (state) => {
      const { exercises, exerciseStarted } = state.set;
      state.set.exerciseStarted = !exerciseStarted;
      const exerciseObj = exercises[state.set.currentExerciseNumber];
      state.set.currentExercise = Object.keys(exerciseObj)[0];
      state.set.currentStep = 1;
    },
    SET_EXERCISE_RESULT: (state, { payload }) => {
      const { exercises } = state.set;
      const exerciseObj = exercises[state.set.currentExerciseNumber];
      exerciseObj[state.set.currentExercise] += payload;
      state.set.currentStep += 1;
    },
    SET_EXERCISE_FINISHED: (state) => {
      const { exercises } = state.set;
      state.set.exerciseStarted = false;
      state.set.currentStep = 0;
      state.set.currentExerciseNumber += 1;
      if (exercises.length === state.set.currentExerciseNumber) {
        state.result = exercises.reduce((res, val) => {
          return res + Object.values(val)[0];
        }, 0);
        state.set.exerciseStarted = false;
        state.set.currentStep = 0;
        state.set.currentExerciseNumber = 0;
      }
    },
    CLEAR_CURRENT_DATA: (state) => {
      state.set = { ...initialCurrentData };
    },
  },
  extraReducers: undefined,
});

export const currentSliceAction = currentSlice.actions;
export const currentSliceReducer = currentSlice.reducer;
