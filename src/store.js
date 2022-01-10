import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "./MainPage/themeSlice";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        theme: themeReducer,
    },
    // middleware: [sagaMiddleware],
});

// sagaMiddleware.run();

export default store;