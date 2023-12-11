import { useState } from 'react';
import { FiltersList, FilterItemBtn } from './Filters.styled';

const Filters = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFilterClick = index => {
    setActiveIndex(index);
  };

  return (
    <FiltersList>
      <li>
        <FilterItemBtn
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => handleFilterClick(0)}
        >
          Body parts
        </FilterItemBtn>
      </li>
      <li>
        <FilterItemBtn
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => handleFilterClick(1)}
        >
          Muscles
        </FilterItemBtn>
      </li>
      <li>
        <FilterItemBtn
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => handleFilterClick(2)}
        >
          Equipment
        </FilterItemBtn>
      </li>
    </FiltersList>
  );
};

export default Filters;