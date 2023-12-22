import { useEffect, useState, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from 'contexts/ExercModalOpen';
import { ThemeContext } from 'contexts/ThemeContext';
import { darkTheme, lightTheme } from 'theme';
import sprite from 'assets/img/sprite.svg';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import { MainContainer } from 'components/App/App.styled';
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

const modalRoot = document.getElementById('modal-root');

const ExerciseModal = ({
  info: {
    _id,
    name,
    description,
    gifUrl,
    rating,
    target,
    bodyPart,
    equipment,
    popularity,
    burnedCalories,
    time,
  },
  openFeedModal,
  cards,
}) => {
  const { closeExercModal } = useContext(ModalContext);
  const { theme } = useContext(ThemeContext);

  const [favCards, setFavCards] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );
  const [showContent, setShowContent] = useState(false);

  const isAddedToFavoriteRef = useRef(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        setShowContent(false);
        setTimeout(() => {
          closeExercModal();
        }, 500);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('keydown', onEscClose);

    return () => {
      document.removeEventListener('keydown', onEscClose);
    };
  }, [closeExercModal]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
    setFavCards(storedFavorites);

    isAddedToFavoriteRef.current = storedFavorites.find(
      card => card._id === _id
    );
  }, [_id]);

  const addToFavorites = () => {
    isAddedToFavoriteRef.current = true;
    const addedCard = cards.find(exerc => exerc._id === _id);
    const updatedCards = [...favCards, addedCard];
    setFavCards(updatedCards);
    localStorage.setItem('favorites', JSON.stringify(updatedCards));
  };

  const deleteFromFavorites = () => {
    isAddedToFavoriteRef.current = false;
    const updatedFavCards = favCards.filter(card => card._id !== _id);
    setFavCards(updatedFavCards);
    localStorage.setItem('favorites', JSON.stringify(updatedFavCards));
  };

  const onBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowContent(false);
      setTimeout(() => {
        closeExercModal();
      }, 500);
      document.body.style.overflow = '';
    }
  };

  const starsArr = Array(5).fill(0);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return createPortal(
    <ExercModalBackdrop
      className={`${showContent && 'showBackdrop'}`}
      onClick={onBackdropClose}
    >
      <MainContainer onClick={onBackdropClose}>
        <ExercModal className={`${showContent && 'showModal'}`}>
          <ModalCloseBtn
            type="button"
            onClick={() => {
              setShowContent(false);
              setTimeout(() => {
                closeExercModal();
              }, 500);
              document.body.style.overflow = '';
            }}
          >
            <ModalCloseIcon width={24} height={24}>
              <use href={`${sprite}#icon-close`}></use>
            </ModalCloseIcon>
          </ModalCloseBtn>

          <TabPositionDiv>
            <ModalGifBlock $gifUrl={gifUrl}></ModalGifBlock>
            <div>
              <ExercName>{capitalizeFirstLetter(name)}</ExercName>
              <RatingDiv>
                <RatingValue>{rating.toFixed(1)}</RatingValue>

                <RatingList>
                  {starsArr.map((_, index) => (
                    <li key={index}>
                      <RatingStarIcon
                        width={18}
                        height={18}
                        $fill={
                          Math.round(rating) >= index + 1
                            ? currentTheme.orange
                            : currentTheme.greyStarFill
                        }
                      >
                        <use href={`${sprite}#icon-star`}></use>
                      </RatingStarIcon>
                    </li>
                  ))}
                </RatingList>
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
                  <ExercInfoValue>
                    {capitalizeFirstLetter(bodyPart)}
                  </ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Equipment</ExercInfoName>
                  <ExercInfoValue>
                    {capitalizeFirstLetter(equipment)}
                  </ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Popular</ExercInfoName>
                  <ExercInfoValue>{popularity}</ExercInfoValue>
                </ExercInfoItem>
                <ExercInfoItem>
                  <ExercInfoName>Burned Calories</ExercInfoName>
                  <ExercInfoValue>{`${burnedCalories}/${time}min`}</ExercInfoValue>
                </ExercInfoItem>
              </ExercInfoList>
              <hr />
              <ExercDescr>{description}</ExercDescr>
            </div>
          </TabPositionDiv>

          <ModalBtnsList>
            <li>
              {isAddedToFavoriteRef.current ? (
                <AddRemoveBtn type="button" onClick={deleteFromFavorites}>
                  Remove from favorites
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-trash`}></use>
                  </svg>
                </AddRemoveBtn>
              ) : (
                <AddRemoveBtn type="button" onClick={addToFavorites}>
                  Add to favorites
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-heart`}></use>
                  </svg>
                </AddRemoveBtn>
              )}
            </li>
            <li>
              <GiveRatingBtn
                type="button"
                onClick={() => {
                  openFeedModal();
                  closeExercModal();
                }}
              >
                Give rating
              </GiveRatingBtn>
            </li>
          </ModalBtnsList>
        </ExercModal>
      </MainContainer>
    </ExercModalBackdrop>,
    modalRoot
  );
};

export default ExerciseModal;
