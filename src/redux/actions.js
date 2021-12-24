import { Types } from "./types";
import { v4 as uuidv4 } from "uuid";

export const saveTodo = (title) => ({
  type: Types.SAVE_TODO,
  payload: {
    id: uuidv4(),
    title: `${title}`,
    completed: false,
  },
});

export const changeStatus = (id) => ({
  type: Types.CHANGE_STATUS,
  payload: id,
});

export const removeTodo = (id) => ({
  type: Types.REMOVE_TODO,
  payload: id,
});

export const addResponseFromServer = (array) => ({
  type: Types.ADD_TODO,
  payload: array,
});
