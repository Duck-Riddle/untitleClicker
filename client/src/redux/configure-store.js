import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, reduxThunk],
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga)