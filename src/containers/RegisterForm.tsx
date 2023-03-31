import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';
import Email from '../components/Email';
import Password from '../components/Password';
import { Controller, useForm } from 'react-hook-form';
import type UserSignUp from '../models/UserSignUp';
import userSignUpScheme from '../schemas/UserSignUpScheme';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<UserSignUp>({ resolver: yupResolver(userSignUpScheme) });

  const onSubmit = async (data: UserSignUp): Promise<void> => {
    console.log(data);
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
            <Password label="Confirm password" field={field} errors={errors} />
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
  );
};

export default RegisterForm;
