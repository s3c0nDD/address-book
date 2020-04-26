import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import UserModalContent from './UserModalContent';

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
 * User modal component
 * @param {object} props component's props
 * @param {object} props.user modal user data
 * @param {function} props.onCloseModal modal close handler
 */
const UserModal = memo(({ user, onCloseModal }) => {
  const isOpen = useMemo(() => Boolean(user), [user]);

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

      <UserModalContent
        user={user}
      />
    </Dialog>
  );
}, shouldNotRerender);

export default UserModal;

UserModal.propTypes = {
  user: PropTypes.object,
  onCloseModal: PropTypes.func.isRequired
};