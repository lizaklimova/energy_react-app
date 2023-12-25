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
  margin-bottom: 20px;
  color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SubInput = styled.input`
  width: 100%;
  border-radius: 30px;
  border: 1px solid currentColor;
  padding: 12px 14px 12px 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.background};

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
  border-radius: 30px;
  margin: 20px 0 100px 0;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  transition: ${({ theme }) => `opacity ${theme.eased}`};

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
