import { Pagination } from '@mui/material';
import { MainContainer } from 'components/App/App.styled';
import { useContext } from 'react';
import smoothScroll from 'scrolls/smoothScroll';
import { ThemeContext } from 'styled-components';

const PaginationList = ({ pageQty, pg, onChange, target }) => {
  const theme = useContext(ThemeContext);

  const handlePaginationChange = (_, num) => {
    onChange(num);
    smoothScroll(target);
  };

  return (
    <MainContainer>
      <Pagination
        count={pageQty}
        page={pg}
        onChange={handlePaginationChange}
        sx={{
          '& .MuiPaginationItem-root': {
            margin: 0,
            color: theme.text,
            transition: `color ${theme.eased}, background-color ${theme.eased}, fill   transition:  ${theme.eased}`,

            '&:hover': {
              backgroundColor: theme.hoveredOpacity,
              color: theme.background,
            },
          },

          '& .Mui-selected': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.text}`,
            color: theme.text,

            '&:hover': {
              backgroundColor: theme.hoveredOpacity,
              color: theme.text,
            },
          },

          '& .MuiPaginationItem-ellipsis': {
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.text,
              cursor: 'default',
            },
          },

          color: theme.text,
          fill: theme.text,
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          marginTop: '30px',
        }}
      />
    </MainContainer>
  );
};

export default PaginationList;
