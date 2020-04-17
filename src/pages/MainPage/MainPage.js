import React from 'react';

import useModalContainer from './useModalContainer';
import useUsersContainer from './useUsersContainer';
import FeedbackSnackbar from '../../components/SnackbarAlert';
import UserModal from '../../components/UserModal';
import UsersGrid from '../../components/UsersGrid';

const MainPage = () => {
  const { user, isOpen, doOpenModal, doCloseModal } = useModalContainer();
  const { users, loading, doFetchUsers } = useUsersContainer();

  return (
    <>
      <FeedbackSnackbar
        open={loading}
        message={'Loading ... '}
      />
      <UserModal
        user={user}
        isOpen={isOpen}
        onCloseModal={doCloseModal}
      />
      <UsersGrid
        users={users}
        onFetchUsers={doFetchUsers}
        onOpenModal={doOpenModal}
      />
    </>
  );
};

export default MainPage;
