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
  background-color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.shadowWide};

  @media screen and (min-width: 1440px) {
    width: 265px;
  }
`;
export const NavItem = styled.li``;
export const NavigLink = styled(NavLink)`
  color: ${({ theme }) => theme.background};
  font-size: 16px;
  line-height: 1.5;
  transition: ${({ theme }) => `filter ${theme.linear}`};

  &:hover:not(.active),
  &:focus:not(.active) {
    filter: ${({ theme }) => `drop-shadow(-1px 1px 5px ${theme.background})`};
  }

  &.active {
    padding: 6px 12px;
    border-radius: 30px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }
`;
