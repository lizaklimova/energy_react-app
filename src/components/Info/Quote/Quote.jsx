import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import sprite from 'assets/img/sprite.svg';
import { fetchQuote } from 'services/exercises-api';
import Spinner from 'components/Loaders/SmallSpinner';
import {
  QuoteBlock,
  ManIcon,
  QuoteTextWrap,
  QuoteTitle,
  QuoteText,
  QuoteAuthor,
  CommasIcon,
} from '../Quote/Quote.styled';

const Quote = () => {
  const [quote, setQuote] = useState(
    () => JSON.parse(localStorage.getItem('quote')) ?? {}
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
        setIsLoading(true);
        const result = await fetchQuote();

        const updatedQuote = { ...result, date: new Date().getDate() };

        setQuote(updatedQuote);
        localStorage.setItem('quote', JSON.stringify(updatedQuote));
      } catch ({ message }) {
        Notify.info(message);
      } finally {
        setIsLoading(false);
      }
    };
    if (new Date().getDate() !== quote.date) {
      getQuote();
    }
  }, [quote]);

  return (
    <QuoteBlock>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ManIcon width={34} height={32}>
            <use href={`${sprite}#icon-man`}></use>
          </ManIcon>
          <QuoteTextWrap>
            <QuoteTitle>Quote of the day</QuoteTitle>
            <QuoteText>{quote.quote}</QuoteText>
            <QuoteAuthor>{quote.author}</QuoteAuthor>
          </QuoteTextWrap>
          <CommasIcon width={20} height={20}>
            <use href={`${sprite}#icon-commas`}></use>
          </CommasIcon>
        </>
      )}
    </QuoteBlock>
  );
};

export default Quote;
