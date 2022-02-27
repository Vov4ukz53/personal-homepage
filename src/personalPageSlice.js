import { createSlice } from "@reduxjs/toolkit";

const personalPageSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchRepositories: state => {
      state.loading = !state.loading;
    },
    setRepositories: (state, { payload: gitHubRepositories }) => {
      state.repositories = gitHubRepositories;
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

const selectMainPageState = state => state.repositories;

export const selectRepositories = state => selectMainPageState(state).repositories;
export const selectLoading = state => selectMainPageState(state).loading;
export const selectError = state => selectMainPageState(state).error;

export const selectMyRepositories = state => {
  const myRepositoriesIds = [
    424564004,
    444539005,
    423117095,
    414297148
  ];

  return selectRepositories(state).filter(({ id }) =>
    myRepositoriesIds.includes(id)
  );
};

export default personalPageSlice.reducer;