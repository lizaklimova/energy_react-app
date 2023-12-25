import { styled } from 'styled-components';

export const FiltersList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 15px;
    padding: 32px 0;
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
    padding: 20px 0;
    align-items: center;
  }
`;

export const FilterItem = styled.li`
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.shadowCards};
  cursor: pointer;
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
  background: ${({ theme, $img }) =>
    `${theme.filterGradient}, url(${$img}) no-repeat center / cover`};

  @media screen and (min-width: 1440px) {
    height: 242px;
  }
`;

export const FilterTextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
`;

export const NameText = styled.p`
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: ${({ theme }) => theme.accentWhite};
`;

export const FilterText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.accentWhite};
  opacity: 0.4;
`;
