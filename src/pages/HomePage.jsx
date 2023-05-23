// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../redux/slices/loadingSlice';
import { useState, useEffect } from 'react';
import { Box, Stack, Skeleton } from '@mui/material';
import { Navbar, SideBar, Items } from '../components/';
import { fetchFromApi } from '../utils/fetchFromApi';

export default function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading); // Исправлено получение состояния loading

  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchFromApi().then((data) => {
      setItems(data);
      dispatch(setLoading(false));
    });
  }, []);

  return (
    <Stack sx={{ flexDirection: 'row' }}>
      <Box sx={{ height: '92vh' }}>
        <SideBar></SideBar>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Navbar></Navbar>
        <Items items={items}></Items>
      </Box>
    </Stack>
  );
}
