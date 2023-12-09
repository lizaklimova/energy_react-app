import { Link } from 'react-router-dom';
import sprite from 'img/sprite.svg';
import { LogoIcon } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoIcon>
        <svg width="132" height="24">
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </LogoIcon>
    </Link>
  );
};

export default Logo;
