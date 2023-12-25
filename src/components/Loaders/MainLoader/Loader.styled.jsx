import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px); 
  }
  100% {
    transform: translateX(0);
  }
`;

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.accentBlack};
  opacity: 0.8;
`;

export const LoaderIcon = styled.svg`
  fill: ${({ theme }) => theme.accentWhite};
  animation: ${spin} 1.5s linear infinite;
`;
