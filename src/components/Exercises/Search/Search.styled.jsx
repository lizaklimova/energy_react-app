import { styled } from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
  height: 44px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 271px;
  }

  @media screen and (min-width: 1440px) {
    width: 271px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 30px;
  border: ${({ theme }) => `1.5px solid ${theme.text}`};
  padding: 12px 20px;
  color: currentColor;
  background-color: transparent;
  transition: ${({ theme }) => `box-shadow ${theme.eased}`};

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 271px;
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
  fill: ${({ theme }) => theme.text};
`;
