import sprite from 'img/sprite.svg';
import {
  MenuBackdrop,
  Menu,
  CloseMenuBtn,
  CloseMenuIcon,
  MenuNavList,
  MenuNavLink,
  MenuSocialsList,
  MenuSocialsItem,
  MenuSocialsLink,
  MenuSocialsIcon,
} from './MobMenu.styled';

const MobMenu = ({ isOpened, setOpening }) => {
  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) setOpening(false);
  };

  return (
    <MenuBackdrop onClick={handleBackdropClose}>
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
        <MenuSocialsList>
          <MenuSocialsItem>
            <MenuSocialsLink
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuSocialsIcon width="28" height="28">
                <use href={`${sprite}#icon-facebook`}></use>
              </MenuSocialsIcon>
            </MenuSocialsLink>
          </MenuSocialsItem>
          <MenuSocialsItem>
            <MenuSocialsLink
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuSocialsIcon width="28" height="28">
                <use href={`${sprite}#icon-instagram`}></use>
              </MenuSocialsIcon>
            </MenuSocialsLink>
          </MenuSocialsItem>
          <MenuSocialsItem>
            <MenuSocialsLink
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuSocialsIcon width="28" height="28">
                <use href={`${sprite}#icon-youtube`}></use>
              </MenuSocialsIcon>
            </MenuSocialsLink>
          </MenuSocialsItem>
        </MenuSocialsList>
      </Menu>
    </MenuBackdrop>
  );
};

export default MobMenu;