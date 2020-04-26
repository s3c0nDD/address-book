import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import useSearchContainer from './hooks/useSearchContainer';
import TopBar from './components/TopBar';
import Routes from './Routes';
import makeStore from './store';

const store = makeStore();

const ConnectedTopBar = (props) => {
  const { disabled, searchText, doSetSearchText} = useSearchContainer();

  return (
    <TopBar
      {...props}
      searchDisabled={disabled}
      searchText={searchText}
      onSearchChange={doSetSearchText}
    />
  )
};

/**
 * Application's bootstrapping component
 */
const App = () => {
  const styleHelper = useMemo(() => ({ marginTop: 80 }), []);

  return (
    <Provider store={store}>
      <Router basename="/address-book">
          <>
            <CssBaseline />
            <ConnectedTopBar />
            <Box style={styleHelper}>
              <Routes />
            </Box>
          </>
      </Router>
    </Provider>
  );
};

export default App;
