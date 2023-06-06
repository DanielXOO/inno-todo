import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Email from '../components/Email';
import Password from '../components/Password';
import Logo from '../assets/images/logo.png';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import userSignInScheme from '../schemas/UserSignInScheme';
import type User from '../models/user/User';
import { useAuth } from '../auth/AuthProvider';
import { authErrors } from '../auth/AuthErrors';
import { type FirebaseError } from 'firebase/app';

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm<User>({
    resolver: yupResolver(userSignInScheme)
  });

  const { signIn } = useAuth();

  const onSubmit = async (data: User): Promise<void> => {
    try {
      await signIn(data.email, data.password);
    } catch (_error: any) {
      const error: FirebaseError = _error;
      switch (error.code) {
        case authErrors.USER_NOT_FOUND:
        case authErrors.WRONG_PASSWORD:
          setError('email', { message: '' });
          setError('password', { message: 'Email or password is incorrect' });
          break;
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '400px',
          minWidth: '300px',
          borderRadius: '15px',
          boxShadow: 3
        }}
        pb="50px"
        pt="50px"
      >
        <img src={Logo} width="30%" height="30%" />
        <Typography variant="h4" align="center" m="10px">
          InnoToDo
        </Typography>

        <Controller
          render={({ field }) => <Email field={field} errors={errors} />}
          name="email"
          defaultValue=""
          control={control}
        />
        <Controller
          render={({ field }) => (
            <Password label="Password" field={field} errors={errors} />
          )}
          name="password"
          defaultValue=""
          control={control}
        />
        <Link
          href="/signup"
          sx={{
            marginTop: '5px'
          }}
        >
          Sign Up
        </Link>
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: '25px'
          }}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
