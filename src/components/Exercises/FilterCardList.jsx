import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import {
  FiltersList,
  FilterItem,
  FilterItemBlock,
  FilterTextWrap,
  FilterText,
  NameText,
} from './FilterCardsList.styled';

const FilterCardsList = ({ filters, setBreadCrumb }) => {
  return (
    <FiltersList>
      {filters.map(({ filter, name, imgURL }) => (
        <FilterItem
          key={name}
          onClick={() => setBreadCrumb(capitalizeFirstLetter(name))}
        >
          <FilterItemBlock $img={imgURL} />
          <FilterTextWrap>
            <NameText>{capitalizeFirstLetter(name)}</NameText>
            <FilterText>{filter}</FilterText>
          </FilterTextWrap>
        </FilterItem>
      ))}
    </FiltersList>
  );
};

export default FilterCardsList;
