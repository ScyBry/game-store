import React from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { Stack, IconButton, Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import logo from './img/logo.svg';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const { collapseSidebar } = useProSidebar();
  return (
    // <Stack
    //   direction="row"
    //   alignItems="center"
    //   sx={{
    //     justifyContent: 'space-between',
    //     position: 'sticky',
    //     backgroundColor: '#000',
    //     top: 0,
    //   }}>
    //   <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //     <IconButton onClick={() => collapseSidebar()}>
    //       <MenuIcon sx={{ color: '#fff' }}></MenuIcon>
    //     </IconButton>
    //     <Link to="/">
    //       <img src={logo} alt="" />
    //     </Link>
    //   </Box>
    //   <SearchBar></SearchBar>
    //   <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    //     <IconButton sx={{ padding: '0px' }}>
    //       <NotificationsActiveIcon sx={{ color: '#fff' }}></NotificationsActiveIcon>
    //     </IconButton>
    //     <IconButton sx={{ padding: '0px' }}>
    //       <ShoppingBasketIcon sx={{ color: '#fff' }}></ShoppingBasketIcon>
    //     </IconButton>
    //   </Box>
    // </Stack>
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'black',
          p: 2,
          width: '100%',
        }}>
        <Toolbar>
          <IconButton
            onClick={() => collapseSidebar()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="">
            <IconButton>
              <img src={logo} alt="" />
            </IconButton>
          </Link>
        </Toolbar>
        <SearchBar></SearchBar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <IconButton sx={{ padding: '0px' }}>
            <NotificationsActiveIcon sx={{ color: '#fff' }}></NotificationsActiveIcon>
          </IconButton>
          <IconButton sx={{ padding: '0px' }}>
            <ShoppingBasketIcon sx={{ color: '#fff' }}></ShoppingBasketIcon>
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}
