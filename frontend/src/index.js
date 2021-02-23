import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";

import App from "./App";
import Notifier from "./Notifier";
import configureStore, { sagaMiddleware } from "./app/store";
import * as serviceWorker from "./serviceWorker";
import rootSaga from "./sagas";
import {theme} from "./theme";

const store = configureStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Notifier />
            <App />
          </ThemeProvider>
        </SnackbarProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
