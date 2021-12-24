import { Types } from "../types";

const initialState = [];

export const saveTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAVE_TODO:
      return [...state, action.payload];
    case Types.CHANGE_STATUS:
      const currentTask = state.find((task) => task.id === action.payload);
      currentTask.completed = !currentTask.completed;
      const index = state.findIndex((task) => task.id === action.payload);
      const newState = [...state];
      newState.splice(index, 1, currentTask);
      return newState;
    case Types.REMOVE_TODO:
      return [...state].filter((task) => task.id !== action.payload);
    case Types.ADD_TODO:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
