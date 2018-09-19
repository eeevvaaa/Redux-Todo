export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE';

export const addTodo = todo => {
  return{
    type: ADD_TODO,
    payload: {
      value: todo,
      completed: false,
    }
  }
}