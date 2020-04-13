import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import TopBar from './components/TopBar';
import Routes from './Routes';

const App = () => {
  return (
    <Router>
      <>
        <CssBaseline />
        <Box>
          <TopBar />
          <Routes />
        </Box>
      </>
    </Router>
  );
};

export default App;
