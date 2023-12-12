import { MainContainer } from 'components/App/App.styled';
import Search from './Search';
import {
  ExercisesSection,
  ExercisesTitle,
  ExersisesPositionWrap,
  FiltersAndSearchWrap,
} from './Exercises.styled';
import Filters from './Filters';
import FilterCardsList from './FilterCardList';
import { useState, useEffect } from 'react';
import { fetchFilter } from 'services/exercises-api';

const Exercises = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    const getCardsFromFilter = async () => {
      const resp = await fetchFilter(page, 10, filter);

      setFilterResults(resp.results);
    };
    getCardsFromFilter();
  }, [filter, page]);

  return (
    <MainContainer>
      <ExercisesSection>
        <ExersisesPositionWrap>
          <ExercisesTitle>Exercises /</ExercisesTitle>
          <FiltersAndSearchWrap>
            <Search />
            <Filters setFilter={setFilter} />
          </FiltersAndSearchWrap>
        </ExersisesPositionWrap>
        <FilterCardsList filters={filterResults} />
      </ExercisesSection>
    </MainContainer>
  );
};

export default Exercises;
