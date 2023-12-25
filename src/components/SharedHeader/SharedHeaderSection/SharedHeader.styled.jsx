import { styled } from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const BurgerBtn = styled.button`
  display: block;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.text};
`;
