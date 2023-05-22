import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WalletIcon from '@mui/icons-material/Wallet';

import ComputerIcon from '@mui/icons-material/Computer';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MouseIcon from '@mui/icons-material/Mouse';
import KeyboardIcon from '@mui/icons-material/Keyboard';

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
  { name: 'Computer', icon: <ComputerIcon></ComputerIcon> },
  { name: 'Game Headphones', icon: <HeadphonesIcon></HeadphonesIcon> },
  { name: 'Mouses', icon: <MouseIcon></MouseIcon> },
  { name: 'Keyboard', icon: <KeyboardIcon></KeyboardIcon> },
];
