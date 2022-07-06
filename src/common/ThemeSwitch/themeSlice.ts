import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/App/store";

interface ThemeState {
  isDarkTheme: boolean;
};

const initialState: ThemeState = {
  isDarkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const {
  toggleTheme
} = themeSlice.actions;

const selectThemeState = (state: RootState) => state.theme;

export const selectIsDarkTheme = (state: RootState) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;