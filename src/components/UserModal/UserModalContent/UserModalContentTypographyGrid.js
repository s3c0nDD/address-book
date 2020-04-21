import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserModalContentTypography = ({ text }) => (
  <Typography
    variant="body2"
    color="textSecondary"
    component="p"
  >
    {text}
  </Typography>
);

const UserModalContentTypographyGrid = ({ IconComponent, CustomContent, text, ...props }) => {
  return (
    <Grid container {...props}>
      <Grid item xs={2}>
        { IconComponent }
      </Grid>
      <Grid item xs={10}>
        {text
          ? <UserModalContentTypography text={text} />
          : CustomContent
        }
      </Grid>
    </Grid>
  );
};

export default UserModalContentTypographyGrid;

export {
  UserModalContentTypography
}

UserModalContentTypographyGrid.propTypes = {
  IconComponent: PropTypes.element.isRequired,
  CustomContent: PropTypes.element,
  text: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.any)
};

UserModalContentTypography.propTypes = {
  text: PropTypes.string.isRequired,
};