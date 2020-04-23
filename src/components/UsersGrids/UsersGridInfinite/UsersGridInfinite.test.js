import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import userMockData from '../../mocks/userMock';
import UsersGridInfinite from './UsersGridInfinite'

describe('UsersGridInfinite', () => {
  let shallow;
  let wrapper;
  let component;
  let openModalMock;
  let loadMoreMock;
  let usersMock = [{ ...userMockData }, { ...userMockData, id: { value: 'foobaz' }}];

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    openModalMock = jest.fn();
    loadMoreMock = jest.fn();
    component = (
      <UsersGridInfinite
        hasMore={true}
        users={usersMock}
        hideView={false}
        onOpenModal={openModalMock}
        onLoadMore={loadMoreMock}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});