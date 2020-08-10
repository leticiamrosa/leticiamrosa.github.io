import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Routes from './routes/index.routes';

import GlobalStyles from './utils/styles/globalStyles';

const history = createBrowserHistory({ basename: process.env.REACT_APP_HOST });

function App() {
  return (
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
  );
}

export default App;
