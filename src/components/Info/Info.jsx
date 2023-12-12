import Quote from './Quote';
import InfoImg from './InfoImg';
import Recommendation from './Recommendation';
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
