import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useAuth } from '../auth/AuthProvider';

const NavBar: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = async (): Promise<void> => {
    await signOut();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InnoToDo
          </Typography>
          <Button onClick={handleSignOut} color="inherit">
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
