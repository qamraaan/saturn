import {Employee} from '../types/types';

const employeeInitialState: Employee = {
  gender: '',
  name: {
    title: '',
    first: '',
    last: '',
  },
  location: {
    street: {
      number: 0,
      name: '',
    },
    city: '',
    state: '',
    country: '',
    postcode: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
    timezone: {
      offset: '',
      description: '',
    },
  },
  email: '',
  login: {
    username: '',
    password: '',
    uuid: '',

    salt: '',
    md5: '',
    sha1: '',
    sha256: '',
  },
  dob: {
    date: '',
    age: 0,
  },
  registered: {
    date: '',
    age: 0,
  },
  phone: '',
  cell: '',
  id: {
    name: '',
    value: null,
  },
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  },
  nat: '',
};

export default employeeInitialState;
