import { configureStore } from "@reduxjs/toolkit";
import personalPageReducer from "../personalPageSlice";
import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "../../common/ThemeSwitch/themeSlice";
import personalPageSaga from "../personalPageSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    repositories: personalPageReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(personalPageSaga);

export default store;