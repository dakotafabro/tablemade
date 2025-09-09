import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Profile = {
  diet?: string;
  allergies?: string[];
  dislikes?: string[];
  timePerMeal?: number;
  skill?: 'beginner' | 'intermediate' | 'advanced';
};

const initialState: Profile = { diet: undefined, allergies: [], dislikes: [], timePerMeal: 30, skill: 'beginner' };

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) { return { ...state, ...action.payload }; },
  }
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
