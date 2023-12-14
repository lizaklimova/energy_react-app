import { useEffect, useState } from 'react';
import { fetchCards } from 'services/exercises-api';
import { Notify } from 'notiflix';
import { editFilterName } from 'helpers/editFilterName';
import PaginationList from 'components/PaginationList/PaginationList';
import Loader from 'components/Loaders/Loader';
import ExerciseCard from './ExerciseCard';
import NoExercisesMsg from './NoExercisesMsg';
import { CardsList, CardListItem } from './ExercisesCardsList.styled';

const ExercisesCardsList = ({ page, filter, name, query, setPage }) => {
  const [pg, setPg] = useState(1);
  const [totalPgs, setTotalPgs] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      {isLoading && <Loader />}
      <CardsList>
        {filteredCards.length > 0 ? (
          filteredCards.map(
            ({ _id, bodyPart, burnedCalories, name, rating, target }) => (
              <CardListItem key={_id}>
                <ExerciseCard
                  rating={rating}
                  exercise={name}
                  calories={burnedCalories}
                  part={bodyPart}
                  target={target}
                />
              </CardListItem>
            )
          )
        ) : !query ? (
          <NoExercisesMsg name={name} variant="filter" />
        ) : (
          <NoExercisesMsg name={`" ${query} "`} variant="query" />
        )}
      </CardsList>
      {filteredCards.length > 0 && (
        <PaginationList pageQty={totalPgs} pg={pg} onChange={setPg} />
      )}
    </>
  );
};

export default ExercisesCardsList;
