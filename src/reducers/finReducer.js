import { GET_CARDS } from '../actions/types';

const initialState = {
  cards: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  }
}
