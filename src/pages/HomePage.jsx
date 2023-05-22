import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Navbar, SideBar, Items } from '../components/';
import { fetchFromApi } from '../utils/fetchFromApi';
import { ContactlessOutlined } from '@mui/icons-material';

export default function HomePage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchFromApi().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <SideBar />
      <Box sx={{ width: '100%' }}>
        <Navbar />
        <Items items={items}></Items>
      </Box>
    </Box>
  );
}
