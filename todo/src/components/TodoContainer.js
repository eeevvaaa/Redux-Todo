import React from 'react';
import {connect} from 'react-redux'
import TodoList from './TodoList';

class TodoContainer extends React.Component {
  state = {
    inputText: ''
  };

  handleChange = event => this.setState({ inputText: event.target.value });

  render() {
    return (
      <TodoList
        handleChange={this.handleChange}
        inputText={this.state.inputText}
        todoList={this.props.todos}
      />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps,{})(TodoContainer);   //currying