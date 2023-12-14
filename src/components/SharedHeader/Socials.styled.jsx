import { styled } from 'styled-components';

export const SocialsList = styled.ul`
  @media screen and (max-width: 767px) {
    display: ${({ variant }) => (variant === 'footer' ? 'flex' : 'none')};
  }
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const SocialsItem = styled.li`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: ${({ theme, variant }) =>
    `1px solid ${
      variant === 'footer' ? theme.headerOpacity : theme.footerOpacity
    }`};

  box-shadow: ${({ theme, variant }) =>
    variant === 'footer'
      ? `${theme.headerOpacity} 0px 3px 8px`
      : theme.shadowVolume};
  opacity: 1;
  transition: ${({ theme }) =>
    ` background-color ${theme.linear}, opacity ${theme.linear}`};

  &:hover,
  &:focus {
    background-color: ${({ theme, variant }) =>
      variant === 'footer' ? theme.background : theme.text};
    opacity: 0.8;
  }

  &:hover svg,
  &:focus svg {
    fill: ${({ theme, variant }) =>
      variant === 'footer' ? theme.text : theme.background};
  }
`;

export const SocialsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialsIcon = styled.svg`
  fill: ${({ theme, variant }) =>
    variant === 'footer' ? theme.background : theme.text};
  opacity: 0.8;
  transition: ${({ theme }) => `fill ${theme.linear}`};
`;
