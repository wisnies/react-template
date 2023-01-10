import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/example';
const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
