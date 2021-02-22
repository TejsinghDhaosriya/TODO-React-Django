import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useTodos } from "./store";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { todosListing } from "./actions";
import { selectTodos } from "./todosSlice";
import { Typography } from "@material-ui/core";
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos)
  const [filter, setFilter] = useState("all");
//   const { todos as todos_list, toggleTodo, removeTodo } = useTodos();
console.log(todos)
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
        {todos?.map((todo) => (
            <ListItem key={todo.id} >
              <ListItemText primary={todo.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  checked="true"
                //   onClick={() => toggleTodo(todo.id)}
                />
                <IconButton 
                //onClick={() => removeTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        ))}
      </List>
      <Box p={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("all")}
        >
          All
        </Button>
      </Box>
      <Box p={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </Box>
      <Box p={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("not_completed")}
        >
          Due
        </Button>
      </Box>
    </>
  );
};

export default TodoList;
