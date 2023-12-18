import Quote from '../Quote/Quote';
import InfoImg from '../InfoImg/InfoImg';
import Recommendation from '../Recommendation/Recommendation';
import { InfoSection, InfoPositionWrap } from './Info.styled';

const Info = () => {
  return (
    <InfoSection>
      <InfoPositionWrap>
        <Quote />
        <InfoImg />
        <Recommendation />
      </InfoPositionWrap>
    </InfoSection>
  );
};

export default Info;
