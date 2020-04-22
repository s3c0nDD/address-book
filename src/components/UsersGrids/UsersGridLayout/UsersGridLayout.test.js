import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import userMockData from '../../mocks/userMock';
import UsersGridLayout from './UsersGridLayout'
import UsersGridLayoutItem from './UsersGridLayoutItem'

describe('UsersGridLayout', () => {
  let shallow;
  let wrapper;
  let openModalMock;
  let usersMock = [{ ...userMockData }, { ...userMockData, id: { value: 'foobaz' }}];

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    openModalMock = jest.fn();
    wrapper = shallow(
      <UsersGridLayout
        users={usersMock}
        onOpenModal={openModalMock}
      />
    );
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls prop onOpenModal for every UsersGridLayoutItem onOpenModal call', () => {
    let layoutItemWrappers = wrapper.find(UsersGridLayoutItem);
    layoutItemWrappers.forEach((node) => {
      node.props().onOpenModal();
    });
    expect(openModalMock).toBeCalledTimes(2);
  });
});