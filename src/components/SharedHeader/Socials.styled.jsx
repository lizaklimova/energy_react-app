import { styled } from 'styled-components';

export const SocialsList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
`;
export const SocialsItem = styled.li`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(36, 36, 36, 0.1);
  box-shadow: ${({ theme }) => theme.shadowVolume};
  transition: ${({ theme }) =>
    ` background-color ${theme.linear}, opacity ${theme.linear}`};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
  &:hover svg,
  &:focus svg {
    fill: ${({ theme }) => theme.background};
  }
`;
export const SocialsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialsIcon = styled.svg`
  opacity: 0.8;
  transition: ${({ theme }) => `fill ${theme.linear}`};
`;
