import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Navbar, SideBar } from '../components/';
import { fetchFromApi } from '../utils/fetchFromApi';

export default function HomePage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchFromApi().then((data) => {
      setItems(data.items);
      console.log(items);
    });
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <SideBar />
      <Stack direction="row" sx={{ width: '100%' }}>
        <Navbar />
      </Stack>
    </Box>
  );
}
