import styled from 'styled-components';

export const FavInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 132px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 494px;
    margin-bottom: 0;
  }
`;

export const FavInfoPositioning = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const FavInfoRecommendation = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 20px;
  background-color: ${({ theme }) => theme.favInfoBg};
  border: ${({ theme }) => theme.favInfoBorder};
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
    height: 141px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    height: 128px;
  }
`;

export const FavInfoTextWrap = styled.div``;

export const FavInfoRecIcon = styled.svg`
  fill: ${({ theme }) => theme.text};
`;

export const FavInfoRecMin = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 6px;
`;

export const FavInfoRecText = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
`;

export const FavInfoImg = styled.picture`
  img {
    min-height: 120px;
    border-radius: 20px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;
