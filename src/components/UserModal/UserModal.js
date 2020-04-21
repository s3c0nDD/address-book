import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import UserModalContent from './UserModalContent';

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.user === nextProps.user;
};

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