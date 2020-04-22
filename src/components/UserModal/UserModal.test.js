import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import userMockData from '../mocks/userMock'
import UserModal from './UserModal'

describe('UserModal', () => {
  let shallow;
  let wrapper;
  let closeModalMock;
  let userMock = { ...userMockData };

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    closeModalMock = jest.fn();
  });

  it('shallowly renders and matches snapshot', () => {
    wrapper = shallow(
      <UserModal
        user={userMock}
        onCloseModal={closeModalMock}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render null when no prop user provided', () => {
    wrapper = shallow(
      <UserModal
        user={null}
        onCloseModal={closeModalMock}
      />
    );
    expect(wrapper.html()).toBeNull();
  });
});