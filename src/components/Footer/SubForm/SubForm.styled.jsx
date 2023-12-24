import { styled } from 'styled-components';

export const SubscrForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`;

export const SubFormTitle = styled.p`
  color: ${({ theme }) => theme.background};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SubInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.background};
  border: 1px solid currentColor;
  width: 100%;
  padding: 12px 14px 12px 14px;
  border-radius: 30px;

  &::placeholder {
    color: ${({ theme }) => theme.background};
    opacity: 0.6;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;

export const SubBtn = styled.button`
  width: 100%;
  padding: 12px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border-radius: 30px;
  transition: ${({ theme }) => `opacity ${theme.eased}`};
  margin: 20px 0 100px 0;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
