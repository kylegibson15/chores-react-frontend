import React from 'react';
import { TextField } from '@material-ui/core';

interface IFieldDescriptionProps {
  onChange: any;
}

function FieldDescription({ onChange }: IFieldDescriptionProps) {

  return (
    <TextField
      id="description-text-field"
      label="Description"
      style={{ margin: 8 }}
      placeholder="Make sure sink is clean, etc."
      margin="dense"
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  )
}

export default FieldDescription;
