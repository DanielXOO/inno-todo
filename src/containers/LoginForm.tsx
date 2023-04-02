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

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<User>({
    resolver: yupResolver(userSignInScheme)
  });

  const { signIn } = useAuth();

  const onSubmit = async (data: User): Promise<void> => {
    await signIn(data.email, data.password);
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
