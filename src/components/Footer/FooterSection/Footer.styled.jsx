import { styled } from 'styled-components';

export const FooterSection = styled.footer`
  padding: 40px 0 20px 0;
  background-color: ${({ theme }) => theme.text};
`;

export const FooterPositioning = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    gap: 70px;
  }
`;

export const FormAndTitleWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 100px;
  }
`;

export const FooterSocialsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 158px;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.background};
  margin: 40px 0 20px 0;

  & span {
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
    letter-spacing: -1.12px;
    margin: 0 0 32px 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 554px;
  }
`;

export const FooterPolicyTabPosition = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterPolicyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    gap: 208px;
    margin: 0;
  }
`;

export const FooterPolicyText = styled.p`
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.background};
`;
