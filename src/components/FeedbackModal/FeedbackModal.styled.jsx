import styled from 'styled-components';

export const FeedModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 6;
  overflow: hidden;
  background-color: ${({ theme }) => theme.feedModalBackdrop};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeedModal = styled.div`
  position: relative;
  width: 100%;
  height: 357px;
  background-color: ${({ theme }) => theme.accentBlack};
  border-radius: 20px;
  padding: 40px 20px;
  margin: 0 auto;
  z-index: 7;

  @media screen and (min-width: 768px) {
    width: 430px;
    height: 412px;
    padding: 40px;
  }
`;

export const FeedModalCloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;

  &:hover svg,
  &:focus svg {
    transform: scale(1.1);
    filter: ${({ theme }) => `drop-shadow(1px 3px 5px ${theme.accentWhite})`};
  }
`;

export const FeedModalCloseIcon = styled.svg`
  stroke: ${({ theme }) => theme.accentWhite};
  transition: ${({ theme }) =>
    `transform ${theme.eased}, filter ${theme.eased}`};
`;

export const FeedModalRatDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const FeedModalRatTitle = styled.p`
  color: ${({ theme }) => theme.accentWhite};
  opacity: 0.4;
  font-size: 12px;
  line-height: 1.5;
`;

export const FeedModalRatValue = styled.p`
  color: ${({ theme }) => theme.accentWhite};
  font-size: 12px;
  line-height: 1.5;
`;

export const FeedModalRatListWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const FeedModalRatList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const FeedModalRatStar = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ $color }) => $color};
  cursor: pointer;
  transition: ${({ theme }) => `fill ${theme.eased}`};
`;

export const FeedModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const FeedModalInput = styled.input`
  width: 100%;
  border-radius: 30px;
  border: ${({ theme }) => ` 1px solid ${theme.accentWhite}`};
  color: ${({ theme }) => theme.accentWhite};
  background-color: transparent;
  padding: 12px 14px;

  &::placeholder {
    transition: ${({ theme }) => `font-size ${theme.eased}`};
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    font-size: 12px;
  }
`;

export const FeedModalArea = styled.textarea`
  font-family: Neue Montreal, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  width: 100%;
  min-height: 93px;
  border-radius: 15px;
  border: ${({ theme }) => ` 1px solid ${theme.accentWhite}`};
  color: ${({ theme }) => theme.accentWhite};
  background-color: transparent;
  color: ${({ theme }) => theme.accentWhite};
  padding: 12px 14px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.accentWhite};
    opacity: 0.6;
    transition: ${({ theme }) => `font-size ${theme.eased}`};
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    font-size: 12px;
  }
`;

export const FeedModalSubmitBtn = styled.button`
  width: 100%;
  border-radius: 30px;
  padding: 12px;
  margin-top: 10px;
  transition: ${({ theme }) => `opacity ${theme.eased}`};

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
