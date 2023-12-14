import { useState, useEffect } from 'react';
import { fetchFilter } from 'services/exercises-api';
import { Notify } from 'notiflix';
import { MainContainer } from 'components/App/App.styled';
import Search from './Search';
import Filters from './Filters';
import FilterCardsList from './FilterCardList';
import Info from 'components/Info/Info';
import Loader from 'components/Loaders/Loader';
import PaginationList from 'components/PaginationList/PaginationList';
import ExercisesCardsList from './ExercisesCardsList';
import {
  ExercisesSection,
  ExercisesPaginationWrap,
  ExercisesTitle,
  BreadCrumb,
  ExersisesPositionWrap,
  FiltersAndSearchWrap,
  FiltersCardsAndInfoWrap,
} from './Exercises.styled';

const Exercises = () => {
  const [page, setPage] = useState(1);
  const [totalPgs, setTotalPgs] = useState(1);
  const [filter, setFilter] = useState('Body%20parts');
  const [filterResults, setFilterResults] = useState([]);
  const [breadCrumb, setBreadCrumb] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCardsFromFilter = async () => {
      try {
        setIsLoading(true);

        let resp = null;

        if (window.innerWidth >= 768) {
          resp = await fetchFilter(page, 12, filter);
        } else {
          resp = await fetchFilter(page, 10, filter);
        }

        setFilterResults(resp.results);
        setTotalPgs(resp.totalPages);
      } catch ({ message }) {
        Notify.info(message);
      } finally {
        setIsLoading(false);
      }
    };
    getCardsFromFilter();
  }, [filter, page]);

  const searchExercisesCard = q => {
    setQuery(q);
  };

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
              {breadCrumb && <Search onChange={searchExercisesCard} />}
              <Filters
                setFilter={setFilter}
                resetPage={setPage}
                page={page}
                resetBreadCrumb={setBreadCrumb}
              />
            </FiltersAndSearchWrap>
          </ExersisesPositionWrap>

          <FiltersCardsAndInfoWrap>
            {!breadCrumb ? (
              <ExercisesPaginationWrap>
                <FilterCardsList
                  filters={filterResults}
                  setBreadCrumb={setBreadCrumb}
                />
                <PaginationList
                  pageQty={totalPgs}
                  pg={page}
                  onChange={setPage}
                />
              </ExercisesPaginationWrap>
            ) : (
              <ExercisesCardsList
                page={page}
                filter={filter}
                name={breadCrumb}
                query={query}
                setPage={setPage}
              />
            )}

            <Info />
          </FiltersCardsAndInfoWrap>
        </ExercisesSection>
      </MainContainer>
    </>
  );
};

export default Exercises;
