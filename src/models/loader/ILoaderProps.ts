import type React from 'react';

interface ILoaderProps {
  children: React.ReactElement | React.ReactElement[] | string;
  isLoading: boolean;
  error?: string;
}

export default ILoaderProps;
