import styled, { keyframes } from 'styled-components';

const scalingStartBtn = keyframes`
  0% {
    transform: scale(0.7);
  }
 100% {
     transform: scale(1.2) translateX(3px);

  }
`;

export const FavCardDiv = styled.div`
  border-radius: 15px;
  border: ${({ theme }) => `1.5px solid ${theme.text}`};
  padding: 14px;
  background-color: ${({ theme }) => theme.cardBackground};
`;

export const FavWorkoutDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FavWorkoutBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FavWorkout = styled.div`
  text-transform: uppercase;
  border-radius: 15px;
  border: ${({ theme }) => `1.5px solid ${theme.text}`};
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  font-weight: 500;
  padding: 5px 7.5px;
  display: flex;
  justify-content: center;
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  transition: ${({ theme }) =>
    `transform ${theme.eased}, filter ${theme.eased}`};

  &:hover,
  &:focus {
    transform: scale(1.1);
    filter: ${({ theme }) => `drop-shadow(0px 0px 3px ${theme.filterColor})`};
  }
`;

export const TrashIcon = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.text};
`;

export const FavExerciseNameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0 16px 0;
`;

export const FavManIcon = styled.svg`
  fill: ${({ theme }) => theme.text};
`;

export const FavExerciseName = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.33;
  }
`;

export const FavStartBtn = styled.button`
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  span {
    transition: ${({ theme }) =>
      `transform ${theme.eased}, filter ${theme.eased}`};
  }

  &:hover span,
  &:focus span {
    transform: scale(1.1);
    filter: ${({ theme }) => `drop-shadow(-1px 1px 5px  ${theme.text})`};
  }
`;

export const FavStartIcon = styled.svg`
  stroke: ${({ theme }) => theme.text};
  animation: ${scalingStartBtn} 1.5s ease-in-out infinite;
`;

export const FavExerciseInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    gap: 5px;
  }
`;

export const FavExerciseInfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const FavExerciseInfoTitle = styled.p`
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
`;

export const FavExerciseInfo = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.text};
`;
