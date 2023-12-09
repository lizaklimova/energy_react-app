import { Link } from 'react-router-dom';
import sprite from 'img/icons.svg';

const Logo = () => {
  return (
    <Link to="/">
      <svg width="132" height="24">
        <use href="sprite#icon-logo"></use>
      </svg>
    </Link>
  );
};

export default Logo;
