import React from 'react'
import TextField from '@material-ui/core/TextField'


const renderReqTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    required
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}    
    {...input}
    {...custom}
  />
)

  
export default renderReqTextField  