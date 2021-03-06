import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import sentinel_logo from '../../openshift_sentinel_logo_small.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src={sentinel_logo}></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{color:'white'}} to="/">Home</Link>
            <Link style={{color:'white'}} to="/graphs">Graphs</Link>

          </Typography>
          <Button color="inherit"><Link style={{color:'white'}} to="/login">Login</Link></Button>
          <Button color="inherit"><Link style={{color:'white'}} to="/register">Register</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
