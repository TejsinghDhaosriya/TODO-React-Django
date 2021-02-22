import React, { useState } from "react";
// import  DateTimePicker  from 'formik-material-ui-pickers/dist/';
import { useTodos } from "./store";
import Box from "@material-ui/core/Box";

import { isEmpty, isPlainObject } from "lodash";
import { Formik, Form, Field } from "formik";

// import  DateTimePicker  from 'formik-material-ui-pickers/dist/DateTimePicker';
// import  DateTimePicker  from '@material-ui/pickers/DateTimePicker'
// import {
//     SimpleFileUpload,
//     RadioGroup,
//     // TextField,
//     Switch as Switchs,

//   } from "formik-material-ui";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  useTheme,
  Button,
  LinearProgress,
  Grid,
  FormControlLabel,
  Radio,
  Divider,
  Drawer,
  Typography,
  Tooltip,
  IconButton,
  Switch,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectTodo } from "./todosSlice";
import { todoAdd, todoUpdate } from "./actions";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 400,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
}));

const TodoInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");
  const todo = useSelector(selectTodo);
  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  const [active, setActive] = React.useState(false);

  return (
    <Grid container>
      <Grid item className={classes.sideBarDrawer}>
        <Grid item container direction="row">
          <Grid item xs>
            <Typography variant="h6">
              {isPlainObject(todo) && !isEmpty(todo)
                ? "Update Todo"
                : "Create New Todo"}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
          <Formik
            initialValues={{
              name: todo?.name || "",
              from: todo?.todo_from,
              to: todo?.todo_to,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "*Required";
              }
              if (!values.from) {
                errors.from = "*Required";
              }
              if (!values.to) {
                errors.to = "*Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              values["is_active"] = active;
              console.log("va", values);
               
        const ft=new Date(values['from']).getTime();
        values['from']=String(ft).substr(0,10)
        const tt=new Date(values['to']).getTime();
        values['to']=String(tt).substr(0,10)
        console.log("v2a", values);
              // if (!(todo?.id))
              //   dispatch(
              //     todoAdd({
              //       values,
              //       setSubmitting,

              //     })
              //   );
              // else {
              //   delete values.File;
              //   values["id"] = todo?.id;
              //   dispatch(
              //     todoUpdate({
              //       values,
              //       setSubmitting,
              //     })
              //   );
              // }
            }}
          >
            {({ submitForm, isSubmitting ,errors}) => (
              <Form style={{ padding: theme.spacing(1) }}>
                <Typography variant="subtitle1">
                  What's in your mind ??
                </Typography>
                <Field name="name"  />
                {errors.name}
                <Typography variant="subtitle1">From</Typography>
                <Field
                  id="datetime-from"
                  type="datetime-local"
                  name="from"
                  defaultValue="2020-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.from}
                <Typography variant="subtitle1">To</Typography>
                <Field
                  id="datetime-to"
                  type="datetime-local"
                  name="to"
                  defaultValue="2020-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {errors.to}
                <Typography variant="subtitle1">Status</Typography>
                <Switch
                  checked={active}
                  onChange={() => {
                    console.log(active);
                    setActive(!active);
                  }}
                  color="primary"
                  name="is_active"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitForm}
                  style={{ marginTop: theme.spacing(2), float: "right" }}
                >
                  {isPlainObject(todo) && !isEmpty(todo)
                    ? "Update Todo"
                    : "Create New Todo"}
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoInput;
