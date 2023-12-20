import { useContext } from 'react';
import { FormControlLabel } from '@mui/material';
import { ThemeContext } from 'contexts/ThemeContext';
import ToggleThemeBtn from 'components/ToggleThemeBtn';
import Favorites from 'components/Favorites/FavoritesPg/Favorites';
import { MainContainer } from 'components/App/App.styled';

const FavouritesPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <main>
      <MainContainer>
        <FormControlLabel
          sx={{
            paddingTop: '20px',
            display: 'flex',
          }}
          onClick={toggleTheme}
          checked={theme === 'dark'}
          control={<ToggleThemeBtn />}
        />
        <Favorites />
      </MainContainer>
    </main>
  );
};
export default FavouritesPage;
