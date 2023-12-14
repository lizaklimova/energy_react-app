import sprite from 'img/sprite.svg';
import {
  ExercModalBackdrop,
  ExercModal,
  ModalCloseBtn,
  ModalCloseIcon,
  ModalGifBlock,
} from './ExerciseModal.styled';
import { MainContainer } from 'components/App/App.styled';

const ExerciseModal = ({
  name,
  descr,
  gif,
  rating,
  target,
  part,
  equip,
  popular,
  calories,
  time,
}) => {
  return (
    <ExercModalBackdrop>
      <MainContainer>
        <ExercModal>
          <ModalCloseBtn type="button">
            <ModalCloseIcon width={24} height={24}>
              <use href={`${sprite}#icon-close`}></use>
            </ModalCloseIcon>
          </ModalCloseBtn>

          <ModalGifBlock $gifUrl={gif}></ModalGifBlock>

          <h3>{name}</h3>

          <div>
            <span>{rating.toFixed(1)}</span>
            <ul>
              <li>
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
              </li>
              <li>
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
              </li>
              <li>
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
              </li>
              <li>
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
              </li>
              <li>
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
              </li>
            </ul>
          </div>

          <hr />

          <ul>
            <li>
              <p>Target</p>
              <p>{target}</p>
            </li>
            <li>
              <p>Body part</p>
              <p>{part}</p>
            </li>
            <li>
              <p>Equipment</p>
              <p>{equip}</p>
            </li>
            <li>
              <p>Popular</p>
              <p>{popular}</p>
            </li>
          </ul>

          <hr />

          <p>{descr}</p>

          <ul>
            <li>
              <button type="button">
                Add to favorites
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-heart`}></use>
                </svg>
                {/* <svg width={18} height={18}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg> */}
              </button>
            </li>
            <li>
              <button type="button">Give rating</button>
            </li>
          </ul>
        </ExercModal>
      </MainContainer>
    </ExercModalBackdrop>
  );
};

export default ExerciseModal;
