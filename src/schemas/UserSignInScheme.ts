import * as yup from 'yup';

const userSignInScheme = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup
    .string()
    .required('Password required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^(?=.*\d)/, 'Password must contain at least one digit')
    .matches(
      /^(?=.*[a-z])/,
      'Password must contain at least one lowercase letter'
    )
    .matches(
      /^(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter'
    )
});

export default userSignInScheme;
