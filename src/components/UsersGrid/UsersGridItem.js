import React, { useMemo, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    maxWidth: 260
  },
  media: {
    height: 120
  }
});

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.user === nextProps.user;
};

const UsersGridItem = memo(({ user, onOpenModal }) => {
  const classes = useStyles();

  const handleClick = () => {
    onOpenModal(user);
  };

  const fullName = useMemo(() => {
    return `${user?.name.first} ${user?.name.last}`;
  }, [user]);

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
}, shouldNotRerender);

export default UsersGridItem;
