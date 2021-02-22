import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Todo from "./Todo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <Box p={2}>
      <Grid container direction="column">
        <Grid item>
          <Todo />
        </Grid>
        <Grid item>
          <TodoList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Todos;
