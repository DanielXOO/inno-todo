import React from 'react';
import { Alert, Box, CircularProgress, Modal } from '@mui/material';

interface ILoaderProps {
  children: React.ReactElement | React.ReactElement[] | string;
  isLoading: boolean;
  error?: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300
};

const Loader: React.FC<ILoaderProps> = ({ error, isLoading, children }) => {
  if (error !== null && error !== undefined) {
    const [open, setOpen] = React.useState(true);
    const handleClose = (): void => {
      setOpen(false);
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Alert severity="error">{error}</Alert>
        </Box>
      </Modal>
    );
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
  }

  return <>{children}</>;
};

export default Loader;
