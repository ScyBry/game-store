import { Button, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import styles from './Style.module.scss';

export default function CardButton() {
  return (
    // <Button

    //   sx={
    //     {
    //       // display: 'flex',
    //       // alignItems: 'center',
    //       // justifyContent: 'center',
    //       // gap: '10px',
    //       // marginTop: '15px',
    //       // padding: '15px',
    //       // border: '1px solid #da00fe',
    //       // borderRadius: '15px',
    //     }
    //   }>
    //   <IconButton sx={{ padding: '0px', width: '24px', height: '24px' }}>
    //     <AddCircleIcon
    //       sx={{
    //         color: '#8a8a8a',
    //       }}></AddCircleIcon>
    //   </IconButton>
    //   <Typography
    //     sx={{
    //       fontFamily: 'Inter',
    //       fontSize: '14px',
    //       lineHeight: '12px',
    //       color: '#fff',
    //     }}>
    //     Add to cart
    //   </Typography>
    // </Button>
    <Box marginTop="10px">
      <Button
        variant="outlined"
        className={styles.buttonHover}
        sx={{
          fontFamily: 'Inter',
          fontSize: '14px',
          lineHeight: '12px',
          borderColor: '#DA00FE',
          color: '#fff',
          ':hover': {
            backgroundColor: '#DA00FE',
            color: '#fff',
            border: '1px solid #DA00FE',
            boxShadow: 'none',
          },
        }}
        startIcon={
          <AddCircleIcon sx={{ width: '24px', height: '24px', color: '#8a8a8a' }}></AddCircleIcon>
        }>
        Add to cart
      </Button>
    </Box>
  );
}
