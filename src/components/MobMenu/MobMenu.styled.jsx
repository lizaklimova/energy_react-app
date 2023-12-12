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
`;

export const MenuNavLink = styled(Link)`
  color: ${({ theme }) => theme.background};
`;

export const MenuSocialsList = styled.ul`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const MenuSocialsItem = styled.li`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadowVolumeMob};

  opacity: 0.8;
`;
export const MenuSocialsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuSocialsIcon = styled.svg`
  fill: ${({ theme }) => theme.background};
`;
