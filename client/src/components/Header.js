import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#ff6e40"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
            Live Streams
            </Link>
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;