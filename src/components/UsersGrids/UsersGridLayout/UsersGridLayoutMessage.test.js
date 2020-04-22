import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import UsersGridLayoutMessage from './UsersGridLayoutMessage'

describe('UsersGridLayoutMessage', () => {
  let shallow;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    wrapper = shallow(
      <UsersGridLayoutMessage
        message="Hello world"
      />
    );
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});