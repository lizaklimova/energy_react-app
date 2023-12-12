import sprite from 'img/sprite.svg';
import heroWomenDesk from '../../img/hero/hero-women-desk.webp';
import heroWomenDesk2x from '../../img/hero/hero-women-desk2x.webp';
import heroWomenTab from '../../img/hero/hero-women-tab.webp';
import heroWomenTab2x from '../../img/hero/hero-women-tab2x.webp';
import heroWomenMob from '../../img/hero/hero-women-mob.webp';
import heroWomenMob2x from '../../img/hero/hero-women-mob2x.webp';
import heroWomenMobJpg from '../../img/hero/hero-women-mob.jpg';

import heroAddMobJpg from '../../img/hero/hero-legs-desk.jpg';
import heroAddMob1x from '../../img/hero/hero-legs-desk.webp';
import heroAddMob2x from '../../img/hero/hero-legs-desk2x.webp';

import { MainContainer } from '../App/App.styled';
import Hashtags from './Hashtags';

import {
  HeroSection,
  HeroTitleIconWrap,
  HeroIcon,
  HeroTitle,
  HeroTitleCursive,
  HeroTitleSpan,
  HeroText,
  HeroMainImg,
  HeroDeskAdditWrap,
  HeroDeskPart,
  HeroHashesDeskList,
  HeroDeskAdditImg,
  HeroHashesDeskItem,
  HeroHashesDeskItemSpan,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <MainContainer>
        <HeroDeskAdditWrap>
          <div>
            <HeroTitleIconWrap>
              <HeroIcon width={38} height={38}>
                <use href={`${sprite}#icon-sun`}></use>
              </HeroIcon>

              <HeroTitle>
                <HeroTitleSpan>
                  Get <HeroTitleCursive>Body</HeroTitleCursive> in
                  <br />
                </HeroTitleSpan>
                shape,Stay healthy
              </HeroTitle>
            </HeroTitleIconWrap>
            <HeroText>
              Transform your physique and embrace a healthier lifestyle with our
              comprehensive fitness and nutrition support.
            </HeroText>
          </div>

          <HeroDeskPart>
            <HeroDeskAdditImg
              src={heroAddMobJpg}
              srcSet={`${heroAddMob1x} 1x, ${heroAddMob2x} 2x`}
              alt="women jogging together"
            />
            <HeroHashesDeskList>
              <HeroHashesDeskItem>
                <HeroHashesDeskItemSpan>#Sport</HeroHashesDeskItemSpan>
              </HeroHashesDeskItem>
              <HeroHashesDeskItem>
                <HeroHashesDeskItemSpan>#Healthy</HeroHashesDeskItemSpan>
              </HeroHashesDeskItem>
              <HeroHashesDeskItem>
                <HeroHashesDeskItemSpan>#Workout</HeroHashesDeskItemSpan>
              </HeroHashesDeskItem>
              <HeroHashesDeskItem>
                <HeroHashesDeskItemSpan>#Diet</HeroHashesDeskItemSpan>
              </HeroHashesDeskItem>
            </HeroHashesDeskList>
          </HeroDeskPart>
        </HeroDeskAdditWrap>

        <picture>
          <source
            media="(min-width: 1440px)"
            type="image/webp"
            srcSet={`${heroWomenDesk} 1x, ${heroWomenDesk2x} 2x`}
          />

          <source
            media="(min-width: 768px)"
            type="image/webp"
            srcSet={`${heroWomenTab} 1x, ${heroWomenTab2x} 2x`}
          />

          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet={`${heroWomenMob} 1x, ${heroWomenMob2x} 2x`}
          />

          <HeroMainImg
            src={heroWomenMobJpg}
            srcSet={`${heroWomenMobJpg} 1x, ${heroWomenMobJpg} 2x`}
            alt="women giving five each other"
          />
        </picture>

        <Hashtags />
      </MainContainer>
    </HeroSection>
  );
};

export default Hero;
