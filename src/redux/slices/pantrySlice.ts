import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PantryItem = { id: string; name: string; qty?: number; unit?: string; useSoon?: boolean };

type PantryState = { items: PantryItem[] };

const initialState: PantryState = { items: [] };

const pantrySlice = createSlice({
  name: 'pantry',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<PantryItem>) { state.items.push(action.payload); },
    updateItem(state, action: PayloadAction<PantryItem>) {
      const idx = state.items.findIndex(i => i.id === action.payload.id);
      if (idx >= 0) state.items[idx] = action.payload;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  }
});

export const { addItem, updateItem, removeItem } = pantrySlice.actions;
export default pantrySlice.reducer;
