import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import TopBar from './components/TopBar';
import UsersGrid from './components/UsersGrid';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box>
        <TopBar />
        <UsersGrid />
      </Box>
    </>
  );
};

export default App;
