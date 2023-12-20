import { useState, useEffect } from 'react';
import FavInfo from '../FavInfo';
import FavEmptyMsg from 'components/Favorites/FavEmptyMsg';
import { FavSection, FavTitle, InfoCardsWrapper } from './Favorites.styled';
import FavCardsList from 'components/Favorites/FavCardsList';

const Favorites = () => {
  const [areCardsAdded, setAreCardsAdded] = useState(false);
  const [storedCards, setStoredCards] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem('favorites') ?? [];

    try {
      const parsedCards = JSON.parse(storedCards);
      if (parsedCards && parsedCards.length > 0) {
        setAreCardsAdded(true);
        setStoredCards(parsedCards);
      }
    } catch ({ message }) {
      console.log(message);
    }
  }, []);

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
