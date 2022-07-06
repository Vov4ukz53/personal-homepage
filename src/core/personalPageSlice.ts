import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./App/store";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

interface PersoalPageState {
  repositories: Array<Repository>;
  loading: boolean;
  error: boolean;
};

const initialState: PersoalPageState = {
  repositories: [],
  loading: false,
  error: false,
};

const personalPageSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    fetchRepositories: state => {
      state.loading = !state.loading;
    },
    setRepositories: (state, action: PayloadAction<[]>) => {
      state.repositories = action.payload;
      state.loading = false;
    },
    repositoriesRequestFailed: state => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchRepositories,
  setRepositories,
  repositoriesRequestFailed,
} = personalPageSlice.actions;

const selectMainPageState = (state: RootState) => state.repositories;

export const selectRepositories = (state: RootState) => selectMainPageState(state).repositories;
export const selectLoading = (state: RootState) => selectMainPageState(state).loading;
export const selectError = (state: RootState) => selectMainPageState(state).error;

export const selectMyRepositories = (state: RootState) => {
  const myRepositoriesIds = [
    424564004,
    484464982,
    423117095,
    468023215,
    489629341
  ];

  return selectRepositories(state).filter(({ id }) =>
    myRepositoriesIds.includes(id)
  )
};

export default personalPageSlice.reducer;