import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ width: '100%' }}
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
