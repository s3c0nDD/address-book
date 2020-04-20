import React from 'react';

import useModalContainer from '../../hooks/useModalContainer';
import useSearchContainer from '../../hooks/useSearchContainer';
import useUsersContainer from '../../hooks/useUsersContainer';
import ErrorSnackbar from '../../components/Snackbars/ErrorSnackbar';
import InfoSnackbar from '../../components/Snackbars/InfoSnackbar';
import UserModal from '../../components/UserModal';
import UsersGrid from '../../components/UsersGrid';

const MainPage = () => {
  const { user: modalUser, doOpenModal, doCloseModal } = useModalContainer();
  const { error, hasMore, loading: loadingUsers, users, doRequestMore } = useUsersContainer();
  const { processing: processingSearch, foundUsers, showResults } = useSearchContainer();

  return (
    <>
      <ErrorSnackbar
        open={error}
      />
      <InfoSnackbar
        open={loadingUsers}
        message={'Loading ... '}
      />
      <InfoSnackbar
        open={processingSearch}
        message={'Searching ... '}
      />
      <UserModal
        user={modalUser}
        onCloseModal={doCloseModal}
      />
      <UsersGrid
        hasMore={hasMore}
        users={users}
        usersSearched={foundUsers}
        showSearchResults={showResults}
        onLoadMore={doRequestMore}
        onOpenModal={doOpenModal}
      />
    </>
  );
};

export default MainPage;
