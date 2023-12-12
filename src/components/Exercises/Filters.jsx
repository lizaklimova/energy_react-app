import { useState } from 'react';
import { FiltersList, FilterItemBtn } from './Filters.styled';

const Filters = ({ setFilter }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFilterClick = index => {
    setActiveIndex(index);
  };

  return (
    <FiltersList>
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
