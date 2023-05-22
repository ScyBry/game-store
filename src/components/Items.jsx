import React from 'react';
import { Stack, Box } from '@mui/material';
import { itemCard } from './itemCard';

export default function Items({ items }) {
  return (
    <Stack height="100%" direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {items.map((item, index) => (
        <Box key={index}>
          <itemCard item={item}></itemCard>
        </Box>
      ))}
    </Stack>
  );
}
