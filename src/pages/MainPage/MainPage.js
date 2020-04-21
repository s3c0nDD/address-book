import React from 'react';

import useModalContainer from '../../hooks/useModalContainer';
import useSearchContainer from '../../hooks/useSearchContainer';
import useUsersContainer from '../../hooks/useUsersContainer';

import ErrorSnackbar from '../../components/Snackbars/ErrorSnackbar';
import InfoSnackbar from '../../components/Snackbars/InfoSnackbar';
import UsersGridInfinite from '../../components/UsersGrids/UsersGridInfinite';
import UsersGridSearched from '../../components/UsersGrids/UsersGridSearched';
import UserModal from '../../components/UserModal';

const MainPage = () => {
  const { user: modalUser, doOpenModal, doCloseModal } = useModalContainer();
  const { error: loadingError, hasMore, loading: loadingUsers, users, doRequestMore } = useUsersContainer();
  const { processing: processingSearch, foundUsers, showResults: showSearchResults} = useSearchContainer();

  return (
    <>
      <ErrorSnackbar
        open={!!loadingError}
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
      <UsersGridSearched
        processing={processingSearch}
        show={showSearchResults}
        users={foundUsers}
        onOpenModal={doOpenModal}
      />
      <UsersGridInfinite
        hasMore={hasMore}
        hideView={showSearchResults}
        users={users}
        onLoadMore={doRequestMore}
        onOpenModal={doOpenModal}
      />
    </>
  );
};

export default MainPage;
