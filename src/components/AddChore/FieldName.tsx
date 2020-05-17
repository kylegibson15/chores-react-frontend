import React from 'react';
import { TextField } from '@material-ui/core';

interface IFieldNameProps {
  onChange: any;
}

function FieldName({ onChange }: IFieldNameProps) {

  return (
    <TextField
      id="chore-name-text-field"
      label="Chore"
      style={{ margin: 8 }}
      placeholder="ex. Clean Your Bathroom"
      margin="dense"
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  )
}

export default FieldName;
