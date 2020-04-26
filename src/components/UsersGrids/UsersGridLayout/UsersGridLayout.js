import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import UsersGridLayoutItem from './UsersGridLayoutItem';

/**
 * Checks props and decide if should not re-render
 * @param {object} prevProps previous props
 * @param {object} nextProps next props
 * @returns {boolean}
 */
const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users;
};

/**
 * User grid layout component
 * @param {object} props component's props
 * @param {array} props.users users data
 * @param {function} props.onOpenModal user modal open handler
 */
const UsersGridLayout = memo(({ users, onOpenModal }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      {users?.map((user) => (
        <Grid
          item
          key={user.id.value}
          xs={6}
          sm={4}
          md={3}
          lg={2}
        >
          <UsersGridLayoutItem
            user={user}
            onOpenModal={onOpenModal}
          />
        </Grid>
      ))}
    </Grid>
  );
}, shouldNotRerender);

export default UsersGridLayout;

UsersGridLayout.propTypes = {
  users: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired
};