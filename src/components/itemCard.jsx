import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CardButton } from '../components';

export default function ItemCard({ item }) {
  console.log(item);
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: { md: '300px', sx: '100%' },
        boxShadow: 'none',
        borderRadius: '8px',
        backgroundColor: '#323232',
        height: '100%',
      }}>
      <CardMedia image={item.image} sx={{ height: '140px', width: '100%' }}></CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          maxHeight: '140px',
        }}>
        <Box>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '10px',
              color: '#8a8a8a',
              lineHeight: '12px',
              textAlign: 'center',
            }}>
            {item.category}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '16px',
              lineHeight: '19px',
              color: '#fff',
              textAlign: 'center',
            }}>
            {item.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: 'Inter',
              marginTop: '17px',
              textAlign: 'center',
              color: '#DA00FE',
              fontSize: '15px',
              lineHeight: '12px',
              fontWeight: '500',
            }}>
            $ {item.price}
            <CardButton></CardButton>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
