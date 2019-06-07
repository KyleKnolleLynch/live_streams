import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <header>
      <AppBar position="static" style={{ backgroundColor: '#ff6e40' }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            Live Streams
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
