import { styled } from 'styled-components';

export const QuoteBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.text};

  @media screen and (min-width: 768px) {
    justify-content: ${({ $variant }) =>
      $variant === 'fav' ? 'flex-start' : 'center'};
    width: ${({ $variant }) =>
      $variant === 'fav' ? '100%' : 'calc((100% - 16px) / 2)'};
    padding: 40px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: unset;
  }
`;

export const ManIcon = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  fill: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    top: 40px;
    left: 40px;
  }
`;

export const QuoteTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 45px;
  color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`;

export const QuoteTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 6px;
`;

export const QuoteText = styled.p`
  opacity: 0.6;
`;

export const QuoteAuthor = styled.p`
  margin-top: 16px;
`;

export const CommasIcon = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    top: 40px;
    right: 40px;
  }
`;
