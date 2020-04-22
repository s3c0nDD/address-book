import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import UserModalContentTypographyGrid, {
  UserModalContentTypography
} from './UserModalContentTypographyGrid';

describe('UserModalContentTypography', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('shallowly renders and matches snapshot', () => {
    const wrapper = shallow(
      <UserModalContentTypography
        text="Hello world"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('UserModalContentTypographyGrid', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('shallowly renders and matches snapshot', () => {
    const wrapper = shallow(
      <UserModalContentTypographyGrid
        text="Hello world"
        IconComponent={<div />}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('shallowly renders and matches snapshot (with CustomComponent prop)', () => {
    const wrapper = shallow(
      <UserModalContentTypographyGrid
        CustomContent={<div className="CustomComponent" />}
        IconComponent={<div className="IconComponent" />}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});