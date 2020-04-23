import React from 'react';
import { createMount, createShallow } from '@material-ui/core/test-utils';

import userMockData from '../../mocks/userMock';
import UsersGridSearched from './UsersGridSearched'

describe('UsersGridSearched', () => {
  let shallow;
  let mount;
  let wrapper;
  let component;
  let openModalMock;
  let scrollMock;
  let usersMock = [{ ...userMockData }, { ...userMockData, id: { value: 'foobaz' }}];

  beforeAll(() => {
    shallow = createShallow();
    mount = createMount();
    scrollMock = jest.fn();
    jest.spyOn(window, 'scroll').mockImplementation(scrollMock);
  });

  afterAll(() => {
    window.scroll.mockClear();
  });

  beforeEach(() => {
    openModalMock = jest.fn();
    component = (
      <UsersGridSearched
        show={true}
        processing={false}
        users={usersMock}
        onOpenModal={openModalMock}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render null when prop show is not truthy', () => {
    wrapper = mount(
      <UsersGridSearched
        show={false}
        processing={false}
        users={usersMock}
        onOpenModal={openModalMock}
      />
    );
    expect(wrapper.html()).toBeNull();
  });
});