import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const NationalitySwitch = ({ checked, handleChange, name }) => {
  const label = name.charAt(0).toUpperCase() + name.substring(1);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          name={name}
        />
      }
      label={label}
    />
  );
};

export default NationalitySwitch;

NationalitySwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};