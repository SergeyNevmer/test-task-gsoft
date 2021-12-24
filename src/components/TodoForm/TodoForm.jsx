import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./TodoForm.module.scss";
import { saveTodo } from "../../redux/actions";

export const TodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const saveTask = useCallback((text) => dispatch(saveTodo(text)), [dispatch]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (task === "") return;

    saveTask(task);
    setTask("");
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleClick}>
        <label>
          Task:&nbsp;
          <input
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={handleChange}
          />
        </label>
        <button className={styles.bthSaveTodo} type="submit">
          Save
        </button>
      </form>
    </>
  );
};
