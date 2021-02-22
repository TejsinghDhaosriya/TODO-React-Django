import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// import { routerMiddleware } from "connected-react-router";
import { throttle } from "lodash";

// import history from "../history";
import createRootReducer from "../reducers";
import { loadState, saveState } from "../localStorageState";

export const sagaMiddleware = createSagaMiddleware();

// export default store;

export default function configureStore(preloadedState) {
  const persistedState = loadState() || {};
  const store = createStore(
    createRootReducer(), // root reducer with router state
    { ...(preloadedState || {}), ...persistedState },
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

  store.subscribe(
    throttle(() => saveState({ auth: store.getState().auth })),
    1000
  );

  return store;
}
