import { styled } from 'styled-components';

export const ListAndPaginationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FavCardsUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 900px;
    max-height: 550px;
    margin-top: 0;
    overflow-y: auto;
  }
`;

export const FavCardLi = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }
`;
