import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) => {
    todoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    const { input } = this.props;
    todoActions.insert(input);
    todoActions.changeInput('');
  }

  handleToggle = (id) => {
    todoActions.toggle(id);
  }

  handleRemove = (id) => {
    todoActions.remove(id);
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  ({ todo }) => ({
    input: todo.input,
    todos: todo.todos
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);