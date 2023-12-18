import { styled } from 'styled-components';

export const CardsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px 16px;
  }
`;

export const CardListItem = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }
`;
