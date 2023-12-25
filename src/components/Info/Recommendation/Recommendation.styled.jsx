import { styled } from 'styled-components';

export const RecomBlock = styled.div`
  display: flex;
  gap: 18px;
  border-radius: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.white};

  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const RecomTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.accentBlack};
`;

export const RecomName = styled.p`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.accentBlack};
  opacity: 0.6;
`;

export const RecomText = styled.p`
  max-width: 270px;
  max-height: 110px;
  text-overflow: ellipsis;
  white-space: wrap;
  color: ${({ theme }) => theme.accentBlack};
  overflow-y: scroll;
`;
