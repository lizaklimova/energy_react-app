import { useContext } from 'react';
import { FormControlLabel } from '@mui/material';
import { ThemeContext } from 'contexts/ThemeContext';
import ToggleThemeBtn from 'components/ToggleThemeBtn';
import { MainContainer } from 'components/App/App.styled';
import Hero from 'components/Hero/HeroSection/Hero';
import Exercises from 'components/Exercises/ExercisesSection';
import Footer from 'components/Footer/FooterSection';

const MainPage = () => {
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
      </MainContainer>
      <Hero />
      <Exercises />
      <Footer />
    </main>
  );
};

export default MainPage;
