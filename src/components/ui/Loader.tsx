import React from 'react';
import { Alert, CircularProgress } from '@mui/material';

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
    return <CircularProgress />;
  } else {
    return <>{children}</>;
  }
};

export default Loader;
