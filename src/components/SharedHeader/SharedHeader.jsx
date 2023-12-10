import Logo from './Logo';
import { HeaderWrap, BurgerBtn, BurgerIcon } from './SharedHeader.styled';
import { MainContainer } from '../App/App.styled';
import Navigation from './Navigation';
import Socials from './Socials';

const SharedHeader = () => {
  return (
    <header>
      <MainContainer>
        <HeaderWrap>
          <Logo />
          <Navigation />
          <Socials />
          <BurgerBtn type="button">
            <BurgerIcon />
          </BurgerBtn>
        </HeaderWrap>
      </MainContainer>
    </header>
  );
};

export default SharedHeader;
