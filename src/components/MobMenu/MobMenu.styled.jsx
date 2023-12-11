import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MenuBackdrop = styled.div`
  /* width: 100vw;
  height: 100vh; */
`;
export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  bottom: 0;
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme: { theme } }) => theme.colors.accentBlack};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: ${({ theme: { theme } }) => `left ${theme.transitions.eased}`};
  &.is-open {
    left: 0;
  }
`;

export const CloseMenuBtn = styled.button`
  background-color: transparent;
`;

export const CloseMenuIcon = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  stroke: ${({ theme: { theme } }) => theme.colors.accentWhite};
`;

export const MenuNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const MenuNavLink = styled(Link)`
  color: ${({ theme: { theme } }) => theme.colors.accentWhite};
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
  border: 1px solid ${({ theme: { theme } }) => theme.colors.accentWhite};
  opacity: 0.8;
`;
export const MenuSocialsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuSocialsIcon = styled.svg`
  fill: ${({ theme: { theme } }) => theme.colors.accentWhite};
`;
