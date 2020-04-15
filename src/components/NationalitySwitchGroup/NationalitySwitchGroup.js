import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import useContainer from './useContainer';
import NationalitySwitch from './NationalitySwitch';

const NationalitySwitchGroup = () => {
  const [{ nationalities }, { doToggleNationality }] = useContainer();

  const handleChange = (event) => {
    doToggleNationality(event.target.name);
  };

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
        style={{ maxWidth: 400 }}
      >
        Please choose at least 1 nationality.
        Remember that if you toggle any switch, all
        previously loaded data on main page will be removed.
      </FormHelperText>
    </FormControl>
  );
};

export default NationalitySwitchGroup;
