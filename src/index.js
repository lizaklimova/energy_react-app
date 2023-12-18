import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalExercProvider } from 'contexts/ExercModalOpen';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/energy_react-app">
      <ThemeProvider>
        <ModalExercProvider>
          <App />
        </ModalExercProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
