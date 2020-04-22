import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';

import UserModalContentTypographyGrid, {
  UserModalContentTypography
} from './UserModalContentTypographyGrid';

const useStyles = makeStyles(theme => ({
  content: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    },
  }
}));

const UserModalContentInfo = ({ user }) => {
  const classes = useStyles();

  const fullNameWithTitle = useMemo(() => (
    `${user.name.title} ${user.name.first} ${user.name.last}`
  ), [user]);

  return (
    <CardContent className={classes.content}>
      <Typography
        gutterBottom
        variant="h4"
        component="h2"
      >
        {fullNameWithTitle}
      </Typography>

      <UserModalContentTypographyGrid
        IconComponent={<PersonIcon color="primary"/>}
        text={user.login.username}
      />

      <UserModalContentTypographyGrid
        IconComponent={<EmailIcon color="primary"/>}
        text={user.email}
      />

      <UserModalContentTypographyGrid
        IconComponent={<PhoneIcon color="primary"/>}
        text={user.phone}
      />

      <UserModalContentTypographyGrid
        IconComponent={<PhoneAndroidIcon color="primary"/>}
        text={user.cell}
      />

      <UserModalContentTypographyGrid
        alignItems="center"
        IconComponent={<HomeIcon color="primary"/>}
        CustomContent={
          <Grid
            container
            direction="column"
          >
            <Grid item xs>
              <UserModalContentTypography
                text={`${user.location.street.name} ${user.location.street.number}`}
              />
            </Grid>
            <Grid item xs>
              <UserModalContentTypography
                text={`${user.location.postcode} ${user.location.city}`}
              />
            </Grid>
            <Grid item xs>
              <UserModalContentTypography
                text={`${user.location.state} / ${user.location.country}`}
              />
            </Grid>
          </Grid>
        }
      />
    </CardContent>
  );
};

export default UserModalContentInfo;

UserModalContentInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }).isRequired,
    login: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
    location: PropTypes.shape({
      street: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
      }).isRequired,
      postcode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};