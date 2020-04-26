/**
 * User example mock,
 * for usage i.e. in unit tests
 * @type {object}
 */
const userMock = {
  name: {
    title: 'Mr',
    first: 'John',
    last: 'Doe'
  },
  picture: {
    large: 'https://wwww.image.com/data/1'
  },
  login: {
    username: 'johndoe123'
  },
  id: {
    value: 'foobar'
  },
  email: 'johndoe123@google.com',
  phone: '000-111-222',
  cell: '111-222-333',
  location: {
    street: {
      name: 'Big Street',
      number: 98
    },
    postcode: 56789,
    city: 'Warsaw',
    state: 'Masovian',
    country: 'Poland'
  },
};

export default userMock;