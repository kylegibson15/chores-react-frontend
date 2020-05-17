import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import ChoreCard from './ChoreCard';

import { dataRequest, request } from '../utils';

interface IIncompleteByDayProps {
  day: string;
}

const initialChore = [{
  completed: false,
  days: { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: true },
  description: null,
  name: "No Chores Yet",
  _id: "5ec04ae4ff8fd3c7ee92bbed",
}]

function IncompleteByDay({ day }: IIncompleteByDayProps) {
  const [morningChores, setMorningChores] = useState(initialChore);

  const requestAll = useCallback(async (timeOfDay) => {
    const requestHeader = `http://localhost:3001/api/child/chores/Romeo/${day}/${timeOfDay}`;
    const response = await dataRequest(requestHeader, request.get)
    if (response) {
      const data = await response.json();
      console.log({ data });
      setMorningChores(data.morning);
    }
  }, [day])


  useLayoutEffect(() => {
    requestAll('morning');
  }, [requestAll])

  const ChoreList = React.memo<any>(() => {
    return morningChores && morningChores.map((chore, index) => {
      const { completed, description, _id, name } = chore;
      return <ChoreCard completed={completed} description={description} index={index} key={_id} name={name} id={_id} />
    })
  });

  return (
    <Grid container spacing={1}>
      <ChoreList />
    </Grid>
  )
}

export default IncompleteByDay;
