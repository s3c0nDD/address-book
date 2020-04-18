import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import Routes from './Routes';
import makeStore from './store';

const store = makeStore();

const App = () => {
  const styleHelper = useMemo(() => ({ marginTop: 80 }), []);

  return (
    <Provider store={store}>
      <Router>
          <>
            <CssBaseline />
            <TopBar />
            <Box style={styleHelper}>
              <Routes  />
            </Box>
          </>
      </Router>
    </Provider>
  );
};

export default App;
