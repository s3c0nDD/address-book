import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import UserModalContentInfo from './UserModalContentInfo';
import UserModalContentMedia from './UserModalContentMedia';


const useStyles = makeStyles({
  card: {
    borderRadius: 0
  }
});

/**
 * User modal content component
 * @param {object} props component's props
 * @param {object} props.user modal user data
 */
const UserModalContent = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <UserModalContentMedia
        user={user}
      />
      <UserModalContentInfo
        user={user}
      />
    </Card>
  );
};

export default UserModalContent;

UserModalContent.propTypes = {
  user: PropTypes.object.isRequired
};