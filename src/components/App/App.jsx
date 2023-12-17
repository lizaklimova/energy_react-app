import React, { useContext } from 'react';
import Notiflix from 'notiflix';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'contexts/ThemeContext';
import { lightTheme, darkTheme } from 'theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import SharedHeader from 'components/SharedHeader/SharedHeader';

const MainPage = lazy(() => import('pages/MainPage'));
const FavouritesPage = lazy(() => import('pages/FavouritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const { theme } = useContext(ThemeContext);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  Notiflix.Notify.init({
    timeout: 5000,
    clickToClose: true,
    cssAnimationStyle: 'from-bottom',
    width: '400px',
    fontSize: '14px',
    fontAwesomeIconStyle: 'shadow',
    info: {
      notiflixIconColor: currentTheme.background,
      background: currentTheme.text,
      textColor: currentTheme.background,
    },
  });

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
