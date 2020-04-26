import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

/**
 * Nationality switch component
 * @param {object} props component's props
 * @param {boolean} props.checked prop if switch is checked
 * @param {function} props.handleChange switch change handler
 * @param {string} props.name nationality's name
 */
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