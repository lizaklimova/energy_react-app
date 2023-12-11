import { Routes, Route } from 'react-router-dom';
import SharedHeader from 'components/SharedHeader/SharedHeader';
import { lazy } from 'react';
import Hero from 'components/Hero/Hero';
import Exercises from 'components/Exercises/Exercises';

const MainPage = lazy(() => import('pages/MainPage'));
const FavouritesPage = lazy(() => import('pages/FavouritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<MainPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Hero />
      <Exercises />
    </>
  );
};
