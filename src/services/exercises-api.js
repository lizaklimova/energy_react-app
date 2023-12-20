import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

// get for filter
export async function fetchFilter(page, perPage, filter) {
  const { data } = await axios.get(
    `/filters?filter=${filter}&page=${page}&limit=${perPage}`
  );

  return data;
}

//   get for cards
export async function fetchCards(page, perPage, filter, name, query = '') {
  const { data } = await axios.get(
    `/exercises?${filter}=${name}&keyword=${query}&page=${page}&limit=${perPage}`
  );
  return data;
}

// get for exercise information
export async function fetchExercise(id) {
  const { data } = await axios.get(`/exercises/${id}`);
  return data;
}

//quote of the day
export async function fetchQuote() {
  const { data } = await axios.get('/quote');
  return data;
}

//add rating
export async function patchRating(id, rating) {
  const { data } = await axios.patch(`/exercises/${id}/rating`, rating, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return data;
}

//subscribe
export async function subscribe(info) {
  try {
    const { data } = await axios.post(`/subscription`, info, {
      headers: {
        'content-type': 'application/json',
      },
    });
    Notify.info('Thank you for your review!');
    return data;
  } catch (error) {
    return Notify.info(error.response.data.message);
  }
}
