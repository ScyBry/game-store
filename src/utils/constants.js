import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WalletIcon from '@mui/icons-material/Wallet';

import ComputerIcon from '@mui/icons-material/Computer';
import MonitorIcon from '@mui/icons-material/Monitor';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DevicesIcon from '@mui/icons-material/Devices';

export const MENU_ITEMS = [
  {
    name: 'Profile',
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
  {
    name: 'Search',
    icon: <SearchIcon></SearchIcon>,
  },
  {
    name: 'Favorite',
    icon: <FavoriteIcon></FavoriteIcon>,
  },
  {
    name: 'Balance',
    icon: <WalletIcon></WalletIcon>,
  },
];

export const CATEGORIES = [
  {
    name: 'Ноутбуки',
    icon: <ComputerIcon></ComputerIcon>,
  },
  {
    name: 'Мониторы',
    icon: <MonitorIcon></MonitorIcon>,
  },
  {
    name: 'Компоненты',
    icon: <SettingsInputComponentIcon></SettingsInputComponentIcon>,
  },
  {
    name: 'Аксессуары',
    icon: <DevicesIcon></DevicesIcon>,
  },
  {
    name: 'Игровые консоли',
    icon: <SportsEsportsIcon></SportsEsportsIcon>,
  },
];
