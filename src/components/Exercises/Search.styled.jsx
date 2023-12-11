import { styled } from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const SearchWrap = styled.div`
  position: relative;
  width: 100%;
  height: 44px;

  @media screen and (min-width: 428px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 221px;
  }

  @media screen and (min-width: 1440px) {
    width: 271px;
  }
`;

export const SearchInputLabel = styled.label`
  color: ${({ theme: { theme } }) => theme.colors.accentBlack};
  font-size: 14px;
  line-height: 1.43;
  position: absolute;
  top: 10px;
  left: 20px;
  transition: ${({ theme: { theme } }) => `top ${theme.transitions.eased}`};

  @media screen and (min-width: 768px) {
    top: 8px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 30px;
  border: ${({ theme: { theme } }) =>
    `1.5px solid ${theme.colors.accentBlack}`};
  background-color: transparent;
  padding: 12px 20px;
  transition: ${({ theme: { theme } }) =>
    `box-shadow ${theme.transitions.eased}`};

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &:focus + label {
    outline: none;
    top: -12px;
    background-color: ${({ theme: { theme } }) => theme.colors.accentWhite};
  }

  @media screen and (min-width: 428px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 221px;
  }

  @media screen and (min-width: 1440px) {
    width: 271px;
  }
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  top: 10px;
  right: 16px;
  width: 18px;
  height: 18px;
  fill: ${({ theme: { theme } }) => theme.colors.accentBlack};
`;