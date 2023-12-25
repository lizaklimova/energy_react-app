import { styled } from 'styled-components';

export const ExercModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.exercModalBackdrop};
  backdrop-filter: blur(5px);
  opacity: 0.5;
  transition: ${({ theme }) => `opacity ${theme.eased}`};

  &.showBackdrop {
    opacity: 1;
  }
`;

export const ExercModal = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 40px 20px;
  margin: 0 auto;
  opacity: 0.5;
  transform: translateY(-100vh);
  overflow-y: auto;
  background-color: ${({ theme }) => theme.accentBlack};
  transition: ${({ theme }) =>
    `opacity .5s ${theme.modalTransition}, transform .5s ${theme.modalTransition}`};

  & hr {
    border-color: ${({ theme }) => theme.greyStarFill};
  }

  &.showModal {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (min-width: 768px) {
    width: 708px;
    min-height: 435px;
    padding: 32px;
  }
`;

export const ModalCloseBtn = styled.button`
  background-color: transparent;

  &:hover svg,
  &:focus svg {
    transform: scale(1.1);
    filter: ${({ theme }) => `drop-shadow(1px 3px 5px ${theme.accentWhite})`};
  }
`;

export const ModalCloseIcon = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  stroke: ${({ theme }) => theme.accentWhite};
  transition: ${({ theme }) =>
    `transform ${theme.eased}, filter ${theme.eased}`};
`;

export const TabPositionDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-bottom: 30px;
  }
`;

export const ModalGifBlock = styled.div`
  background: ${({ theme, $gifUrl }) =>
    `${theme.gradient}, url(${$gifUrl}) no-repeat center / cover`};
  width: 295px;
  height: 260px;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 270px;
    height: 259px;
  }
`;

export const ExercName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.accentWhite};
  margin: 20px 0 10px 0;

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const RatingDiv = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

export const RatingValue = styled.span`
  color: ${({ theme }) => theme.accentWhite};
  font-size: 12px;
  line-height: 1.5;
`;

export const RatingList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.accentWhite};
`;

export const RatingStarIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${({ $fill }) => $fill};
`;

export const ExercInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 15px;
  margin: 8px 0 8px 0;
  color: ${({ theme }) => theme.accentWhite};

  @media screen and (min-width: 768px) {
    flex-wrap: no-wrap;
    gap: 20px;
  }
`;

export const ExercInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc((100% - 60px) / 4);

  @media screen and (min-width: 768px) {
    width: unset;
  }
`;

export const ExercInfoName = styled.p`
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.4;
`;

export const ExercInfoValue = styled.p`
  font-size: 11px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ExercDescr = styled.p`
  margin: 20px 0 40px 0;
  color: ${({ theme }) => theme.accentWhite};
  opacity: 0.4;

  @media screen and (min-width: 768px) {
    text-align: justify;
    max-width: 342px;
    margin: 0;
    margin-top: 20px;
  }
`;

export const ModalBtnsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AddRemoveBtn = styled.button`
  font-size: 14px;
  line-height: 1.29;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  padding: 12px 24px;
  color: ${({ theme }) => theme.accentBlack};
  background-color: ${({ theme }) => theme.accentWhite};
  transition: ${({ theme }) =>
    `outline ${theme.eased}, background-color ${theme.eased},  color ${theme.eased}`};

  svg {
    fill: transparent;
    stroke: ${({ theme }) => theme.accentBlack};
    transition: ${({ theme }) => `stroke ${theme.eased}`};
  }

  &:hover,
  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.accentWhite}`};
    background-color: transparent;
    color: ${({ theme }) => theme.accentWhite};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.accentWhite};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const GiveRatingBtn = styled.button`
  font-size: 14px;
  line-height: 1.29;
  border-radius: 30px;
  border: ${({ theme }) => `1px solid ${theme.accentWhite}`};
  padding: 12px 24px;
  color: ${({ theme }) => theme.accentWhite};
  background-color: transparent;
  transition: ${({ theme }) =>
    `outline ${theme.eased}, background-color ${theme.eased},  color ${theme.eased}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.accentBlack};
    background-color: ${({ theme }) => theme.accentWhite};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
