import { styled } from 'styled-components';

export const QuoteBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.text};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: ${({ $variant }) =>
      $variant === 'fav' ? '100%' : 'calc((100% - 16px) / 2)'};
    padding: 40px;
    justify-content: ${({ $variant }) =>
      $variant === 'fav' ? 'flex-start' : 'center'};
  }

  @media screen and (min-width: 1440px) {
    width: unset;
  }
`;

export const ManIcon = styled.svg`
  fill: ${({ theme }) => theme.background};

  position: absolute;
  top: 20px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 40px;
    left: 40px;
  }
`;

export const QuoteTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.background};
  padding-left: 45px;

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
