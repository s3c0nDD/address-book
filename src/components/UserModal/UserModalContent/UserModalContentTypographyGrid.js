import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/**
 * User modal content typography component
 * @param {object} props component's props
 * @param {string} props.text text to present
 */
const UserModalContentTypography = ({ text }) => (
  <Typography
    variant="body2"
    color="textSecondary"
    component="p"
  >
    {text}
  </Typography>
);

/**
 * User modal content typography grid component
 * @param {object} props component's props
 * @param {function} props.IconComponent icon component to present with text
 * @param {function} props.CustomContent custom component to present with text
 * @param {string} props.text text to present
 */
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