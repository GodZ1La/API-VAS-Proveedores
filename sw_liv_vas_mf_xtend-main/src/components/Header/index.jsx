import React from 'react';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const handleDrawerToggle = () => {
    console.log('hola');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={
          {
            /*border: '1px solid black'*/
          }
        }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://storage.googleapis.com/bk-vas-qr-cdn/img/background_qrs/liverpool-logo.svg"
            alt="Liverpool, es parte de tu vida"
            style={{ maxWidth: '165px' }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
