import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 260
  },
  media: {
    height: 80,
    [theme.breakpoints.up('sm')]: {
      height: 100,
    },
    [theme.breakpoints.up('md')]: {
      height: 120,
    },
    [theme.breakpoints.up('lg')]: {
      height: 150,
    }
  }
}));

/**
 * Checks props and decide if should not re-render
 * @param {object} prevProps previous props
 * @param {object} nextProps next props
 * @returns {boolean}
 */
const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.user === nextProps.user;
};

/**
 * User grid layout item component
 * @param {object} props component's props
 * @param {object} props.user user data
 * @param {function} props.onOpenModal user modal open handler
 */
const UsersGridLayoutItem = memo(({ user, onOpenModal }) => {
  const classes = useStyles();

  /**
   * Handle grid layout item media click
   */
  const handleClick = () => {
    onOpenModal(user);
  };

  const fullName = useMemo(() => (
    `${user.name.first} ${user.name.last}`
  ), [user]);

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={handleClick}
      >
        <CardMedia
          className={classes.media}
          image={user.picture.large}
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
            <Grid item xs={3} md={2}>
              <PersonIcon color="primary" />
            </Grid>
            <Grid item xs={9} md={10} zeroMinWidth>
              <Typography
                noWrap
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {user.login.username}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3} md={2}>
              <EmailIcon color="primary" />
            </Grid>
            <Grid item xs={9} md={10} zeroMinWidth>
              <Typography
                noWrap
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {user.email}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}, shouldNotRerender);

export default UsersGridLayoutItem;

UsersGridLayoutItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired
    }).isRequired,
    login: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired
};