import React from 'react';
import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { CATEGORIES, MENU_ITEMS } from '../../utils/constants';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';

import style from './Style.module.scss';

export default function SideBar() {
  const { collapseSidebar } = useProSidebar();

  const [category, setCategory] = useState();

  return (
    // <Sidebar
    //   collapsedWidth="70px"
    //   backgroundColor="#2d2d2d"
    //   rootStyles={{ border: 'none', width: 'auto', minWidth: '360px' }}>
    //   <Menu
    //     rootStyles={{ height: '100vh', width: 'auto', paddingTop: '10px' }}
    //     menuItemStyles={{
    //       button: {
    //         paddingLeft: '20px',
    //         backgroundColor: '#2d2d2d',
    //         ':hover': { backgroundColor: '#2d2d2d' },
    //       },
    //       subMenuContent: {
    //         backgroundColor: '#2d2d2d',
    //         fontWeight: '700',
    //         width: 'auto',
    //         transition: '0.3s all',
    //       },
    //       label: { color: '#fff', fontSize: '24px' },
    //       SubMenuExpandIcon: { color: '#fff' },
    //     }}>
    //     {MENU_ITEMS.map((item) => (
    //       <MenuItem
    //         className={style.menu_item}
    //         rootStyles={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           fontSize: '24px',
    //           lineHeight: '30px',
    //           fontWeight: '700',
    //           color: '#fff',
    //           transition: '0.3s ease-in-out',
    //         }}
    //         key={item.name}>
    //         <IconButton sx={{ padding: '0px', mr: '26px' }}>{item.icon}</IconButton>
    //         <span>{item.name}</span>
    //       </MenuItem>
    //     ))}
    //     <SubMenu
    //       root
    //       label="Category"
    //       rootStyles={{
    //         backgroundColor: '2d2d2d',
    //         width: 'auto',
    //         border: 'none',
    //       }}>
    //       {CATEGORIES.map((category) => (
    //         <MenuItem
    //           className={style.menu_item}
    //           rootStyles={{
    //             display: 'flex',
    //             alignItems: 'center',
    //             lineHeight: '30px',
    //             fontWeight: '700',
    //             color: '#fff',
    //             transition: '0.3s ease-in-out',
    //           }}
    //           key={category.name}>
    //           <IconButton sx={{ padding: '0px', mr: '26px' }}>{category.icon}</IconButton>
    //           <span>{category.name}</span>
    //         </MenuItem>
    //       ))}
    //     </SubMenu>
    //   </Menu>
    // </Sidebar>

    <Sidebar
      onMouseEnter={() => {
        collapseSidebar(false);
      }}
      collapsedWidth="90px"
      backgroundColor="#2d2d2d"
      rootStyles={{ position: 'sticky', border: 'none', height: '100vh' }}>
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
