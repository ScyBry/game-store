import React from 'react';
import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { CATEGORIES, MENU_ITEMS } from '../../utils/constants';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';

import style from './Style.module.scss';

export default function SideBar() {
  const { collapseSidebar } = useProSidebar();
  useEffect(() => {
    collapseSidebar(true);
  }, []);

  return (
    <Sidebar
      onMouseEnter={() => {
        collapseSidebar(false);
      }}
      collapsedWidth="90px"
      backgroundColor="#2d2d2d"
      rootStyles={{ border: 'none', height: '100%' }}>
      <Menu
        menuItemStyles={{
          button: {
            ':hover': { backgroundColor: 'transparent' },
            fontSize: '16px',
            fontWeight: '700',
            color: '#fff',
          },
          subMenuContent: {
            width: 'auto',
            backgroundColor: 'transparent',
            button: { paddingLeft: '0px' },
          },
        }}>
        {MENU_ITEMS.map((item) => (
          <MenuItem className={style.menu_item}>
            <IconButton>{item.icon}</IconButton>
            <span>{item.name}</span>
          </MenuItem>
        ))}
        <SubMenu label="Category">
          {CATEGORIES.map((category) => (
            <MenuItem className={style.menu_item}>
              <IconButton>{category.icon}</IconButton>
              <span>{category.name}</span>
            </MenuItem>
          ))}
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
