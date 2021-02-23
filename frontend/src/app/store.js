import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from "../reducers";
import { loadState, saveState } from "../useLocalStorage";

export const sagaMiddleware = createSagaMiddleware();


export default function configureStore(preloadedState) {
  const persistedState = loadState() || {};
  const store = createStore(
    createRootReducer(), // root reducer with router state
    { ...(preloadedState || {}), ...persistedState },
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

  

  return store;
}
