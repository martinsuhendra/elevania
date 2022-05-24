import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, {FunctionComponent} from 'react';
import {SearchInput} from './SearchInput';
import CartIcon from '@mui/icons-material/ShoppingCart';

const Navbar: FunctionComponent = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography variant="h5" mr={3} component="div">
          Elevania
        </Typography>
        <Box sx={{flexGrow: 1}} />
        <SearchInput />
        <IconButton size="large" color="inherit">
          <Badge badgeContent={1} color="error">
            <CartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
