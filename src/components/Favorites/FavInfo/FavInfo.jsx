import Quote from 'components/Info/Quote';
import sprite from 'assets/img/sprite.svg';
import favImgMobJpg from 'assets/img/favourites/women-sportswear-working-mob.jpg';
import favImgMobJpg2 from 'assets/img/favourites/women-sportswear-working-mob2x.jpg';
import favImgMob from 'assets/img/favourites/women-sportswear-working-mob.webp';
import favImgMob2 from 'assets/img/favourites/women-sportswear-working-mob2x.webp';
import favImgTab from 'assets/img/favourites/women-sportswear-working-tablet.webp';
import favImgTab2 from 'assets/img/favourites/women-sportswear-working-tablet2x.webp';
import favImgDesk from 'assets/img/favourites/women-sportswear-working-desk.webp';
import favImgDesk2 from 'assets/img/favourites/women-sportswear-working-desk2x.webp';

import {
  FavInfoWrap,
  FavInfoRecommendation,
  FavInfoTextWrap,
  FavInfoPositioning,
  FavInfoRecIcon,
  FavInfoRecMin,
  FavInfoRecText,
  FavInfoImg,
} from './FavInfo.styled';
const FavInfo = () => {
  return (
    <FavInfoWrap>
      <Quote variant={'fav'} />

      <FavInfoPositioning>
        <FavInfoRecommendation>
          <FavInfoRecIcon width={20} height={20}>
            <use href={`${sprite}#icon-fav-dumbell`}></use>
          </FavInfoRecIcon>
          <FavInfoTextWrap>
            <FavInfoRecMin>110 min</FavInfoRecMin>
            <FavInfoRecText>Daily norm of sports</FavInfoRecText>
          </FavInfoTextWrap>
        </FavInfoRecommendation>

        <FavInfoImg>
          <source
            media="(min-width: 1440px)"
            srcSet={`${favImgDesk} 1x, ${favImgDesk2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            type="image/webp"
            srcSet={`${favImgTab} 1x, ${favImgTab2} 2x`}
          />
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet={`${favImgMob} 1x, ${favImgMob2} 2x`}
          />
          <img
            src={favImgMobJpg}
            srcSet={`${favImgMobJpg} 1x, ${favImgMobJpg2} 2x`}
            alt="smiling girls holding bottles of water"
            loading="lazy"
          />
        </FavInfoImg>
      </FavInfoPositioning>
    </FavInfoWrap>
  );
};

export default FavInfo;
