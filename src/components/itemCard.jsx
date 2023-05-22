import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

export default function itemCard({ item }) {
  return (
    <NavLink>
      <Card sx={{ width: { md: '220px', sx: '100%' }, boxShadow: 'none', borderRadius: '8px' }}>
        <CardMedia image={item.image}></CardMedia>
      </Card>
    </NavLink>
  );
}
