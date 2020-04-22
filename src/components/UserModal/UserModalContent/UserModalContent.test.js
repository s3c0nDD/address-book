import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import userMockData from '../../mocks/userMock'
import UserModalContent from './UserModalContent'

describe('UserModalContent', () => {
  let shallow;
  let wrapper;
  let userMock = { ...userMockData };

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    wrapper = shallow(
      <UserModalContent
        user={userMock}
      />
    );
  });

  it('shallowly renders and matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});