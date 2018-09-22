import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Record({
  input: '',
  todos: List()
})();

const TodoRecord = Record({
  id: id++,
  text: '',
  checked: false
})

export default handleActions({
  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
  [INSERT]: (state, { payload: text }) => {
    const item = TodoRecord({ id: id++, text });
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState);