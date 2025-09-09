import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import pantryReducer from './slices/pantrySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    pantry: pantryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
