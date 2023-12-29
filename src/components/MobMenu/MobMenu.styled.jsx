import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MenuBackdrop = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
  }
`;

export const Menu = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;
    padding: 20px;
    background-color: ${({ theme }) => theme.backdrop};
    opacity: 0;
    overflow: hidden;
    transition: ${({ theme }) => `left ${theme.eased}, opacity ${theme.eased}`};

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
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transform: translate(-50%, -50%);
`;

export const MenuNavLink = styled(Link)`
  color: ${({ theme }) => theme.background};
`;
