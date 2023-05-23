import React, { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material';
import { ItemCard, ItemSkeleton } from '../components';
import { useSelector } from 'react-redux';

export default function Items({ items }) {
  const loading = useSelector((state) => state.loading.loading);
  const [renderItems, setRenderItems] = useState([]);
  const skeletonRender = [...new Array(10)].map((_, index) => (
    <Box key={index}>
      <ItemSkeleton></ItemSkeleton>
    </Box>
  ));
  const itemsRender = items.map((item, index) => (
    <Box key={index}>
      <ItemCard item={item}></ItemCard>
    </Box>
  ));
  useEffect(() => {
    setRenderItems(loading ? skeletonRender : itemsRender);
  }, [loading, items]);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
      sx={{ backgroundColor: '#242424', mt: '40px' }}>
      {renderItems}
    </Stack>
  );
}
