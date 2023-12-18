import { styled } from 'styled-components';

export const FiltersList = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 15px;
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
    padding: 20px 0;
  }
`;

export const FilterItem = styled.li`
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadowCards};
  transition: ${({ theme }) =>
    `transform ${theme.eased}, box-shadow ${theme.eased}`};

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadowCardsHover};
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 3);
  }
`;

export const FilterItemBlock = styled.div`
  width: 100%;
  height: 225px;
  border-radius: 12px;

  background: ${props =>
    `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${props.$img}) no-repeat center / cover`};

  @media screen and (min-width: 1440px) {
    height: 242px;
  }
`;

export const FilterTextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameText = styled.p`
  color: ${({ theme }) => theme.accentWhite};
  text-align: center;
  font-size: 20px;
  line-height: 1;
`;

export const FilterText = styled.p`
  color: ${({ theme }) => theme.accentWhite};
  opacity: 0.4;
  font-size: 12px;
  line-height: 1.5;
`;
