import {ThemeProvider} from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import {theme} from './app/theme';
import ProductList from './components/ProductList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <ProductList />
      </div>
    </ThemeProvider>
  );
}

export default App;
