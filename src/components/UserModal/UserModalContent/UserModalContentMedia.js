import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
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
  }
}));

const UserModalContentMedia = ({ user }) => {
  const classes = useStyles();

  const photoTitle = useMemo(() => (
    `${user.name.title} ${user.name.first} ${user.name.last} photo`
  ), [user]);

  return (
    <CardMedia
      className={classes.media}
      image={user.picture.large}
      title={photoTitle}
    />
  );
};

export default UserModalContentMedia;

UserModalContentMedia.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};