import { SearchForm, SearchInput, SearchIcon } from './Search.styled';

const Search = ({ onChange }) => {
  const handleSearch = e => {
    const query = e.target.value.toLowerCase().trim();
    onChange(query);
  };

  return (
    <SearchForm onChange={handleSearch}>
      <SearchInput
        id="searchInput"
        type="text"
        autoComplete="off"
        placeholder="Search"
      />

      <SearchIcon />
    </SearchForm>
  );
};

export default Search;
