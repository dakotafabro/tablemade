// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = { uid: string; email?: string | null; displayName?: string | null };
type AuthState = { user: User | null; loading: boolean };

const initialState: AuthState = { user: null, loading: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    signOut(state) {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, signOut } = authSlice.actions;
export default authSlice.reducer;
