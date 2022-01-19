import { configureStore } from "@reduxjs/toolkit";
import mainPageReducer from "./MainPage/mainPageSlice";
import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "./MainPage/themeSlice";
import mainPageSaga from "./MainPage/mainPageSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        theme: themeReducer,
        repositories: mainPageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(mainPageSaga);

export default store;