import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import NationalitySwitch from './NationalitySwitch';

const NationalitySwitchGroup = ({ nationalities, onToggleNationality }) => {
  const handleChange = (event) => {
    onToggleNationality(event.target.name);
  };

  const styleHelperText = useMemo(() => ({ maxWidth: 400 }), []);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Select nationalities
      </FormLabel>
      <FormGroup>
        {Object.keys(nationalities).map((nationalityName) => (
          <NationalitySwitch
            key={nationalityName}
            checked={nationalities[nationalityName]}
            handleChange={handleChange}
            name={nationalityName}
          />
        ))}
      </FormGroup>
      <FormHelperText
        style={styleHelperText}
      >
        Please choose at least 1 nationality.
        Remember that if you toggle any switch, all
        previously loaded data on main page will be removed.
      </FormHelperText>
    </FormControl>
  );
};

export default NationalitySwitchGroup;

NationalitySwitchGroup.propTypes = {
  nationalities: PropTypes.objectOf(PropTypes.bool).isRequired,
  onToggleNationality: PropTypes.func.isRequired
};
