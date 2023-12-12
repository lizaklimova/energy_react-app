import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import sprite from 'img/sprite.svg';
import {
  QuoteBlock,
  ManIcon,
  QuoteTextWrap,
  QuoteTitle,
  QuoteText,
  QuoteAuthor,
  CommasIcon,
} from './Quote.styled';
import { fetchQuote } from 'services/exercises-api';

const Quote = () => {
  const [quote, setQuote] = useState(() => localStorage.getItem('quote') || {});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
        setIsLoading(true);
        const result = await fetchQuote();
        setQuote({ ...result, date: new Date().getDate() });

        localStorage.setItem('quote', JSON.stringify(quote));
      } catch ({ message }) {
        Notify.info(message);
      } finally {
        setIsLoading(false);
      }
    };
    if (!quote.date || new Date().getDate() !== quote.date) {
      getQuote();
    }
  }, [quote]);

  return (
    <QuoteBlock>
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
    </QuoteBlock>
  );
};

export default Quote;
