import {
  HeroHashesMobList,
  HeroHashesMobItem,
  HeroHashesItemSpan,
} from './Hashtags.styled';

const Hashtags = () => {
  return (
    <>
      <HeroHashesMobList>
        <HeroHashesMobItem>
          <HeroHashesItemSpan>#Sport</HeroHashesItemSpan>
        </HeroHashesMobItem>
        <HeroHashesMobItem>
          <HeroHashesItemSpan>#Healthy</HeroHashesItemSpan>
        </HeroHashesMobItem>
        <HeroHashesMobItem>
          <HeroHashesItemSpan>#Workout</HeroHashesItemSpan>
        </HeroHashesMobItem>
        <HeroHashesMobItem>
          <HeroHashesItemSpan>#Diet</HeroHashesItemSpan>
        </HeroHashesMobItem>
      </HeroHashesMobList>
    </>
  );
};

export default Hashtags;
