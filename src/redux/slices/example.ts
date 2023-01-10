import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  boolean: boolean;
  string: string;
};

const initialState: InitialState = {
  boolean: false,
  string: 'example',
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    switchBoolean: (state) => {
      state.boolean = !state.boolean;
    },
    setString: (state, action: PayloadAction<string>) => {
      state.string = action.payload;
    },
  },
});

export default exampleSlice.reducer;
export const exampleActions = exampleSlice.actions;
