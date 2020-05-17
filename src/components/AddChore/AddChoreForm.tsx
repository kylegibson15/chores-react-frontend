import React, { ChangeEvent, useState } from 'react';
import { Button, Grid, Slide, Snackbar, makeStyles, Theme } from '@material-ui/core';
// import { Alert } from '@material-ui/lab';

import FieldDaysMultiSelect from './FieldDaysMultiSelect';
import FieldDescription from './FieldDescription';
import FieldName from './FieldName';
import FieldTimeOfDay from './FieldTimeOfDay';
import { dataRequest, request } from '../../utils';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 15,
    width: '70vw'
  },
  submit: {
    marginTop: 30
  }
}));

function TransitionLeft(props: any) {
  return <Slide {...props} direction="left" />;
}

interface IResponse {
  status: 'success' | 'error' | undefined;
  message: string;
}

function AddChoreForm() {
  const [days, setDays] = useState({
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });
  const [description, setDescription] = useState<string | null>(null);
  const classes = useStyles();
  const [name, setName] = useState<string | null>(null);
  const [response, setResponseStatus] = useState<IResponse>({ status: undefined, message: '' });
  const [timeOfDay, setTimeOfDay] = useState('morning');

  function onDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event?.target?.value);
  }

  function onNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event?.target?.value);
  }

  function onTimeOfDayChange(event: ChangeEvent<HTMLInputElement>) {
    setTimeOfDay(event?.target?.value);
  };

  function onDaysChange(event: ChangeEvent<HTMLInputElement>) {
    setDays({ ...days, [event.target.name]: event.target.checked });
  };

  function onSelectDeselectAllDays() {
    const checkedArray = Object.values(days)
    const isAnyFalse = checkedArray.some(checked => checked === false)
    console.log({ isAnyFalse });
    if (isAnyFalse) {
      setDays({
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
      })
    } else {
      setDays({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      })
    }
    
  }

  // function showMessage(response: any) {
  //   const { message, success } = response;
  //   if (!success) {
  //     setResponseStatus({ status: 'error', message })
  //   } else {
  //     setResponseStatus({ status: 'success', message })
  //   }
  //   setTimeout(() => {
  //     setResponseStatus({ status: undefined, message: '' })
  //   }, 2000)
  // }

  async function addChore() {
    const header = request.post({ days, description, name, timeOfDay });

    const response = await dataRequest('http://localhost:3001/api/child/Romeo/createChore', header)
    return await response.json();
  }

  async function onSubmit(event: any) {
    event.preventDefault();
    const data = await addChore();
    console.log({ data });
    
  }

  return (
    <Grid container className={classes.root} direction='column'>
      <FieldName onChange={onNameChange} />

      <FieldDescription onChange={onDescriptionChange} />

      <FieldTimeOfDay onChange={onTimeOfDayChange} value={timeOfDay} />

      <Grid item className={classes.submit}>
        <Button color='primary' onClick={onSelectDeselectAllDays} variant='contained'>
          Select / Deselect All
        </Button>
      </Grid>

      <FieldDaysMultiSelect days={days} onChange={onDaysChange} />

      <Grid item className={classes.submit}>
        <Button color='primary' onClick={onSubmit} variant='contained'>
          Submit
        </Button>
      </Grid>

      {/* <Snackbar
        open={!!response.status}
        TransitionComponent={TransitionLeft}
      >
        <Alert severity={response.status}>
          {response.message}
        </Alert>
      </Snackbar> */}
    </Grid>
  )
}

export default AddChoreForm;
