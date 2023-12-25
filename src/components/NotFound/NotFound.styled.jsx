import styled from 'styled-components';

export const NotFoundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 50px;
  padding: 50px 0 50px;
  background-color: ${({ theme }) => theme.background};
`;

export const NotFoundTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
`;

export const NotFoundError = styled.p`
  font-size: 150px;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) =>
    `-webkit-linear-gradient(${theme.white}, ${theme.grey})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 1440px) {
    font-size: 200px;
  }
`;

export const NotFoundInfo = styled.p`
  font-size: 37px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  text-align: center;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 1440px) {
    font-size: 57px;
  }
`;
export const NotFoundText = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  text-align: center;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const NotFoundBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundBtn = styled.button`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  transition: ${({ theme }) => `color ${theme.eased}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.notFoundAccent};
  }

  &:hover svg,
  &:focus svg {
    transform: translateX(5px);
    fill: ${({ theme }) => theme.notFoundAccent};
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const NotFoundBtnIcon = styled.svg`
  fill: ${({ theme }) => theme.text};
  transition: ${({ theme }) =>
    `transform ${theme.eased} , fill ${theme.eased}`};
`;

export const NotFoundImgDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NotFoundImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
