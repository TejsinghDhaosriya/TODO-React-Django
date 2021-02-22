import React, { useEffect } from 'react';
import { withProvider } from './store';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
 return (
    <Box p={2}>
      <Grid container direction='column'>
        <Grid item>
          <TodoInput />
        </Grid>
        <Grid item>
          <TodoList />
        </Grid>
      </Grid>
    </Box>
  );
};

// Anything within Todos component will be able to use withProvider
export default withProvider(Todos);
