import { configureStore } from "@reduxjs/toolkit";
import personalPageReducer from "./core/personalPageSlice";
import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "./common/ThemeSwitch/themeSlice";
import personalPageSaga from "./core/personalPageSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    repositories: personalPageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(personalPageSaga);

export default store;