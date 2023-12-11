import {
  SearchWrap,
  SearchInputLabel,
  SearchInput,
  SearchIcon,
} from './Search.styled';

const Search = () => {
  return (
    <SearchWrap>
      <SearchInput id="searchInput" type="text" autoComplete="off" />
      <SearchInputLabel htmlFor="searchInput">Search</SearchInputLabel>
      <SearchIcon />
    </SearchWrap>
  );
};

export default Search;
