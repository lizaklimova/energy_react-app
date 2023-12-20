import { useContext, useState } from 'react';
import { ModalContext } from 'contexts/ExercModalOpen';
import FavCard from '../FavCard';
import { FavCardsUl, FavCardLi } from './FavCardsList.styled';
import ExerciseModal from 'components/Exercises/ExerciseModal';
import FeedbackModal from 'components/FeedbackModal/FeedbackModal';
import PaginationList from 'components/PaginationList/PaginationList';

const FavCardsList = ({ favCards, setSavedCards }) => {
  const {
    isModalOpen,
    openExercModal,
    isFeedModalOpen,
    openFeedModal,
    closeFeedModal,
  } = useContext(ModalContext);

  const [favExercId, setFavExercId] = useState(null);
  const [curExercId, setCurExercId] = useState(null);
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = page * cardsPerPage;

  const visibleFavModal = favCards.find(card => card._id === favExercId);
  const totalPages = Math.ceil(favCards.length / cardsPerPage);
  const visibleFavCards =
    window.innerWidth > 1440 ? favCards : favCards.slice(startIndex, endIndex);

  return (
    <>
      <FavCardsUl name="favorites">
        {visibleFavCards.length > 0 &&
          visibleFavCards.map(
            ({ _id, bodyPart, burnedCalories, name, target, time }) => (
              <FavCardLi key={_id}>
                <FavCard
                  id={_id}
                  part={bodyPart}
                  calories={burnedCalories}
                  name={name}
                  target={target}
                  time={time}
                  openModal={openExercModal}
                  setCurId={setFavExercId}
                  favCards={favCards}
                  setSavedCards={setSavedCards}
                  setCurExercId={setCurExercId}
                />
              </FavCardLi>
            )
          )}
        {window.innerWidth < 1440 && favCards.length > 0 && (
          <PaginationList
            pageQty={totalPages}
            pg={page}
            onChange={setPage}
            target="favorites"
          />
        )}
      </FavCardsUl>

      {isFeedModalOpen && (
        <FeedbackModal closeFeedModal={closeFeedModal} exercId={curExercId} />
      )}

      {isModalOpen && (
        <ExerciseModal
          info={visibleFavModal}
          openFeedModal={openFeedModal}
          cards={favCards}
        />
      )}
    </>
  );
};

export default FavCardsList;
