import { useContext, useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { ModalContext } from 'contexts/ExercModalOpen';
import { ThemeContext } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';
import sprite from 'assets/img/sprite.svg';
import { MainContainer } from 'components/App/App.styled';
import { patchRating } from 'services/exercises-api';
import {
  FeedModalBackdrop,
  FeedModal,
  FeedModalCloseBtn,
  FeedModalCloseIcon,
  FeedModalRatDiv,
  FeedModalRatTitle,
  FeedModalRatValue,
  FeedModalRatListWrap,
  FeedModalRatList,
  FeedModalRatStar,
  FeedModalForm,
  FeedModalInput,
  FeedModalArea,
  FeedModalSubmitBtn,
} from './FeedbackModal.styled';

const FeedbackModal = ({ closeFeedModal, exercId }) => {
  const { openExercModal } = useContext(ModalContext);
  const { theme } = useContext(ThemeContext);

  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        closeFeedModal();
        openExercModal();
      }
    };

    document.addEventListener('keydown', onEscClose);

    return () => {
      document.removeEventListener('keydown', onEscClose);
    };
  }, [closeFeedModal, openExercModal]);

  const handleRatingStarClick = value => {
    setStarValue(value);
  };

  const handleRatingStarMouseOver = value => {
    setHoverValue(value);
  };

  const handleRatingStarMouseLeave = () => {
    setHoverValue(undefined);
  };

  const addRating = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const review = e.currentTarget.elements.review.value;

    const ratData = {
      rate: starValue,
      email,
      review,
    };

    patchRating(exercId, ratData);

    e.currentTarget.reset();
    closeFeedModal();
    Notify.info('Thank you for your review!');
  };

  const onBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeFeedModal();
      openExercModal();
    }
  };

  const starsArr = Array(5).fill(0);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <FeedModalBackdrop onClick={onBackdropClose}>
      <MainContainer onClick={onBackdropClose}>
        <FeedModal className={`${showContent && 'showModal'}`}>
          <FeedModalCloseBtn
            type="button"
            onClick={() => {
              closeFeedModal();
              openExercModal();
            }}
          >
            <FeedModalCloseIcon width={24} height={24}>
              <use href={`${sprite}#icon-close`}></use>
            </FeedModalCloseIcon>
          </FeedModalCloseBtn>

          <FeedModalRatDiv>
            <FeedModalRatTitle>Rating</FeedModalRatTitle>
            <FeedModalRatListWrap>
              <FeedModalRatValue>{starValue}.0</FeedModalRatValue>
              <FeedModalRatList>
                {starsArr.map((_, index) => (
                  <li key={index}>
                    <FeedModalRatStar
                      $color={
                        (hoverValue || starValue) > index
                          ? currentTheme.orange
                          : currentTheme.greyStarFill
                      }
                      width={20}
                      height={20}
                      onClick={() => handleRatingStarClick(index + 1)}
                      onMouseOver={() => handleRatingStarMouseOver(index + 1)}
                      onMouseLeave={handleRatingStarMouseLeave}
                    >
                      <use href={`${sprite}#icon-star`}></use>
                    </FeedModalRatStar>
                  </li>
                ))}
              </FeedModalRatList>
            </FeedModalRatListWrap>
          </FeedModalRatDiv>

          <FeedModalForm onSubmit={addRating}>
            <FeedModalInput
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
            />
            <FeedModalArea
              name="review"
              placeholder="Your comment"
              required
            ></FeedModalArea>
            <FeedModalSubmitBtn type="submit">Send</FeedModalSubmitBtn>
          </FeedModalForm>
        </FeedModal>
      </MainContainer>
    </FeedModalBackdrop>
  );
};

export default FeedbackModal;
