import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import userMockData from '../../mocks/userMock'
import UserModalContentMedia from './UserModalContentMedia'

describe('UserModalContentMedia', () => {
  let shallow;
  let wrapper;
  let userMock = { ...userMockData };

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    wrapper = shallow(
      <UserModalContentMedia
        user={userMock}
      />
    );
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});