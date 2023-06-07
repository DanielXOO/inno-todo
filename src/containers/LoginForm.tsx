import React, { useState } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Email from '../components/ui/Email';
import Password from '../components/ui/Password';
import Logo from '../assets/images/logo.png';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import userSignInScheme from '../schemas/UserSignInScheme';
import type User from '../models/user/User';
import { useAuth } from '../components/auth/AuthProvider';
import { authErrors } from '../models/auth/AuthErrors';
import { type FirebaseError } from 'firebase/app';
import Loader from '../components/ui/Loader';

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm<User>({
    resolver: yupResolver(userSignInScheme)
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signIn } = useAuth();

  const onSubmit = async (data: User): Promise<void> => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
          minHeight: '450px',
          borderRadius: '15px',
          boxShadow: 3
        }}
        pb="50px"
        pt="50px"
      >
        <Loader isLoading={isLoading}>
          <img src={Logo} width="30%" height="30%" alt="logo" />
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
        </Loader>
      </Box>
    </Box>
  );
};

export default LoginForm;
