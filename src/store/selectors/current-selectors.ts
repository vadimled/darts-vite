import { RootState } from '../store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { ISet } from '../userSlice';
import { IExercise } from '../currentSlice';

export const getExerciseState = (state: RootState) =>
  state.current?.set?.exerciseStarted;

export const getCurrentExercise = (state: RootState) =>
  state.current?.set?.currentExercise;

export const getSteps = (state: RootState) => state.current?.set?.exercises;

export const getStepCounter = (state: RootState) =>
  state.current?.set?.currentStep;

export const getExercises = (state: RootState) => state.current?.set?.exercises;

const getCurrentExerciseNumber = (state: RootState) =>
  state.current?.set?.currentExerciseNumber;

export const getCurrStepLimit = createDraftSafeSelector(
  getExercises,
  getCurrentExerciseNumber,
  (exercises: IExercise[], index: number) => {
    return exercises[index].steps;
  },
);
