import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MenuBackdrop = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 3;
    top: 0;
    bottom: 0;
  }
`;

export const Menu = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 3;
    bottom: 0;
    width: 50vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.backdrop};
    padding: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => `left ${theme.eased}, opacity ${theme.eased}`};
    opacity: 0;

    &.is-open {
      left: 0;
      opacity: 1;
    }
  }
`;

export const CloseMenuBtn = styled.button`
  background-color: transparent;
`;

export const CloseMenuIcon = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  stroke: ${({ theme }) => theme.background};
`;

export const MenuNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuNavLink = styled(Link)`
  color: ${({ theme }) => theme.background};
`;
