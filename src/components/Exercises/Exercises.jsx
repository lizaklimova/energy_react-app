import { MainContainer } from 'components/App/App.styled';
import Search from './Search';
import {
  ExercisesSection,
  ExercisesTitle,
  ExersisesPositionWrap,
  FiltersAndSearchWrap,
} from './Exercises.styled';
import Filters from './Filters';

const Exercises = () => {
  return (
    <MainContainer>
      <ExercisesSection>
        <ExersisesPositionWrap>
          <ExercisesTitle>Exercises /</ExercisesTitle>
          <FiltersAndSearchWrap>
            <Search />
            <Filters />
          </FiltersAndSearchWrap>
        </ExersisesPositionWrap>
      </ExercisesSection>
    </MainContainer>
  );
};

export default Exercises;
