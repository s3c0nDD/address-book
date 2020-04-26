import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal, selectModalUser } from '../store/module';

/**
 * Custom React hook that acts as
 * a modal-related data container
 *
 * @returns {Object}
 */
const useModalContainer = () => {
  const dispatch = useDispatch();

  /**
   * Modal's user state selector
   */
  const user =  useSelector(selectModalUser);

  /**
   * Open a user's modal
   * @param {object} user user to show on the rendered modal
   */
  const doOpenModal = useCallback((user) => {
    dispatch(openModal(user))
  }, [dispatch]);

  /**
   * Close a user's modal
   */
  const doCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return { user, doOpenModal, doCloseModal }
};

export default useModalContainer;