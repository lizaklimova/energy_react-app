import { styled } from 'styled-components';

export const HeroSection = styled.section`
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 100px 0 64px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0;
  }
`;

export const HeroTitleIconWrap = styled.div`
  position: relative;
`;

export const HeroIcon = styled.svg`
  position: absolute;
  top: 5px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 74px;
    line-height: 1;
    letter-spacing: -1.48px;
  }
`;

export const HeroTitleSpan = styled.span`
  padding-left: 43px;

  @media screen and (min-width: 768px) {
    padding-left: 65px;
  }
`;

export const HeroTitleCursive = styled.span`
  font-style: italic;
`;

export const HeroText = styled.p`
  font-size: 13px;
  letter-spacing: -0.28px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    max-width: 528px;
  }
`;

export const HeroMainImg = styled.img`
  border-radius: 30px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const HeroDeskAdditWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroDeskPart = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }
`;

export const HeroDeskAdditImg = styled.img`
  width: 168px;
  height: 100px;
  border-radius: 20px;
`;

export const HeroHashesDeskList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  max-width: 200px;
`;

export const HeroHashesDeskItem = styled.li`
  border-radius: 30px;
  padding: 4px 14px;
  border: ${({ theme }) => `1px solid ${theme.text}`};
  box-shadow: ${({ theme }) => theme.shadowVolume};
`;

export const HeroHashesDeskItemSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
