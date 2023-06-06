import React from 'react';
import type ILoaderProps from '../models/loader/ILoaderProps';
import { Alert, CircularProgress } from '@mui/material';

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
