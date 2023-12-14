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
