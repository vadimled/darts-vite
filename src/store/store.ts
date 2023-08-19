import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './userSlice';
import { currentSliceReducer } from './currentSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dartsAPI } from './api/api';

export const store = configureStore({
  reducer: {
    [dartsAPI.reducerPath]: dartsAPI.reducer,
    user: userSliceReducer,
    current: currentSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dartsAPI.middleware),
});
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
