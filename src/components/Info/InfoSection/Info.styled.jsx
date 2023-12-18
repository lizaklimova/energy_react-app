import { styled } from 'styled-components';

export const InfoSection = styled.section`
  padding: 80px 0;
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`;

export const InfoPositionWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    width: 444px;
  }
`;
