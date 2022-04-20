import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_THEME, darkMode, lightMode } from '../../store/actions/theme-types';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import sentinel_logo from '../../openshift_sentinel_logo_small.png'
import DraggableDialog from '../ui/draggableDialog';


const baseUrl = "/"
const pages = ['home', 'graphs', 'compliance'];
let settings = [];
let baseSettings = []
let userSettings = []

const ResponsiveAppBar = ({theme, themeHandler}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLogout, setAnchorElLogout] = React.useState(null)
  const [showUsername, setShowUsername] = React.useState(false)
  
  const dispatch = useDispatch()
  const themeMode = useSelector((state) => state.theme.mode)
  const username = useSelector((state) => state.auth.user)


  useEffect(() => {
    console.log('user effect')
    if (username) {
      userSettings = ['logout']
    } else {
      userSettings = ['login', 'register']
    }

    settings = configureSettings() 
  },[username])
  
  const configureSettings = () => {
    return baseSettings.concat(userSettings)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(event)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleLogOutClick = () => {
  //   handleCloseUserMenu()
  //   showDialogPage()
  // }

  // const showDialogPage = () => {
  //   setDialogShow(true)
  //   let myTimeout = setTimeout(console.log(dialogShow), 50000)
  // }

  // const hideDialogPage = () => {
  //   setDialogShow(false)
  // }

  const handleChangeTheme = () => {
    let changeMode = themeMode === lightMode ? darkMode : lightMode
    dispatch({type:CHANGE_THEME, payload: changeMode})
  }


  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
        <Link style={{color:'white'}} to="/">
            <img src={sentinel_logo}></img>
        </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Link style={{color:'white'}} to={baseUrl + page}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            </Link>
            ))}
          </Box>
          <Box>
            <Typography>
              {username ? `hello ${username.username}` : ''}
            </Typography>
          </Box>
          <Box>
            <Tooltip title="change theme">
            <IconButton sx={{ ml: 1 }} 
            onClick={() => handleChangeTheme()} 
            color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Anonymouse" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                // if(setting === 'logout') {
                //   return <Link to=''>
                //     <MenuItem key={setting}>
                //       <Typography textAlign="center" onClick={handleLogOutClick}>{setting}</Typography>
                //     </MenuItem>
                    {/* <DraggableDialog
                      cancelButtonText="Cancel"
                      submitButtonText="LogOut"
                      title="Wait!"
                      text="Are you sure you want to logout?"
                      show={dialogShow}
                      //dialogShowFunction={setDialogShow}
                      functionOnSubmit={""}></DraggableDialog> */}
                  // </Link>
                // }
                return <Link to={baseUrl + setting}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;