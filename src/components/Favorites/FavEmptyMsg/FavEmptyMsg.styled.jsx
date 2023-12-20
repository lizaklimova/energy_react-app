import styled from 'styled-components';

export const FavEmptyMsgDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const EmptyFavsMsg = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 768px) {
    max-width: 554px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
