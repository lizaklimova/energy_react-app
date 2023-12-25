import styled, { keyframes } from 'styled-components';

const scalingStartBtn = keyframes`
  0% {
    transform: scale(0.7);
  }
 100% {
     transform: scale(1.2) translateX(3px);

  }
`;

export const Card = styled.div`
  border-radius: 15px;
  border: ${({ theme }) => `1.5px solid ${theme.text}`};
  padding: 16px;
  background-color: ${({ theme }) => theme.cardBackground};

  @media screen and (min-width: 1440px) {
    min-width: 350px;
  }
`;

export const WorkoutDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const WorkoutBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Workout = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: ${({ theme }) => `1.5px solid ${theme.text}`};
  padding: 5px 7.5px;
  color: ${({ theme }) => theme.text};
`;

export const RatingWrap = styled.div`
  display: flex;
  gap: 5px;
`;

export const RatingNumber = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
`;

export const RatingIcon = styled.svg`
  fill: ${({ theme }) => theme.orange};
`;

export const ExerciseNameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0 16px 0;
`;

export const ManIcon = styled.svg`
  fill: ${({ theme }) => theme.text};
`;

export const ExerciseName = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.33;
  }
`;

export const StartBtn = styled.button`
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

export const StartIcon = styled.svg`
  stroke: ${({ theme }) => theme.text};
  animation: ${scalingStartBtn} 1.5s ease-in-out infinite;
`;

export const ExerciseInfoList = styled.ul`
  display: flex;
  gap: 3px;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const ExerciseInfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const ExerciseInfoTitle = styled.p`
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;

  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;

export const ExerciseInfo = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
