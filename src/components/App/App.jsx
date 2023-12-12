import React, { useContext } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'contexts/ThemeContext';
import { lightTheme, darkTheme } from 'theme';
import { GlobalStyles } from 'styles/globalStyled';
import SharedHeader from 'components/SharedHeader/SharedHeader';
import Hero from 'components/Hero/Hero';
import Exercises from 'components/Exercises/Exercises';
import { MaterialUISwitch } from 'components/ToggleThemeBtn/ToggleThemeBtn';
import { FormControlLabel } from '@mui/material';
import { MainContainer } from './App.styled';

const MainPage = lazy(() => import('pages/MainPage'));
const FavouritesPage = lazy(() => import('pages/FavouritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SharedHeader />}>
            <Route index element={<MainPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

        <MainContainer>
          <FormControlLabel
            sx={{
              paddingTop: '20px',
              display: 'flex',
            }}
            onClick={toggleTheme}
            control={<MaterialUISwitch />}
          />
        </MainContainer>
        <Hero />
        <Exercises />
      </ThemeProvider>
    </>
  );
};
