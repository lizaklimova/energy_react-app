import { useContext, useEffect, useState } from 'react';
import { fetchCards } from 'services/exercises-api';
import { Notify } from 'notiflix';
import { editFilterName } from 'helpers/editFilterName';
import PaginationList from 'components/PaginationList';
import Loader from 'components/Loaders/MainLoader/Loader';
import ExerciseCard from 'components/Exercises/ExerciseCard';
import ExerciseModal from 'components/Exercises/ExerciseModal';
import NoExercisesMsg from 'components/Exercises/NoExercisesMsg';
import { CardsList, CardListItem } from './ExercisesCardsList.styled';
import { ModalContext } from 'contexts/ExercModalOpen';

const ExercisesCardsList = ({
  filter,
  name,
  query,
  openFeedModal,
  returnExercId,
}) => {
  const { isModalOpen } = useContext(ModalContext);

  const [pg, setPg] = useState(1);
  const [totalPgs, setTotalPgs] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exercId, setExercId] = useState(null);

  useEffect(() => {
    const getExercisesCards = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchCards(
          pg,
          12,
          editFilterName(filter),
          name.toLowerCase(),
          query
        );

        setCards([...resp.results]);
        setTotalPgs(resp.totalPages);
      } catch ({ message }) {
        Notify.info(message);
      } finally {
        setIsLoading(false);
      }
    };
    getExercisesCards();
  }, [name, filter, pg, query]);

  const filteredCards = cards.filter(card => card.name.includes(query));
  const visibleModal = cards.find(card => card._id === exercId);

  return (
    <>
      {isLoading && <Loader />}

      <CardsList>
        {filteredCards.length > 0 ? (
          filteredCards.map(
            ({ _id, bodyPart, burnedCalories, name, rating, target }) => (
              <CardListItem key={_id}>
                <ExerciseCard
                  id={_id}
                  rating={rating}
                  exercise={name}
                  calories={burnedCalories}
                  part={bodyPart}
                  target={target}
                  setExercId={setExercId}
                  returnExercId={returnExercId}
                  exercId={exercId}
                />
              </CardListItem>
            )
          )
        ) : !query ? (
          <NoExercisesMsg name={name} variant="filter" />
        ) : (
          <NoExercisesMsg name={`" ${query} "`} variant="query" />
        )}
        {filteredCards.length > 0 && (
          <PaginationList
            pageQty={totalPgs}
            pg={pg}
            onChange={setPg}
            target="filters"
          />
        )}
      </CardsList>
      {isModalOpen && (
        <ExerciseModal
          info={visibleModal}
          openFeedModal={openFeedModal}
          cards={cards}
        />
      )}
    </>
  );
};

export default ExercisesCardsList;
