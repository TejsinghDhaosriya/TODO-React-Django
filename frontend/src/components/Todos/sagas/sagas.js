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
    const data = yield call(formData, values);
    const { data: result } = yield call(putTodoUpdate, data, values?.id);
    const todos = yield select(selectTodos);
    const newTodos = {
      ...todos,
      results:  (todos?.results || []).todo((r) => {
              if (r.id === result.id) {
                return {
                  ...r,
                  ...result,
                };
              }
              return r;
            })
    };
    yield put(setTodos(newTodos));
    yield put(setTodo(result));
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
    
    const data = yield call(formData, values);
    const { data: result } = yield call(postTodoAdd, data);
    const todos = yield select(selectTodos);
    const newTodos = {
      ...todos,
      results: [...todos?.results, result],
    };
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
      const newTodos = {
        ...todos,
        count: todos.count - 1,
        results: (todos?.results || []).filter((r) => r?.id !== params?.data),
      };
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


const formData = (values) => {
  let formData = new FormData();
  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });
  return formData;
};
