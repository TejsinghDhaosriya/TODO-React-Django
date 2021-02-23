import { all } from "redux-saga/effects";

import { todosSagas } from "../components/Todos/sagas/index";

export default function* rootSaga() {
  yield all([...todosSagas]);
}
