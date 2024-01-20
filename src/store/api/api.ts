import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IExercise } from '../currentSlice';

export const dartsAPI = createApi({
  reducerPath: 'darts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:8080/api/',
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (val) => ({
        url: '/users',
        params: {
          q: val,
        },
      }),
    }),
    addExerciseHistory: builder.mutation({
      query: (exerciseHistory: IExercise[]) => ({
        url: '/exercise_history',
        method: 'POST',
        body: exerciseHistory,
      }),
    }),
  }),
});
export const { useGetUserDataQuery } = dartsAPI;
