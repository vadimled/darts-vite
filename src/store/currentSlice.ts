import {createSlice} from '@reduxjs/toolkit';

// interface IUserData {
//     exercises: IExercise[];
// }
//
// interface ISet {
//     [setName: string]: number | undefined
// }
//
// interface IExercise {
//     name: string,
//     date: Date | undefined,
//     steps: ISet
// }

const initialCurrentData: {exerciseStarted: boolean} = {
  exerciseStarted: false,
};

const currentSlice = createSlice({
  initialState: initialCurrentData,
  name: 'current',
  reducers: {},
  extraReducers: undefined,
});

export default currentSlice.reducer;
