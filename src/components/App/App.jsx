import React, { useContext } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeContext } from 'contexts/ThemeContext';
import { lightTheme, darkTheme } from 'assets/styles/theme';
import SharedHeader from 'components/SharedHeader/SharedHeaderSection/SharedHeader';

const MainPage = lazy(() => import('pages/MainPage'));
const FavouritesPage = lazy(() => import('pages/FavouritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<MainPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
