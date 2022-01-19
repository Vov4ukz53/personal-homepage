import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchRepositories, setRepositories, repositoriesRequestFailed } from "./mainPageSlice";
import { getRepositories } from "./getRepositories";

function* fetchRepositoriesHandler() {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositories);
    yield put(setRepositories(repositories));
  }
  catch (error) {
    yield put(repositoriesRequestFailed());
    console.error(error);
  }
};

function* mainPageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};

export default mainPageSaga;