import sprite from 'assets/img/sprite.svg';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import {
  ExercModalBackdrop,
  ExercModal,
  ModalCloseBtn,
  ModalCloseIcon,
  TabPositionDiv,
  ModalGifBlock,
  ExercName,
  RatingDiv,
  RatingValue,
  RatingList,
  RatingStarIcon,
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

          <TabPositionDiv>
            <ModalGifBlock $gifUrl={gif}></ModalGifBlock>
            <div>
              <ExercName>{capitalizeFirstLetter(name)}</ExercName>
              <RatingDiv>
                <RatingValue>{rating.toFixed(1)}</RatingValue>

                <div style={{ position: 'relative' }}>
                  <RatingList>
                    <li>
                      <RatingStarIcon width={18} height={18}>
                        <use href={`${sprite}#icon-star`}></use>
                      </RatingStarIcon>
                    </li>
                    <li>
                      <RatingStarIcon width={18} height={18}>
                        <use href={`${sprite}#icon-star`}></use>
                      </RatingStarIcon>
                    </li>
                    <li>
                      <RatingStarIcon width={18} height={18}>
                        <use href={`${sprite}#icon-star`}></use>
                      </RatingStarIcon>
                    </li>
                    <li>
                      <RatingStarIcon width={18} height={18}>
                        <use href={`${sprite}#icon-star`}></use>
                      </RatingStarIcon>
                    </li>
                    <li>
                      <RatingStarIcon width={18} height={18}>
                        <use href={`${sprite}#icon-star`}></use>
                      </RatingStarIcon>
                    </li>
                  </RatingList>
                </div>
              </RatingDiv>
              <hr />
              <ExercInfoList>
                <ExercInfoItem>
                  <ExercInfoName>Target</ExercInfoName>
                  <ExercInfoValue>
                    {capitalizeFirstLetter(target)}
                  </ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Body part</ExercInfoName>
                  <ExercInfoValue>{capitalizeFirstLetter(part)}</ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Equipment</ExercInfoName>
                  <ExercInfoValue>
                    {capitalizeFirstLetter(equip)}
                  </ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Popular</ExercInfoName>
                  <ExercInfoValue>{popular}</ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Burned Calories</ExercInfoName>
                  <ExercInfoValue>{`${calories}/${time}min`}</ExercInfoValue>
                </ExercInfoItem>
              </ExercInfoList>
              <hr />
              <ExercDescr>{descr}</ExercDescr>
            </div>
          </TabPositionDiv>

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
