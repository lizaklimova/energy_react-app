import { styled } from 'styled-components';

export const RecomBlock = styled.div`
  border-radius: 20px;
  background-color: #fff;
  padding: 40px;
  display: flex;
  gap: 18px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;
export const DumbellIcon = styled.svg``;

export const RecomTextBlock = styled.div``;

export const RecomTitle = styled.p`
  color: ${({ theme }) => theme.accentBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 6px;
`;
export const RecomName = styled.p`
  color: ${({ theme }) => theme.accentBlack};
  opacity: 0.6;
  margin-bottom: 16px;
`;
export const RecomText = styled.p`
  color: ${({ theme }) => theme.accentBlack};
  max-width: 270px;
  max-height: 110px;
  overflow-y: scroll;
  text-overflow: ellipsis;
  white-space: wrap;
`;
