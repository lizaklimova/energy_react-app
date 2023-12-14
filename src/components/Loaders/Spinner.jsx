import { ThemeContext } from 'contexts/ThemeContext';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { lightTheme, darkTheme } from 'theme';

const Spinner = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <RotatingLines
      strokeColor={currentTheme.background}
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

export default Spinner;
