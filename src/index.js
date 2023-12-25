import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalExercProvider } from 'contexts/ExercModalOpen';

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
