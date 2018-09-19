import { ADD_TODO } from "../actions";


//currentState=reducer(currentState, action) // returns an object that has the same shape as our state

const initialState = {    //our state is always an object
  todos: [{               //always going to an array and have objects inside it
    value: 'Walk the dog.',
    completed: false
  },]
}

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {...state, todos:[...state.todos, action.payload] };
    default:
    return state;
  }
}