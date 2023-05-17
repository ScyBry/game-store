import React from 'react';
import { Stack } from '@mui/material';

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between' }}>
      Navbar
    </Stack>
  );
}
