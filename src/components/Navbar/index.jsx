import React from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { Stack, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import logo from './img/logo.svg';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const { collapseSidebar } = useProSidebar();
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      p={2}
      sx={{ justifyContent: 'space-between', position: 'sticky', backgroundColor: '#000', top: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => collapseSidebar()}>
          <MenuIcon sx={{ color: '#fff' }}></MenuIcon>
        </IconButton>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Box>
      <SearchBar></SearchBar>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <IconButton sx={{ padding: '0px' }}>
          <NotificationsActiveIcon sx={{ color: '#fff' }}></NotificationsActiveIcon>
        </IconButton>
        <IconButton sx={{ padding: '0px' }}>
          <ShoppingBasketIcon sx={{ color: '#fff' }}></ShoppingBasketIcon>
        </IconButton>
      </Box>
    </Stack>
  );
}
