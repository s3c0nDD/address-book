import { useDispatch, useSelector } from 'react-redux';

import { openModal, closeModal } from '../../store/module';

const useContainer = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.app.modalUser);
  const isOpen = Boolean(user);

  const doOpenModal = (user) => dispatch(openModal(user));
  const doCloseModal = () => dispatch(closeModal());

  return [{ user, isOpen }, { doOpenModal, doCloseModal }]
};

export default useContainer;