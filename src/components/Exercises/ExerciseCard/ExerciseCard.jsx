import { useContext } from 'react';
import sprite from 'assets/img/sprite.svg';
import { ModalContext } from 'contexts/ExercModalOpen';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import {
  Card,
  Workout,
  WorkoutDiv,
  RatingWrap,
  RatingNumber,
  WorkoutBtnDiv,
  RatingIcon,
  ExerciseNameWrap,
  ManIcon,
  ExerciseName,
  StartBtn,
  StartIcon,
  ExerciseInfoList,
  ExerciseInfoItem,
  ExerciseInfoTitle,
  ExerciseInfo,
} from '../ExerciseCard/ExerciseCard.styled';

const ExerciseCard = ({
  id,
  rating,
  exercise,
  calories,
  part,
  target,
  setExercId,
  returnExercId,
  exercId,
}) => {
  const { openExercModal } = useContext(ModalContext);

  return (
    <Card>
      <WorkoutBtnDiv>
        <WorkoutDiv>
          <Workout>workout</Workout>
          <RatingWrap>
            <RatingNumber>{rating.toFixed(1)}</RatingNumber>
            <RatingIcon width={18} height={18}>
              <use href={`${sprite}#icon-star`}></use>
            </RatingIcon>
          </RatingWrap>
        </WorkoutDiv>
        <StartBtn
          type="button"
          onClick={() => {
            setExercId(id);
            openExercModal();
            returnExercId(exercId);
            document.body.style.overflow = 'hidden';
          }}
        >
          <span>Start</span>
          <StartIcon width={16} height={16}>
            <use href={`${sprite}#icon-arrow`}></use>
          </StartIcon>
        </StartBtn>
      </WorkoutBtnDiv>

      <ExerciseNameWrap>
        <ManIcon width={24} height={24}>
          <use href={`${sprite}#icon-man`}></use>
        </ManIcon>
        <ExerciseName>{capitalizeFirstLetter(exercise)}</ExerciseName>
      </ExerciseNameWrap>

      <ExerciseInfoList>
        <ExerciseInfoItem>
          <ExerciseInfoTitle>Burned calories:</ExerciseInfoTitle>
          <ExerciseInfo>{calories}</ExerciseInfo>
        </ExerciseInfoItem>
        <ExerciseInfoItem>
          <ExerciseInfoTitle>Body part:</ExerciseInfoTitle>
          <ExerciseInfo>{capitalizeFirstLetter(part)}</ExerciseInfo>
        </ExerciseInfoItem>
        <ExerciseInfoItem>
          <ExerciseInfoTitle>Target:</ExerciseInfoTitle>
          <ExerciseInfo>{capitalizeFirstLetter(target)}</ExerciseInfo>
        </ExerciseInfoItem>
      </ExerciseInfoList>
    </Card>
  );
};

export default ExerciseCard;
