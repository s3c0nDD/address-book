import React from 'react';
import routeData from 'react-router';
import { createShallow } from '@material-ui/core/test-utils';

import TopBar from './TopBar';
import TopBarSearch from './TopBarSearch'

describe('TopBar', () => {
  let shallow;
  let component;
  let wrapper;
  let handleChangeMock;

  beforeAll(() => {
    shallow = createShallow();
    handleChangeMock = jest.fn();
    jest.spyOn(routeData, 'useLocation').mockImplementation(() => ({
      pathname: '/', hash: '', search: '', state: ''
    }));
  });

  beforeEach(() => {
    component = (
      <TopBar
        searchDisabled={false}
        searchText="example search"
        onSearchChange={handleChangeMock}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls change handler on TopBarSearch text change', () => {
    const searchWrapper = wrapper.find(TopBarSearch);
    const mockedEvent = { target: { value: searchWrapper.props().text }};
    searchWrapper.props().onTextChange(mockedEvent);
    expect(handleChangeMock).toBeCalledTimes(1);
    expect(handleChangeMock).toBeCalledWith('example search');
  });

  it('shows TopBarSearch when route is root', () => {
    const searchWrapper = wrapper.find(TopBarSearch);
    expect(searchWrapper).toBeTruthy();
  });
});
