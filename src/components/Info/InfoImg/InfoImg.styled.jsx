import { styled } from 'styled-components';

export const InfoImageBlock = styled.div`
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;
export const InfoImage = styled.picture`
  img {
    border-radius: 20px;
    height: 100%;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;
