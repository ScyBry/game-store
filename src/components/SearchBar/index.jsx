import React from 'react';
import { Paper, IconButton } from '@mui/material';

import SearchIcon from './img/search-icon.svg';
import Styles from './style.module.scss';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        borderRadius: '20px',
        backgroundColor: 'rgba(95, 95, 95, 0.35)',
      }}>
      <IconButton sx={{ pl: '24px', pt: '12px', pb: '12px', pr: '0px' }}>
        <img src={SearchIcon} alt="search" />
      </IconButton>
      <input className={Styles.search_bar} type="text" placeholder="Search..." />
    </Paper>
  );
}
