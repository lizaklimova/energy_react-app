import { useState, useEffect, useMemo, useContext } from 'react';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';
import { fetchFilter } from 'services/exercises-api';
import { MainContainer } from 'components/App/App.styled';
import Search from 'components/Exercises/Search';
import Filters from 'components/Exercises/Filters';
import FilterCardsList from 'components/Exercises/FilterCardsList';
import Info from 'components/Info/InfoSection';
import Loader from 'components/Loaders/MainLoader/Loader';
import PaginationList from 'components/PaginationList';
import ExercisesCardsList from 'components/Exercises/ExercisesCardsList';
import {
  ExercisesSection,
  ExercisesTitle,
  BreadCrumb,
  ExersisesPositionWrap,
  FiltersAndSearchWrap,
  FiltersCardsAndInfoWrap,
} from './Exercises.styled';
import FeedbackModal from 'components/FeedbackModal/FeedbackModal';
import { ModalContext } from 'contexts/ExercModalOpen';

const Exercises = () => {
  const { isFeedModalOpen, openFeedModal, closeFeedModal } =
    useContext(ModalContext);

  const [page, setPage] = useState(1);
  const [totalPgs, setTotalPgs] = useState(1);
  const [filter, setFilter] = useState('Body%20parts');
  const [filterResults, setFilterResults] = useState([]);
  const [breadCrumb, setBreadCrumb] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState(null);

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

  const searchExercisesCard = useMemo(
    () =>
      throttle(q => {
        setQuery(q);
      }, 1000),
    []
  );

  const getExerciseActiveId = id => {
    setActiveId(id);
  };

  return (
    <>
      {isLoading && <Loader />}

      <ExercisesSection>
        <MainContainer>
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
                setQuery={setQuery}
              />
            </FiltersAndSearchWrap>
          </ExersisesPositionWrap>

          <FiltersCardsAndInfoWrap>
            {!breadCrumb ? (
              <div>
                <FilterCardsList
                  filters={filterResults}
                  setBreadCrumb={setBreadCrumb}
                />
                <PaginationList
                  pageQty={totalPgs}
                  pg={page}
                  onChange={setPage}
                />
              </div>
            ) : (
              <ExercisesCardsList
                page={page}
                filter={filter}
                name={breadCrumb}
                query={query}
                setPage={setPage}
                openFeedModal={openFeedModal}
                returnExercId={getExerciseActiveId}
              />
            )}

            {isFeedModalOpen && (
              <FeedbackModal
                closeFeedModal={closeFeedModal}
                exercId={activeId}
              />
            )}

            <Info />
          </FiltersCardsAndInfoWrap>
        </MainContainer>
      </ExercisesSection>
    </>
  );
};

export default Exercises;
