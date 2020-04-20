import React, { memo, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';

import UserModalTypographyGrid, { UserModalTypography } from './UserModalTypographyGrid';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0
  },
  media: {
    height: 200,
    [theme.breakpoints.up('sm')]: {
      height: 260,
    },
    [theme.breakpoints.up('md')]: {
      height: 300,
    },
    [theme.breakpoints.up('lg')]: {
      height: 340,
    }
  },
  content: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    },
  }
}));

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.user === nextProps.user;
};

const UserModal = memo(({ user, onCloseModal }) => {
  const classes = useStyles();

  const isOpen = useMemo(() => Boolean(user), [user]);
  const fullNameWithTitle = useMemo(() => {
    return `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;
  }, [user]);

  if (!user) { return null; }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'xs'}
      onClose={onCloseModal}
      aria-labelledby="user-dialog-title"
      open={isOpen}
    >
      <DialogTitle id="user-dialog-title">
        Details
      </DialogTitle>

      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={user.picture.large}
          title={`${fullNameWithTitle} face photo`}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
          >
            {fullNameWithTitle}
          </Typography>

          <UserModalTypographyGrid
            IconComponent={<PersonIcon color="primary" />}
            text={user.login.username}
          />

          <UserModalTypographyGrid
            IconComponent={<EmailIcon color="primary" />}
            text={user.email}
          />

          <UserModalTypographyGrid
            IconComponent={<PhoneIcon color="primary" />}
            text={user.phone}
          />

          <UserModalTypographyGrid
            IconComponent={<PhoneAndroidIcon color="primary" />}
            text={user.cell}
          />

          <UserModalTypographyGrid
            alignItems="center"
            IconComponent={<HomeIcon color="primary" />}
            CustomContent={
              <Grid
                container
                direction="column"
              >
                <Grid item xs>
                  <UserModalTypography
                    text={`${user.location.street.name} ${user.location.street.number}`}
                  />
                </Grid>
                <Grid item xs>
                  <UserModalTypography
                    text={`${user.location.postcode} ${user.location.city} `}
                  />
                </Grid>
                <Grid item xs>
                  <UserModalTypography
                    text={`${user.location.state} / ${user.location.country}`}
                  />
                </Grid>
              </Grid>
            }
          />

        </CardContent>
      </Card>
    </Dialog>
  );
}, shouldNotRerender);

export default UserModal;
