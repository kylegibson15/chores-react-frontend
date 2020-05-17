import React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Theme } from '@material-ui/core';

interface IFieldTimeOfDayProps {
  onChange: any;
  value: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 25
  }
}));

function FieldTimeOfDay({ onChange, value }: IFieldTimeOfDayProps) {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Time Of Day</FormLabel>
        <RadioGroup row aria-label="time of day" name="timeOfDay" value={value} onChange={onChange}>
          <FormControlLabel value="morning" control={<Radio />} label="morning" />
          <FormControlLabel value="school_and_work" control={<Radio />} label="school work" />
          <FormControlLabel value="afternoon" control={<Radio />} label="afternoon" />
          <FormControlLabel value="evening" control={<Radio />} label="evening" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

export default FieldTimeOfDay;