import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./getRepositories";
import {
  fetchRepositories,
  setRepositories,
  repositoriesRequestFailed
} from "./personalPageSlice";

function* fetchRepositoriesHandler() {
  try {
    yield delay(1000);
    const repositories: [] = yield call(getRepositories);
    yield put(setRepositories(repositories));
  }
  catch (error) {
    yield put(repositoriesRequestFailed());
    console.error(error);
  }
};

function* personalPageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};

export default personalPageSaga;