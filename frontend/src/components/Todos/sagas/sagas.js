import { put, call, select } from "redux-saga/effects";
import { get } from "lodash";
import { v4 as uuid } from "uuid";
import { enqueueSnackbar } from "../../../actions/snackbar";
import {
  getTodosListing,
  putTodoUpdate,
  postTodoAdd,
  deleteTodoDelete,
  getTodoOptions,
} from "../api";
import {
  setTodosLoading,
  setTodoLoading,
  setTodos,
  setTodo,
  selectTodos,
} from "../todosSlice";
import { todosListing } from "../actions";

export function* todosListingSaga(params) {
  try {
    yield put(setTodosLoading(true));
    const fetchedTodos = yield call(getTodosListing, params.data);
    yield put(setTodos(fetchedTodos.data));
    yield put(setTodosLoading(false));
  } catch (err) {
    yield put(setTodosLoading(false));
    yield put(
      enqueueSnackbar({
        message: "Todos Fetch Failed!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
}

export function* todoUpdateSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;
  try {
    if (setSubmitting) setSubmitting(true);
    yield call(putTodoUpdate, values, values?.id);
    yield put(todosListing())
    yield put(
      enqueueSnackbar({
        message: "Todo Update Successful!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );
  } catch (err) {
    yield put(
      enqueueSnackbar({
        message: "Todo Update Failed!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
  if (setSubmitting) setSubmitting(false);
}

export function* todoAddSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;

  try {
    if (setSubmitting) setSubmitting(true);
    const { data: result } = yield call(postTodoAdd, values);
    const todos = yield select(selectTodos);
    const newTodos = [...todos, result];

    yield put(setTodos(newTodos));
    yield put(
      enqueueSnackbar({
        message: "Todo Added Successful!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );
  } catch (err) {
    yield put(
      enqueueSnackbar({
        message: "Todo Added Failed!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
  setSubmitting(false);
}

export function* todoDeleteSaga(params) {
  try {
    const result = yield call(deleteTodoDelete, params?.data);
    if (result?.status === 202) {
      const todos = yield select(selectTodos);
      const newTodos = (todos || []).filter((r) => r?.id !== params?.data);

      yield put(setTodos(newTodos));
    }

    yield put(
      enqueueSnackbar({
        message: "Todo Deleted Successful!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );
  } catch (err) {
    yield put(
      enqueueSnackbar({
        message: "Todo Deleted Failed!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
}

