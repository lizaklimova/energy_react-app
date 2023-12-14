import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiltersList, FilterItemBtn } from './Filters.styled';
import smoothScroll from 'scrolls/smoothScroll';

const Filters = ({ setFilter, resetPage, page, resetBreadCrumb }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line
  const [_, setSearchParams] = useSearchParams();

  const handleFilterClick = index => {
    resetPage(1);
    setActiveIndex(index);
    smoothScroll('filters');
    setSearchParams({ page });
    resetBreadCrumb('');
  };

  return (
    <FiltersList name="filters">
      <li>
        <FilterItemBtn
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => {
            handleFilterClick(0);
            setFilter('Body%20parts');
          }}
        >
          Body parts
        </FilterItemBtn>
      </li>
      <li>
        <FilterItemBtn
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => {
            handleFilterClick(1);
            setFilter('Muscles');
          }}
        >
          Muscles
        </FilterItemBtn>
      </li>
      <li>
        <FilterItemBtn
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => {
            handleFilterClick(2);
            setFilter('Equipment');
          }}
        >
          Equipment
        </FilterItemBtn>
      </li>
    </FiltersList>
  );
};

export default Filters;
