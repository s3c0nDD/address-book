import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal } from '../../store/module';
import { useCallback } from 'react';

const useModalContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.app.modalUser);
  const isOpen = Boolean(user);

  const doOpenModal = useCallback((user) => {
    dispatch(openModal(user))
  }, [dispatch]);
  const doCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return { user, isOpen, doOpenModal, doCloseModal }
};

export default useModalContainer;