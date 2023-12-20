import styled from 'styled-components';

export const FavSection = styled.section`
  padding: 70px 0 75px 0;
`;

export const FavTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.56px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1.09;
    letter-spacing: -0.88px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const InfoCardsWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
