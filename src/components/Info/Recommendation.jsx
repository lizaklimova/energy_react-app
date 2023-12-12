import sprite from 'img/sprite.svg';
import {
  RecomBlock,
  DumbellIcon,
  RecomTextBlock,
  RecomTitle,
  RecomName,
  RecomText,
} from './Recommendation.styled';

const Recommendation = () => {
  return (
    <RecomBlock>
      <DumbellIcon width={32} height={32}>
        <use href={`${sprite}#icon-dumbell`}></use>
      </DumbellIcon>
      <RecomTextBlock>
        <RecomTitle>110 min</RecomTitle>
        <RecomName>Daily norm of sports</RecomName>
        <RecomText>
          The World Health Organization recommends at least 150 minutes of
          moderate-intensity aerobic physical activity throughout the week for
          adults aged 18-64. However, what happens if we adjust that number to
          110 minutes every day? While it might seem like a high number to hit,
          dedicating 110 minutes daily to sporting activities may offer
          unparalleled benefits to physical health, mental well-being, and
          overall quality of life.
        </RecomText>
      </RecomTextBlock>
    </RecomBlock>
  );
};

export default Recommendation;
