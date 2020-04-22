import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import CardActionArea from '@material-ui/core/CardActionArea';

import userMockData from '../../mocks/userMock';
import UsersGridLayoutItem from './UsersGridLayoutItem'

describe('UsersGridLayoutItem', () => {
  let shallow;
  let wrapper;
  let openModalMock;
  let userMock = { ...userMockData };

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    openModalMock = jest.fn();
    wrapper = shallow(
      <UsersGridLayoutItem
        user={userMock}
        onOpenModal={openModalMock}
      />
    );
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls open modal handler on CardActionArea click', () => {
    const actionWrapper = wrapper.find(CardActionArea);
    actionWrapper.props().onClick();
    expect(openModalMock).toBeCalledTimes(1);
    expect(openModalMock).toBeCalledWith(userMock);
  });
});