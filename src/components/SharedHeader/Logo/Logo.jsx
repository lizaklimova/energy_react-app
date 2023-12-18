import { Link } from 'react-router-dom';
import sprite from 'assets/img/sprite.svg';
import { LogoIconWrap, LogoIcon } from '../Logo/Logo.styled';

const Logo = ({ variant }) => {
  return (
    <Link to="/">
      <LogoIconWrap>
        <LogoIcon width="132" height="24" $variant={variant}>
          <use href={`${sprite}#icon-logo`}></use>
        </LogoIcon>
      </LogoIconWrap>
    </Link>
  );
};

export default Logo;
