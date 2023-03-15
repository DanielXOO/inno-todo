import React from 'react';
import { TextField } from '@mui/material';

const Email: React.FC<{
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}> = (props) => {
  return (
    <TextField
      id="email"
      variant="outlined"
      label="Email"
      margin="normal"
      size="small"
      value={props.email}
      onChange={(e) => {
        props.setEmail(e.target.value);
      }}
      sx={{
        width: '70%'
      }}
    />
  );
};

export default Email;
