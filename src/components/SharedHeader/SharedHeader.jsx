import Logo from './Logo';
import { HeaderWrap, BurgerBtn, BurgerIcon } from './SharedHeader.styled';
import { MainContainer } from '../App/App.styled';
import Navigation from './Navigation';
import Socials from './Socials';
import MobMenu from 'components/MobMenu/MobMenu';
import { useState } from 'react';

const SharedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <MainContainer>
        <HeaderWrap>
          <Logo />
          <Navigation />
          <Socials />
          <BurgerBtn type="button">
            <BurgerIcon onClick={() => setIsMenuOpen(true)} />
          </BurgerBtn>
          <MobMenu isOpened={isMenuOpen} setOpening={setIsMenuOpen} />
        </HeaderWrap>
      </MainContainer>
    </header>
  );
};

export default SharedHeader;
