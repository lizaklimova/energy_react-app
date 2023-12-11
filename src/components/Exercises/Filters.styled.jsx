import { styled } from 'styled-components';

export const FiltersList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const FilterItemBtn = styled.button`
  position: relative;
  color: ${({ theme: { theme } }) => theme.colors.accentBlack};
  background-color: transparent;
  opacity: 0.6;
  padding: 0;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: currentColor;
    border-radius: 20px;
    position: absolute;
    top: 110%;
    left: 0;
    opacity: 0;
    transition: ${({ theme: { theme } }) => `all ${theme.transitions.eased}`};
  }

  &.active {
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
    left: 0;
  }

  &.active::after {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
