import { styled } from 'styled-components';

export const ExercisesSection = styled.section`
  padding: 40px 0 80px 0;
`;

export const ExercisesTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.36;
  letter-spacing: -0.56px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1.09;
    letter-spacing: -0.88px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const ExersisesPositionWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

export const FiltersAndSearchWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    align-items: baseline;
    gap: 32px;
  }
`;
