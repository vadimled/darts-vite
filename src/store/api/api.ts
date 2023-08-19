import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dartsAPI = createApi({
  reducerPath: 'darts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    getUserData: build.query({
      query: (val) => ({
        url: 'search/users',
        params: {
          q: val,
        },
      }),
    }),
  }),
});
export const { useGetUserDataQuery } = dartsAPI;
