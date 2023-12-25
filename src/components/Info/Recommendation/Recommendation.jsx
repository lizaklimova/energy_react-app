import sprite from 'assets/img/sprite.svg';
import {
  RecomBlock,
  RecomTitle,
  RecomName,
  RecomText,
} from './Recommendation.styled';

const Recommendation = () => {
  return (
    <RecomBlock>
      <svg width={32} height={32}>
        <use href={`${sprite}#icon-dumbell`}></use>
      </svg>
      <div>
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
      </div>
    </RecomBlock>
  );
};

export default Recommendation;
