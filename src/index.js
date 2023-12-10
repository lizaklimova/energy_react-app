import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/energy_react-app">
      <ThemeProvider theme={{ theme }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
