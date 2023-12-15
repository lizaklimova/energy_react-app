import { styled } from 'styled-components';

export const ExercModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  overflow: hidden;
  background-color: rgba(4, 4, 4, 0.1);
`;

export const ExercModal = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.accentBlack};
  border-radius: 20px;
  padding: 40px 20px;

  & hr {
    border-color: rgba(244, 244, 244, 0.2);
  }
`;

export const ModalCloseBtn = styled.button`
  background-color: transparent;
`;

export const ModalCloseIcon = styled.svg`
  stroke: ${({ theme }) => theme.accentWhite};
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ModalGifBlock = styled.div`
  background: ${({ $gifUrl }) =>
    `linear-gradient(0deg, rgba(4, 4, 4, 0.20) 0%, rgba(17, 17, 17, 0.50) 100%), url(${$gifUrl}) no-repeat center / cover`};
  width: 295px;
  height: 260px;
  border-radius: 12px;
`;

export const ExercName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  margin: 20px 0 10px 0;
`;

export const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const RatingValue = styled.span`
  font-size: 12px;
  line-height: 1.5;
`;

export const RatingList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ExercInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 8px 0 8px 0;
`;

export const ExercInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% - 40px) / 3);
`;

export const ExercInfoName = styled.p`
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.4;
`;

export const ExercInfoValue = styled.p`
  font-weight: 500;
`;

export const ExercDescr = styled.p`
  opacity: 0.4;
  margin: 20px 0 40px 0;
`;

export const ModalBtnsList = styled.ul``;
export const AddRemoveBtn = styled.button``;
export const GiveRatingBtn = styled.button``;
