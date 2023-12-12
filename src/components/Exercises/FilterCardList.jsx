import {
  FiltersList,
  FilterItem,
  FilterItemBlock,
  FilterTextWrap,
  FilterText,
  NameText,
} from './FilterCardsList.styled';

const FilterCardsList = ({ filters, setBreadCrumb }) => {
  const transformFilterName = name => {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const restWord = name.slice(1);

    return firstLetter + restWord;
  };

  return (
    <FiltersList>
      {filters.map(({ filter, name, imgURL }) => (
        <FilterItem
          key={name}
          onClick={() => setBreadCrumb(transformFilterName(name))}
        >
          <FilterItemBlock $img={imgURL} />
          <FilterTextWrap>
            <NameText>{transformFilterName(name)}</NameText>
            <FilterText>{filter}</FilterText>
          </FilterTextWrap>
        </FilterItem>
      ))}
    </FiltersList>
  );
};

export default FilterCardsList;
