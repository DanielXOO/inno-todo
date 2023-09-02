import React, { useEffect, useState } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';
import Email from '../components/ui/Email';
import Password from '../components/ui/Password';
import { Controller, useForm } from 'react-hook-form';
import type UserSignUp from '../models/user/UserSignUp';
import userSignUpScheme from '../schemas/UserSignUpScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../components/auth/AuthProvider';
import { type FirebaseError } from 'firebase/app';
import { authErrors } from '../models/auth/AuthErrors';
import Loader from '../components/ui/Loader';
import { useSelector } from 'react-redux';
import type CurrentUser from '../models/user/CurrentUser';
import { Navigate } from 'react-router-dom';
import {
  formBoxStyle,
  mainBoxStyle
} from '../styles/containers/RegisterContainer.styles';

const RegisterContainer: React.FC = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm<UserSignUp>({
    resolver: yupResolver<UserSignUp>(userSignUpScheme)
  });

  const { signUp, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [doRedirect, setDoRedirect] = useState<boolean>(false);
  const isAuthenticated: boolean = useSelector(
    (user: CurrentUser) => user.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      setDoRedirect(true);
    }
  }, [isAuthenticated]);

  const onSubmit = async (data: UserSignUp): Promise<void> => {
    setIsLoading(true);
    try {
      await signUp(data.email, data.password);
      await signOut();
    } catch (_error: any) {
      const error: FirebaseError = _error;
      switch (error.code) {
        case authErrors.ALREADY_EXISTS:
          setError('email', { message: 'User already exists' });
          break;
        default:
          setError('repeatPassword', { message: 'Bad request error' });
      }
    } finally {
      setIsLoading(false);
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
            control={control}
            defaultValue=""
            name="email"
          />
          <Controller
            render={({ field }) => (
              <Password label="Password" field={field} errors={errors} />
            )}
            control={control}
            defaultValue=""
            name="password"
          />
          <Controller
            render={({ field }) => (
              <Password
                label="Confirm password"
                field={field}
                errors={errors}
              />
            )}
            control={control}
            defaultValue=""
            name="repeatPassword"
          />
          <Link
            href="/signin"
            sx={{
              marginTop: '5px'
            }}
          >
            Log in
          </Link>
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: '25px'
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Loader>
  );
};

export default RegisterContainer;
