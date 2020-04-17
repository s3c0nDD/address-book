import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import Routes from './Routes';
import makeStore from './store';

const store = makeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <>
            <CssBaseline />
            <TopBar />
            <Routes />
          </>
      </Router>
    </Provider>
  );
};

export default App;
