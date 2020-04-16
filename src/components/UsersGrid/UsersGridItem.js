import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

import useContainer from '../UserModal/useContainer';

const useStyles = makeStyles({
  root: {
    maxWidth: 260
  },
  media: {
    height: 120
  }
});

const UsersGridItem = ({ user }) => {
  const classes = useStyles();

  const [, { doOpenModal }] = useContainer();

  const handleClick = () => {
    doOpenModal(user);
  };

  const fullName = `${user?.name.first} ${user?.name.last}`;

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={handleClick}
      >
        <CardMedia
          className={classes.media}
          image={user?.picture.large}
          title={`${fullName} face photo`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
          >
            {fullName}
          </Typography>

          <Grid
            container
            justify="flex-start"
            alignItems="stretch"
          >
            <Grid item xs={2}>
              <PersonIcon color="primary" />
            </Grid>
            <Grid item xs={10} zeroMinWidth>
              <Typography
                noWrap
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {user?.login.username}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={2}>
              <EmailIcon color="primary" />
            </Grid>
            <Grid item xs={10} zeroMinWidth>
              <Typography
                noWrap
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {user?.email}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UsersGridItem;
