import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/slices/loadingSlice';
import { useState, useEffect } from 'react';
import { Box, Stack, Container } from '@mui/material';
import { Navbar, SideBar, Items, Filter } from '../components/';
import { fetchFromApi } from '../utils/fetchFromApi';

export default function HomePage() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchFromApi().then((data) => {
      setItems(data);
      dispatch(setLoading(false));
    });
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ height: '100%' }}>
        <SideBar></SideBar>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Navbar></Navbar>
        <Container maxWidth="none">
          <Filter></Filter>
          <Items items={items}></Items>
        </Container>
      </Box>
    </Box>
  );
}
