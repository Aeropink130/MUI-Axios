import logo from './logo.svg';
import './App.css';
import Data from './Data';
import { Route, Routes } from 'react-router-dom';
import DataItem from './DataItem';
import { CssBaseline, Switch, ThemeProvider, createTheme } from '@mui/material';
import { darkPalette, lightPalette } from './lib.ts';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme(darkMode ? darkPalette : lightPalette)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Data />} />
          <Route path='/:id' element={<DataItem />} />
        </Routes>
        <Switch checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
      </ThemeProvider>
    </div>
  );
}

export default App;
