import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import TopBarMenu from './TopBarMenu';

describe('TopBarMenu', () => {
  let shallow;
  let component;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    const anchorEl = (<div className="anchorElement" />);
    component = (
      <TopBarMenu
        anchorEl={anchorEl}
        handleClose={jest.fn()}
        open={Boolean(anchorEl)}
      />
    );
    wrapper = shallow(component);
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
