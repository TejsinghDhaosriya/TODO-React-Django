import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { todoDelete, todosListing } from "./actions";
import { selectTodos, selectTodosLoading } from "./todosSlice";
import {
  Typography,
  CircularProgress,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loader: { textAlign: "center", padding: "7rem" },
}));
const TodoList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const todos = useSelector(selectTodos);
  const todosLoading = useSelector(selectTodosLoading);
  const [filter, setFilter] = useState("all");
  //   const { todos as todos_list, toggleTodo, removeTodo } = useTodos();
  console.log(todos);
  useEffect(() => {
    dispatch(todosListing());
  }, []);
  const filteredTodos = useMemo(() => {
    if (filter === "all") {
      return todos;
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (filter === "not_completed") {
      return todos.filter((todo) => !todo.completed);
    }
  }, [todos, filter]);




  return (
    <>
      <List>
        {todosLoading ? (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        ) : (
          todos?.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.name} />
              <ListItemText primary={todo.date} />
              <ListItemText primary={todo.todo_from} />
              <ListItemText primary={todo.todo_to} />
              <ListItemSecondaryAction>
                <Checkbox
                  checked={todo?.is_active}
                  //   onClick={() => toggleTodo(todo.id)}
                />
                <IconButton
                onClick={() => dispatch(todoDelete(todo.id))}
                >
                  <DeleteIcon />
                </IconButton>
             
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List>
      <Box p={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(todosListing())}
        >
          All
        </Button>
      </Box>
      <Box p={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(todosListing({ is_active: true }))}
        >
          Completed
        </Button>
      </Box>
      <Box p={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(todosListing({ is_active: false }))}
        >
          Not Completed
        </Button>
      </Box>
     
    </>
  );
};

export default TodoList;
