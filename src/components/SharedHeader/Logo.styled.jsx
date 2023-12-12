import { styled } from 'styled-components';

export const LogoIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover,
  &:focus {
    filter: ${({ theme }) => `drop-shadow(-1px 1px 5px ${theme.hover})`};
  }
`;

export const LogoIcon = styled.svg``;
