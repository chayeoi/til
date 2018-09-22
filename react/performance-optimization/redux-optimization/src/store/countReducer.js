import { INCREASE_COUNT, DECREASE_COUNT } from './countActions';

const initialState = {
  count: 0,
}

export default (state = initialState, { type }) => {
  switch (type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
