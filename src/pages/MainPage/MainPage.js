import React from 'react';

import useModalContainer from './useModalContainer';
import useUsersContainer from './useUsersContainer';
import ErrorSnackbar from '../../components/ErrorSnackbar';
import InfoSnackbar from '../../components/InfoSnackbar';
import UserModal from '../../components/UserModal';
import UsersGrid from '../../components/UsersGrid';

const MainPage = () => {
  const { user, isOpen, doOpenModal, doCloseModal } = useModalContainer();
  const { error, hasMore, loading, users, doRequestMore } = useUsersContainer();

  return (
    <>
      <ErrorSnackbar
        open={error}
      />
      <InfoSnackbar
        open={loading}
        message={'Loading ... '}
      />
      <UserModal
        user={user}
        isOpen={isOpen}
        onCloseModal={doCloseModal}
      />
      <UsersGrid
        hasMore={hasMore}
        users={users}
        onLoadMore={doRequestMore}
        onOpenModal={doOpenModal}
      />
    </>
  );
};

export default MainPage;
