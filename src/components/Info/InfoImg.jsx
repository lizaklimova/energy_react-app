import { InfoImageBlock, InfoImage } from './InfoImg.styled';

import infoImgMobJpg from 'img/info/info-girls-mob.jpg';
import infoImgMobJpg2 from 'img/info/info-girls-mob2x.jpg';
import infoImgMob from 'img/info/info-girls-mob.webp';
import infoImgMob2 from 'img/info/info-girls-mob2x.webp';
import infoImgTab from 'img/info/info-girls-tab.webp';
import infoImgTab2 from 'img/info/info-girls-tab2x.webp';
import infoImgDesk from 'img/info/info-girls-dekstop.webp';
import infoImgDesk2 from 'img/info/info-girls-dekstop2x.webp';

const InfoImg = () => {
  return (
    <InfoImageBlock>
      <InfoImage>
        <source
          media="(min-width: 1440px)"
          srcSet={`${infoImgDesk} 1x, ${infoImgDesk2} 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={`${infoImgTab} 1x, ${infoImgTab2} 2x`}
        />
        <source
          media="(max-width: 767px)"
          type="image/webp"
          srcSet={`${infoImgMob} 1x, ${infoImgMob2} 2x`}
        />
        <img
          src={infoImgMobJpg}
          srcSet={`${infoImgMobJpg} 1x, ${infoImgMobJpg2} 2x`}
          alt="smiling girls holding bottles of water"
          loading="lazy"
        />
      </InfoImage>
    </InfoImageBlock>
  );
};

export default InfoImg;
