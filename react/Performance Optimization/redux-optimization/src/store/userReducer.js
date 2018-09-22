import { ADD_USER } from './userActions';

const initialState = {
  list: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        list: [
          ...state.list,
          payload.value,
        ],
      };
    default:
      return state;
  }
};
