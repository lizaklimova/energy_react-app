import { useState, useEffect } from 'react';
import FavInfo from '../FavInfo';
import FavEmptyMsg from 'components/Favorites/FavEmptyMsg';
import { FavSection, FavTitle, InfoCardsWrapper } from './Favorites.styled';
import FavCardsList from 'components/Favorites/FavCardsList';

const Favorites = () => {
  const [areCardsAdded, setAreCardsAdded] = useState(false);
  const [storedCards, setStoredCards] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );

  useEffect(() => {
    if (storedCards && storedCards.length > 0) setAreCardsAdded(true);
    localStorage.setItem('favorites', JSON.stringify(storedCards));
  }, [storedCards]);

  return (
    <FavSection>
      <FavTitle>Favorites</FavTitle>
      <InfoCardsWrapper>
        <FavInfo />
        {areCardsAdded ? (
          <FavCardsList favCards={storedCards} setSavedCards={setStoredCards} />
        ) : (
          <FavEmptyMsg />
        )}
      </InfoCardsWrapper>
    </FavSection>
  );
};

export default Favorites;
