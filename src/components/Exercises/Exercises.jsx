import { useState, useEffect } from 'react';
import { fetchFilter } from 'services/exercises-api';
import { Notify } from 'notiflix';
import { MainContainer } from 'components/App/App.styled';
import Search from './Search';
import Filters from './Filters';
import FilterCardsList from './FilterCardList';
import Info from 'components/Info/Info';
import Loader from 'components/Loader/Loader';
import {
  ExercisesSection,
  ExercisesTitle,
  BreadCrumb,
  ExersisesPositionWrap,
  FiltersAndSearchWrap,
  FiltersCardsAndInfoWrap,
} from './Exercises.styled';

const Exercises = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('Body%20parts');
  const [filterResults, setFilterResults] = useState([]);
  const [breadCrumb, setBreadCrumb] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCardsFromFilter = async () => {
      try {
        setIsLoading(true);
        const resp = await fetchFilter(page, 10, filter);

        setFilterResults(resp.results);
      } catch ({ message }) {
        Notify.info(message);
      } finally {
        setIsLoading(false);
      }
    };
    getCardsFromFilter();
  }, [filter, page]);

  return (
    <>
      {isLoading && <Loader />}
      <MainContainer>
        <ExercisesSection>
          <ExersisesPositionWrap>
            <ExercisesTitle>
              Exercises
              {breadCrumb && (
                <>
                  &nbsp;
                  <span>/</span>
                  &nbsp;
                  <BreadCrumb>{breadCrumb}</BreadCrumb>
                </>
              )}
            </ExercisesTitle>
            <FiltersAndSearchWrap>
              <Search />
              <Filters setFilter={setFilter} />
            </FiltersAndSearchWrap>
          </ExersisesPositionWrap>

          <FiltersCardsAndInfoWrap>
            <FilterCardsList
              filters={filterResults}
              setBreadCrumb={setBreadCrumb}
            />
            <Info />
          </FiltersCardsAndInfoWrap>
        </ExercisesSection>
      </MainContainer>
    </>
  );
};

export default Exercises;
