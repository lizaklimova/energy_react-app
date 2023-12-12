import { styled } from 'styled-components';

export const FiltersList = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const FilterItem = styled.li`
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
`;
export const FilterItemBlock = styled.div`
  width: 100%;
  height: 225px;
  border-radius: 12px;

  background-image: ${props =>
    `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${props.$img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
