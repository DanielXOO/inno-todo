import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import type CurrentUser from '../models/user/CurrentUser';
import { Navigate } from 'react-router-dom';
import {
  formBoxStyle,
  mainBoxStyle
} from '../styles/containers/LoginContainer.styles';

const LoginContainer: React.FC = () => {
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm<User>({
    resolver: yupResolver(userSignInScheme)
  });

  const { signIn, isLoading } = useAuth();
  const [doRedirect, setDoRedirect] = useState<boolean>(false);
  const isAuthenticated: boolean = useSelector(
    (user: CurrentUser) => user.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      setDoRedirect(true);
    }
  }, [isAuthenticated]);

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
        default:
          setError('password', { message: 'Bad request error' });
      }
    }
  };

  if (doRedirect) {
    return <Navigate to="/tasks" replace />;
  }

  return (
    <Loader isLoading={isLoading}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={mainBoxStyle}>
        <Box sx={formBoxStyle}>
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
        </Box>
      </Box>
    </Loader>
  );
};

export default LoginContainer;
