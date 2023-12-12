import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from '../App/App.styled';
import Loader from 'components/Loader/Loader';
import Logo from './Logo';
import Navigation from './Navigation';
import Socials from './Socials';
import MobMenu from 'components/MobMenu/MobMenu';
import { HeaderWrap, BurgerBtn, BurgerIcon } from './SharedHeader.styled';

const SharedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <MainContainer>
          <HeaderWrap>
            <Logo />
            <Navigation />
            <Socials />
            <BurgerBtn type="button">
              <BurgerIcon onClick={() => setIsMenuOpen(true)} />
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
