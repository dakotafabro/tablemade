// src/redux/slices/profileSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Profile = {
  onboarded: boolean;
  diet?: string;
  allergies?: string[];
  dislikes?: string[];
  timePerMeal?: number;
  skill?: "beginner" | "intermediate" | "advanced";
};

const initialState: Profile = {
  onboarded: false,
  timePerMeal: 30,
  skill: "beginner",
  allergies: [],
  dislikes: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Partial<Profile>>) {
      Object.assign(state, action.payload);
    },
    setOnboarded(state, action: PayloadAction<boolean>) {
      state.onboarded = action.payload;
    },
  },
});

export const { setProfile, setOnboarded } = profileSlice.actions;
export default profileSlice.reducer;
