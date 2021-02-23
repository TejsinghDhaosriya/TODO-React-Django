import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from "../reducers";

export const sagaMiddleware = createSagaMiddleware();


export default function configureStore() {
  const store = createStore(
    createRootReducer(), 
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

  

  return store;
}
