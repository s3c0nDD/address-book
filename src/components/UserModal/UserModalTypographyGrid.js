import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserModalTypography = ({ text }) => (
  <Typography
    variant="body2"
    color="textSecondary"
    component="p"
  >
    {text}
  </Typography>
);

const UserModalTypographyGrid = ({ IconComponent, CustomContent, text, ...props }) => {
  return (
    <Grid container {...props}>
      <Grid item xs={2}>
        { IconComponent }
      </Grid>
      <Grid item xs={10}>
        {text
          ? <UserModalTypography text={text} />
          : CustomContent
        }
      </Grid>
    </Grid>
  );
};

export default UserModalTypographyGrid;

export {
  UserModalTypography
}