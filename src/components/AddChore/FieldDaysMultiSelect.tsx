import React, { ChangeEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid } from '@material-ui/core';

import { IDays } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row'
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

interface IFieldDaysMultiSelectProps {
  days: IDays;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

function FieldDaysMultiSelect({ days, onChange }: IFieldDaysMultiSelectProps) {
  const classes = useStyles();
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = days;

  return (
    <Grid item>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Days</FormLabel>
        <FormGroup className={classes.root}>
          <FormControlLabel
            control={<Checkbox checked={monday} onChange={onChange} name="monday" />}
            label="Monday"
          />
          <FormControlLabel
            control={<Checkbox checked={tuesday} onChange={onChange} name="tuesday" />}
            label="Tuesday"
          />
          <FormControlLabel
            control={<Checkbox checked={wednesday} onChange={onChange} name="wednesday" />}
            label="Wednesday"
          />
          <FormControlLabel
            control={<Checkbox checked={thursday} onChange={onChange} name="thursday" />}
            label="Thursday"
          />
          <FormControlLabel
            control={<Checkbox checked={friday} onChange={onChange} name="friday" />}
            label="Friday"
          />
          <FormControlLabel
            control={<Checkbox checked={saturday} onChange={onChange} name="saturday" />}
            label="Saturday"
          />
          <FormControlLabel
            control={<Checkbox checked={sunday} onChange={onChange} name="sunday" />}
            label="Sunday"
          />
        </FormGroup>
      </FormControl>
    </Grid>
  );
}

export default FieldDaysMultiSelect;
