import sprite from 'assets/img/sprite.svg';
import {
  MenuBackdrop,
  Menu,
  CloseMenuBtn,
  CloseMenuIcon,
  MenuNavList,
  MenuNavLink,
} from './MobMenu.styled';
import Socials from 'components/SharedHeader/Socials/Socials';

const MobMenu = ({ isOpened, setOpening }) => {
  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) setOpening(false);
  };

  return (
    <>
      {isOpened && <MenuBackdrop onClick={handleBackdropClose} />}
      <Menu className={isOpened ? 'is-open' : ''}>
        <CloseMenuBtn type="button" onClick={() => setOpening(false)}>
          <CloseMenuIcon width="32" height="32">
            <use href={`${sprite}#icon-close`}></use>
          </CloseMenuIcon>
        </CloseMenuBtn>

        <nav>
          <MenuNavList>
            <li>
              <MenuNavLink to="/">Home</MenuNavLink>
            </li>
            <li>
              <MenuNavLink to="/favourites">Favourites</MenuNavLink>
            </li>
          </MenuNavList>
        </nav>

        <Socials variant="footer" menu={'true'} />
      </Menu>
    </>
  );
};

export default MobMenu;
