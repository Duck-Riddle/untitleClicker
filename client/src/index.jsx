import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as Styled } from 'styled-components'
import { Provider as Redux } from 'react-redux';

import store from './redux/configure-store';
import theme from './theme'
import './global.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";




ReactDOM.render(
  <React.StrictMode>
    <Redux store={store}>
      <Styled theme={theme}>
        <App />
      </Styled>
    </Redux>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();