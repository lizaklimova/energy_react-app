import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 233px;
  height: 52px;
  border-radius: 60px;
  background-color: ${({ theme: { theme } }) => theme.colors.accentBlack};
  box-shadow: ${({ theme: { theme } }) => theme.shadows.wide};

  @media screen and (min-width: 1440px) {
    width: 265px;
  }
`;
export const NavItem = styled.li``;
export const NavigLink = styled(NavLink)`
  color: ${({ theme: { theme } }) => theme.colors.accentWhite};
  font-size: 16px;
  line-height: 1.5;
  transition: ${({ theme: { theme } }) => `filter ${theme.transitions.linear}`};

  &:hover:not(.active),
  &:focus:not(.active) {
    filter: ${({ theme: { theme } }) =>
      `drop-shadow(-1px 1px 5px ${theme.colors.accentWhite})`};
  }

  &.active {
    padding: 6px 12px;
    border-radius: 30px;
    color: ${({ theme: { theme } }) => theme.colors.accentBlack};
    background-color: ${({ theme: { theme } }) => theme.colors.accentWhite};
  }
`;
