import { configureStore } from '@reduxjs/toolkit';
import weatherDataSlice from './weatherDataSlice';

const store = configureStore({
  reducer: {
    [weatherDataSlice.name]: weatherDataSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
