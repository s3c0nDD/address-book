import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal, selectModalUser } from '../store/module';

const useModalContainer = () => {
  const dispatch = useDispatch();

  const user =  useSelector(selectModalUser);

  const doOpenModal = useCallback((user) => {
    dispatch(openModal(user))
  }, [dispatch]);
  const doCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return { user, doOpenModal, doCloseModal }
};

export default useModalContainer;