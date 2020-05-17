import React, { useLayoutEffect } from 'react';
import { Button, Grid } from '@material-ui/core';

import { AddChoreForm } from './components';

import { dataRequest, request } from './utils';

function App() {
  async function requestAll() {
    const response = await dataRequest('http://localhost:3001/api/child/chores/Romeo', request.get)
    console.log({ response });
    const data = await response.json();
    console.log({ data });
  }

  useLayoutEffect(() => {
    requestAll();
  }, [])

  return (
    <Grid container>
      <Grid item>
        <Button color='primary' onClick={requestAll} variant='contained'>
          Re-request All Child Chores
        </Button>
      </Grid>

      <AddChoreForm />
    </Grid>
  )
}

export default App;
