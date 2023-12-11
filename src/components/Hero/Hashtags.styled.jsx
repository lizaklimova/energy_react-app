import { styled } from 'styled-components';

export const HeroHashesMobList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const HeroHashesMobItem = styled.li`
  border-radius: 30px;
  padding: 4px 14px;
  border: ${({ theme: { theme } }) => `1px solid ${theme.colors.accentBlack}`};
  box-shadow: ${({ theme: { theme } }) => theme.shadows.volume};
`;

export const HeroHashesItemSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
