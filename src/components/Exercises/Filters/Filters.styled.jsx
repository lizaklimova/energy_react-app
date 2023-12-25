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
  padding: 0;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  opacity: 0.6;

  &::after {
    content: '';
    position: absolute;
    top: 110%;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 20px;
    background-color: currentColor;
    opacity: 0;
    transition: ${({ theme }) => `all ${theme.eased}`};
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
