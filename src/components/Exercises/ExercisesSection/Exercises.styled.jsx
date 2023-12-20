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

  span {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    margin-bottom: inherit;
  }

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

export const FiltersCardsAndInfoWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }
`;

export const BreadCrumb = styled.p`
  display: inline-block;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.48px;
  opacity: 0.5;
`;

export const ExercisesPaginationWrap = styled.div``;
