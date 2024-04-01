import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  avatar: Yup.string().notRequired(),
  firstName: Yup.string()
    .min(2, 'First Name should be at least 2 characters')
    .required('First Name is required')
    .matches(/^\S*$/, 'First Name should not contain spaces'),
  lastName: Yup.string()
    .min(2, 'Last Name should be at least 2 characters')
    .required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  location: Yup.string().required('Location is required'),
  address: Yup.string().required('Address is required'),
  postCode: Yup.string()
    .matches(/^[0-9]+$/, 'Postcode must contain only numbers')
    .min(3, 'Postcode must be at least 3 digits')
    .max(8, 'Postcode must be at most 8 digits')
    .required('Postcode is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
    .required('Phone number is required')
    .max(14, 'Phone number must be at most 14 digits')
    .min(8, 'Phone number must be at least 8 digits'),
  age: Yup.string()
    .matches(/^[0-9]+$/, 'Age must contain only numbers')
    .required('Age is required')
    .max(2, 'Age must be at most 3 characters'),
});
