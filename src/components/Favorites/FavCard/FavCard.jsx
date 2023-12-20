import { useContext } from 'react';
import { ModalContext } from 'contexts/ExercModalOpen';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import sprite from 'assets/img/sprite.svg';

import {
  FavCardDiv,
  FavWorkoutDiv,
  FavWorkoutBtnDiv,
  FavWorkout,
  DeleteBtn,
  TrashIcon,
  FavExerciseNameWrap,
  FavManIcon,
  FavExerciseName,
  FavStartBtn,
  FavStartIcon,
  FavExerciseInfoList,
  FavExerciseInfoItem,
  FavExerciseInfoTitle,
  FavExerciseInfo,
} from './FavCard.styled';

const FavCard = ({
  id,
  part,
  calories,
  name,
  target,
  time,
  openModal,
  setCurId,
  favCards,
  setSavedCards,
  setCurExercId,
}) => {
  const handleDeleteFromFavs = () => {
    const updatedFavCards = favCards.filter(card => card._id !== id);
    setSavedCards(updatedFavCards);
    localStorage.setItem('favorites', JSON.stringify(updatedFavCards));
  };

  return (
    <FavCardDiv>
      <FavWorkoutBtnDiv>
        <FavWorkoutDiv>
          <FavWorkout>workout</FavWorkout>
          <DeleteBtn
            onClick={() => {
              handleDeleteFromFavs();
              setCurExercId();
              window.location.reload();
            }}
          >
            <TrashIcon width={18} height={18}>
              <use href={`${sprite}#icon-trash`}></use>
            </TrashIcon>
          </DeleteBtn>
        </FavWorkoutDiv>
        <FavStartBtn
          type="button"
          onClick={() => {
            setCurId(id);
            openModal(id);
            document.body.style.overflow = 'hidden';
          }}
        >
          <span>Start</span>
          <FavStartIcon width={16} height={16}>
            <use href={`${sprite}#icon-arrow`}></use>
          </FavStartIcon>
        </FavStartBtn>
      </FavWorkoutBtnDiv>

      <FavExerciseNameWrap>
        <FavManIcon width={24} height={24}>
          <use href={`${sprite}#icon-man`}></use>
        </FavManIcon>
        <FavExerciseName>{capitalizeFirstLetter(name)}</FavExerciseName>
      </FavExerciseNameWrap>

      <FavExerciseInfoList>
        <FavExerciseInfoItem>
          <FavExerciseInfoTitle>Burned calories:</FavExerciseInfoTitle>
          <FavExerciseInfo>{`${calories}/${time} min`}</FavExerciseInfo>
        </FavExerciseInfoItem>
        <FavExerciseInfoItem>
          <FavExerciseInfoTitle>Body part:</FavExerciseInfoTitle>
          <FavExerciseInfo>{capitalizeFirstLetter(part)}</FavExerciseInfo>
        </FavExerciseInfoItem>
        <FavExerciseInfoItem>
          <FavExerciseInfoTitle>Target:</FavExerciseInfoTitle>
          <FavExerciseInfo>{capitalizeFirstLetter(target)}</FavExerciseInfo>
        </FavExerciseInfoItem>
      </FavExerciseInfoList>
    </FavCardDiv>
  );
};

export default FavCard;
