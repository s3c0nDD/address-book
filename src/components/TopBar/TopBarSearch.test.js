import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import TopBarSearch from './TopBarSearch';

describe('TopBarSearch', () => {
  let shallow;
  let component;
  let wrapper;
  let handleChangeMock;

  beforeAll(() => {
    shallow = createShallow();
    handleChangeMock = jest.fn();
  });

  beforeEach(() => {
    component = (
      <TopBarSearch
        disabled={false}
        text=""
        onTextChange={handleChangeMock}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
