import { styled } from 'styled-components';

export const LogoIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoIcon = styled.svg`
  fill: ${({ theme, $variant }) =>
    $variant === 'footer' ? theme.background : theme.text};
  transition: ${({ theme }) => theme.eased};

  &:hover,
  &:focus {
    filter: ${({ theme, $variant }) =>
      `drop-shadow(-1px 1px 5px  ${
        $variant === 'footer' ? theme.background : theme.text
      })`};
  }
`;
