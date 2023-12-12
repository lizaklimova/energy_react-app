import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import Hero from 'components/Hero/Hero';
import Exercises from 'components/Exercises/Exercises';
import { MaterialUISwitch } from 'components/ToggleThemeBtn/ToggleThemeBtn';
import { FormControlLabel } from '@mui/material';
import { MainContainer } from 'components/App/App.styled';

const MainPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
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
    </>
  );
};

export default MainPage;
