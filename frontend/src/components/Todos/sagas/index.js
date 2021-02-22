import { takeEvery } from "redux-saga/effects";
import { SAGA_FETCH_TODOS, SAGA_FETCH_TODO, SAGA_ADD_TODO ,SAGA_TODO_UPDATE,SAGA_TODO_DELETE,SAGA_GET_TODO_OPTIONS} from "../actions";
import { todoUpdateSaga ,todoDeleteSaga, todosListingSaga, todoAddSaga} from "./sagas";

export const todosSagas = [
  takeEvery(SAGA_FETCH_TODOS, todosListingSaga),
  takeEvery(SAGA_TODO_UPDATE, todoUpdateSaga),
  takeEvery(SAGA_TODO_DELETE, todoDeleteSaga),
  takeEvery(SAGA_ADD_TODO, todoAddSaga),
];
