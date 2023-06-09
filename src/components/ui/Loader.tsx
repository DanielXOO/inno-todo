import React from 'react';
import { Alert, Box, CircularProgress } from '@mui/material';

interface ILoaderProps {
  children: React.ReactElement | React.ReactElement[] | string;
  isLoading: boolean;
  error?: string;
}

const Loader: React.FC<ILoaderProps> = ({ error, isLoading, children }) => {
  if (error !== null && error !== undefined) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ width: '100%' }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return <>{children}</>;
  }
};

export default Loader;
