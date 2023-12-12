import {
  FiltersList,
  FilterItem,
  FilterItemBlock,
} from './FilterCardsList.styled';

const FilterCardsList = ({ filters }) => {
  return (
    <FiltersList>
      {filters.map(({ name, imgURL }) => (
        <FilterItem key={name}>
          <FilterItemBlock $img={imgURL} />
        </FilterItem>
      ))}
    </FiltersList>
  );
};

export default FilterCardsList;
