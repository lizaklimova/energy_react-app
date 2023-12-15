import sprite from 'img/sprite.svg';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import {
  ExercModalBackdrop,
  ExercModal,
  ModalCloseBtn,
  ModalCloseIcon,
  ModalGifBlock,
  ExercName,
  RatingDiv,
  RatingValue,
  RatingList,
  ExercInfoList,
  ExercInfoItem,
  ExercInfoName,
  ExercInfoValue,
  ExercDescr,
  ModalBtnsList,
  AddRemoveBtn,
  GiveRatingBtn,
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

          <ExercName>{capitalizeFirstLetter(name)}</ExercName>

          <RatingDiv>
            <RatingValue>{rating.toFixed(1)}</RatingValue>
            <RatingList>
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
            </RatingList>
          </RatingDiv>

          <hr />

          <ExercInfoList>
            <ExercInfoItem>
              <ExercInfoName>Target</ExercInfoName>
              <ExercInfoValue>{capitalizeFirstLetter(target)}</ExercInfoValue>
            </ExercInfoItem>
            <ExercInfoItem>
              <ExercInfoName>Body part</ExercInfoName>
              <ExercInfoValue>{capitalizeFirstLetter(part)}</ExercInfoValue>
            </ExercInfoItem>
            <ExercInfoItem>
              <ExercInfoName>Equipment</ExercInfoName>
              <ExercInfoValue>{capitalizeFirstLetter(equip)}</ExercInfoValue>
            </ExercInfoItem>
            <ExercInfoItem>
              <ExercInfoName>Popular</ExercInfoName>
              <ExercInfoValue>{popular}</ExercInfoValue>
            </ExercInfoItem>
          </ExercInfoList>

          <hr />

          <ExercDescr>{descr}</ExercDescr>

          <ModalBtnsList>
            <li>
              <AddRemoveBtn type="button">
                Add to favorites
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-heart`}></use>
                </svg>
                {/* <svg width={18} height={18}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg> */}
              </AddRemoveBtn>
            </li>
            <li>
              <GiveRatingBtn type="button">Give rating</GiveRatingBtn>
            </li>
          </ModalBtnsList>
        </ExercModal>
      </MainContainer>
    </ExercModalBackdrop>
  );
};

export default ExerciseModal;
