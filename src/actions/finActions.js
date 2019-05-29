import { GET_CARDS } from './types';
import data from '../data';

/* List All Cards */
export const getCards = () => {
  return {
    type: GET_CARDS,
    payload: data.cards
  };
};
