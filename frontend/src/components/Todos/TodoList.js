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

import { todoDelete, todoDetails, todosListing, todoUpdate } from "./actions";
import {
  selectTodo,
  selectTodos,
  selectTodosLoading,
  setFormDrawerOpen,
  setTodo,
} from "./todosSlice";
import {
  Typography,
  CircularProgress,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  loader: { textAlign: "center", padding: "7rem" },
  table: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
    },
  },
  tableRowCell: {
    padding: "0.5rem",
    whitepace: "nowrap",
    maxWidth: "4rem",
    overflow: "hidden",
    border: "none",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "0.1rem",
    },
  },
}));
const TodoList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const todos = useSelector(selectTodos);

  const todosLoading = useSelector(selectTodosLoading);
  console.log(todos);
  useEffect(() => {
    dispatch(todosListing());
  }, []);

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableRowCell}>Name</TableCell>
                  <TableCell className={classes.tableRowCell}>Date</TableCell>
                  <TableCell className={classes.tableRowCell}>From</TableCell>
                  <TableCell className={classes.tableRowCell}>To</TableCell>
                  <TableCell className={classes.tableRowCell}>
                    Status/Edit
                  </TableCell>
                  <TableCell className={classes.tableRowCell}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todosLoading ? (
                  <div className={classes.loader}>
                    <CircularProgress />
                  </div>
                ) : !todos?.length>0 ? (
                  <Typography style={{textAlign:"center",padding:"2rem"}}>No Todo Available</Typography>
                ) : (
                  todos?.map((todo) => (
                    <TableRow key={todo.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableRowCell}
                      >
                        {todo.name}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableRowCell}
                      >
                        {todo.date}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableRowCell}
                      >
                        {todo.todo_from}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableRowCell}
                      >
                        {todo.todo_to}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableRowCell}
                      >
                        <Checkbox
                          checked={todo?.is_active}
                          onClick={(e) => {
                            dispatch(setFormDrawerOpen(false));
                            dispatch(setTodo({}));
                            dispatch(setFormDrawerOpen(true));
                            dispatch(setTodo(todo.id));
                            e.stopPropagation();
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableRowCell}
                      >
                        <IconButton
                          onClick={(e) => {
                            dispatch(todoDelete(todo.id));
                            e.stopPropagation();
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item>
          {" "}
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(todosListing())}
              >
                All
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(todosListing({ is_active: true }))}
              >
                Completed
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(todosListing({ is_active: false }))}
              >
                Not Completed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoList;
