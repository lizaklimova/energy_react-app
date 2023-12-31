import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from '../../App/App.styled';
import Loader from 'components/Loaders/MainLoader/Loader';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Socials from '../Socials/Socials';
import MobMenu from 'components/MobMenu/MobMenu';
import { HeaderWrap, BurgerBtn, BurgerIcon } from './SharedHeader.styled';

const SharedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <MainContainer>
          <HeaderWrap>
            <Logo variant="header" />
            <Navigation />
            <Socials variant="header" />
            <BurgerBtn type="button">
              <BurgerIcon
                onClick={() => {
                  setIsMenuOpen(true);
                  document.body.style.overflow = 'hidden';
                }}
              />
            </BurgerBtn>
          </HeaderWrap>
          <MobMenu isOpened={isMenuOpen} setOpening={setIsMenuOpen} />
        </MainContainer>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedHeader;
