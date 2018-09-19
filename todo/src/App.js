import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
        </header>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
